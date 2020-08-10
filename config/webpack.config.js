const path = require('path');
const glob = require('glob');
const  { CleanWebpackPlugin } = require('clean-webpack-plugin')   // 清除生成的文件
const HtmlWebpackPlugin = require('html-webpack-plugin')  //  生成html页面
const VueLoaderPlugin = require('vue-loader/lib/plugin')      // v15版的vue-loader配置需要加个VueLoaderPlugin     
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  // 抽离css样式为独立文件
let {merge} = require('webpack-merge');               //  合成两个webpack的配置    
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')      // 用于压缩和优化CSS 
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');     // 用于压缩和优化js


const isDev = process.env.NODE_ENV =='development'           
let entries = {},     //  入口文件
    htmlpages = [];   //  生成html文件
const PAGE_PATH = path.resolve(__dirname, './src/pages') + '/*/*.js';  // js入口文件（或html页面入口文件） 使用相对路径 
/*
遍历指定目录(PAGE_PATH)下的js文件
1、获取要生成html的文件名filename；  2、生成多入口文件对象entries； 3、生成要输出的html数组htmlpages，然后在下面的plugins中解构获取；
*/
glob.sync(PAGE_PATH).forEach(function(filePath){   
    let filename = filePath.substring(filePath.lastIndexOf('\/')+1, filePath.lastIndexOf('.'));   
    entries[filename] = filePath;
    let tplPath = filePath.substring(0,filePath.length-2) + 'html';
    htmlpages.push(
        new HtmlWebpackPlugin({
            // favicon: './src/image/favicon.ico',      // 配置favicon
            filename: `${filename}.html`,     // 生成html文件输出路径    `test/${filename}.html`
            template: tplPath,   //  模板路径
            inject:true,
            hash:true,    //为静态资源生成hash值
            chunks:[filename],
            minify:{       //压缩HTML文件
                removeAttributeQuotes:true,   // 移除属性的引号
                removeComments:true,  //移除HTML中的注释
                collapseWhitespace:true    //删除空白符与换行符
            },
             /*
            因为和 webpack 4 的兼容性问题，chunksSortMode 参数需要设置为 none
            https://github.com/jantimon/html-webpack-plugin/issues/870
            */
            chunksSortMode: 'none' 
        })
    );
})
console.log('--------------------------')
// console.log(...htmlpages)

/*  webpack配置文件  */     
let webpackConfig = {
    mode: isDev ? 'development' : 'production',
    /*
    开发模式下使用 cheap-module-eval-source-map, 生成的 source map 能和源码每行对应，方便打断点调试
    生产模式下使用 hidden-source-map, 生成独立的 source map 文件，并且不在 js 文件中插入 source map 路径，用于在 error report 工具中查看 （比如 Sentry)
    生产模式下使用 cheap-eval-source-map，这种模式 UglifyJsPlugin可压缩
    */
    devtool: isDev ? 'cheap-module-eval-source-map' : 'cheap-eval-source-map',
    entry: entries,      
    output: {
        filename: 'js/[name].[Hash:4].js',      // 设置 打包后的 文件名称和对应的目录
        path: path.resolve(__dirname,'./dist'),  // 打包后的文件目录 (输出的基础目录。html,js,css等文件都以此目录为基础)
    },
    module:{
        rules:[
            {
                test: /(\.js)$/,    // eslint检验js代码规范    如果不规范，编译时会报错。将无法生成文件    
                use:[
                    {loader:'eslint-loader'}
                ],
                enforce: "pre", // 编译前检查
                exclude: /(node_modules)/, // 不检测的文件
                include: [path.resolve(__dirname, 'src')], // 指定检查的目录
                // options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
                //     formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
                //     fix: true,
                // }
            },
            {
                test: /\.(js)$/,       //   es6转为js
                exclude: /(node_modules)/,  
                include: /(src)/,
                use: {
                    loader: 'babel-loader',    
                    options: {
                        presets: ['@babel/preset-env'],
                        // plugins: [
                        //     "@babel/plugin-transform-runtime",
                        // ]
                    }
                }
            },

            {
                test:/\.vue$/,
                loader:'vue-loader'
                // options: {    //  没测试过的 
                //     loaders: {
                //       css: ExtractTextPlugin.extract({ use: ['css-loader'], fallback: 'vue-style-loader' }),
                //       less: ExtractTextPlugin.extract({ use: ['css-loader', 'less-loader'], fallback: 'vue-style-loader' })
                //     }
                // }
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1000,   //  10kb
                            fallback:'file-loader',
                            name:'imgs/[name].[hash:4].[ext]',
                            // outputPath: 'imgs'     //  输出路径 
                            esModule:false,     //   防止图片的src输出  [object Module]
                        }
                    },
                    // { 
                    //     loader:'image-webpack-loader',    //  这个安装实在是有问题  安装不上   图片未压缩
                    //     options:{
                    //         mozjpeg: {
                    //             progressive: true,
                    //             quality: 65,
                    //           },
                    //           optipng: {
                    //             enabled: true,
                    //           },
                    //           pngquant: {
                    //             quality: [0.65, 0.90],
                    //             speed: 4,
                    //           },
                    //           gifsicle: {
                    //             interlaced: false,
                    //           },
                    //           webp: {
                    //             quality: 75,
                    //           },
                    //     }
                    // }
                ]
            },
            
            {
              test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'vedios/[name].[hash:4].[ext]'
              }
            },
            {
              test: /\.(eot|ttf|woff|woff2)(\?.*)?$/,
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'fonts/[name].[hash:4].[ext]'
              }
            }
        ]
    },
    resolve: {
        //modules: [ path.resolve('node_modules') ],       // 解析三方库文件
        extensions: ['.js', '.scss', '.css', '.json', '.vue', '.html'],     // 可省略的后缀扩展名    
        // 定义路径别
        alias: {
            '@': path.resolve(__dirname, 'src'),
            // '@': path.resolve(__dirname)
        }
        // 文件 a 引入文件 b 时。如果 a 和 b 在不同的目录，写起来就会很麻烦：import b from '../../../components/b'
        // 使用别名，可以以 src 目录为基础路径来 import 文件：import b from '@/components/b'
    },
    plugins:[    
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),        //   v15版的vue-loader配置需要加个VueLoaderPlugin    
        ...htmlpages,      //    开发、生成、都需要 
    ],
    // performance: {
    //     hints: isDev ? false : 'warning'
    // }
}
if(isDev){
    webpackConfig = merge(webpackConfig,{
        module: {
            rules:[
                {
                    test:/\.(sa|sc|c)ss$/,       //     /\.(sass|scss|css)$/,
                    use:[
                        // {
                        //     options:{
                        //         // hmr: true,     //  开发模式下使用 
                        //         // reloadAll: true,  // if hmr does not work, this is a forceful method.
                        //     }
                        // },
                        "style-loader",   // 所有的计算后的样式加入页面中；让样式变成页面中的style标签;     开发模式下使用  
                        'css-loader',   // 将 CSS 转化成 CommonJS 模块；能够使用类似@import 和 url(…)的方法实现 require()的功能；
                        'sass-loader',    // 将 Sass 编译成 CSS
                        'postcss-loader',  // postcss-loader中的autoprefixer插件 自动给添加厂商的样式前缀（-webkit -moz -ms -o）
                    ]
                }
            ]
        },
        devServer:{    // http://localhost:8080/webpack-dev-server  访问生成的文件   总路由要设置mode:'history'形式，否则跳转不到.html页面；vue-router是单页面应用，单页面访问.html页面进行页面跳转； 需要Nginx做跳转；
            hot: true,    // 开启HMR功能
            open: true,    // 自动打开浏览器
            progress: true, // 打包过程中的打包进度条
            // clientLogLevel:'none', // 不要显示启动服务器日志信息
            // quiet:true,// 除了一些基本启动信息以外, 其他内容都不要显示
            // overlay:false,// 如果出现错误, 不要全屏提示
            // contentBase: path.join(__dirname,'./src'), // 项目构建后路径  以build目录作为静态服务文件夹
            contentBase: './',    //  contentBase和publicPath两个参数比较重要，设置错了的话会导致文件404；
            publicPath: '/',
            watchContentBase:true,// 监视 contentBase 目录下所有文件 , 一旦文件变化就会 reload重载
            watchOptions:{// 监视文件(源代码)
                ignored:/(node_modules)/       // 忽略文件(包)
            },
            compress:true, // 自动gzip压缩
            host:'localhost',// 域名
            port: 8080, 
            // (浏览器和服务器有跨域问题, 但是服务器和服务器之间没有跨域),通过代理服务器运行,浏览器和代理服务器没有跨域问题
            // proxy: { // 服务器代理, 解决开发环境跨域问题 
            //   '/api': {   // 一旦devServer(8080)服务器接收到 /api/xxx的请求, 就会把请求转发到另外一个服务器(5000)
            //     target: 'http://localhost:5000',
            //     // changeOrigin: true,
            //     pathReWrite: { 
            //         '^/api': ''  // 发送请求时,请求路径重写; 将/api/xxx  ---->/xxx (去掉api)
            //     }
            //   }
            // },
            // historyApiFallback: '',  //  自动将404响应跳转到其他指定页面
        }
    })
}else{
    webpackConfig = merge(webpackConfig,
        {
            module: {
                rules:[
                    {
                        test:/\.(sa|sc|c)ss$/,       //     /\.(sass|scss|css)$/,
                        use:[
                            {
                                loader:MiniCssExtractPlugin.loader,   
                            },
                            'css-loader',   // 将 CSS 转化成 CommonJS 模块；能够使用类似@import 和 url(…)的方法实现 require()的功能；
                            'sass-loader',    // 将 Sass 编译成 CSS
                            'postcss-loader',  // postcss-loader中的autoprefixer插件 自动给添加厂商的样式前缀（-webkit -moz -ms -o）；
                        ]
                    }
                ]
            },
            plugins:  [
                //  配置全局变量  https://blog.csdn.net/yingxiongfengyun2020/article/details/80661031
                // new webpack.DefinePlugin({
                //     PRODUCTION: JSON.stringify(true),
                //     DEVELEPMENT: JSON.stringify(false),
                // }),
                new MiniCssExtractPlugin(     //   在生产环境下使用 CSS 提取
                    {
                        filename:'css/[name].[contenthash:4].css', // 设置 打包后的 文件名称和对应的目录    contenthash(Long Term Caching)
                    }
                ),
                    /*
                    虽然我们使用 [chunkhash] 作为 chunk 的输出名，但仍然不够。
                    因为 chunk 内部的每个 module 都有一个 id，webpack 默认使用递增的数字作为 moduleId。
                    如果引入了一个新文件或删掉一个文件，可能会导致其他文件的 moduleId 也发生改变，
                    那么受影响的 module 所在的 chunk 的 [chunkhash] 就会发生改变，导致缓存失效。
                    因此使用文件路径的 hash 作为 moduleId 来避免这个问题。
                    */
                // new webpack.HashedModuleIdsPlugin()
            ],
            optimization: {    //     提取公共文件 / 压缩
                minimize: true,
                minimizer:[    //允许你通过提供一个或多个定制过的实例，覆盖默认压缩工具(minimizer)。 配置生产环境压缩方案
                    new UglifyJsPlugin({    //   cheap-source-map options don't work with this plugin.
                        sourceMap: true,
                        test: /(\.js)$/i,  //测试匹配文件,
                        include: /(src)/, //包含哪些文件
                        exclude: /(node_modules)/, //不包含哪些文件
                        parallel: true,  //使用多进程并行运行来提高构建速度
                    }),
                    new OptimizeCSSAssetsPlugin({     
                        assetNameRegExp: /\.css$/g,
                        cssProcessor: require('cssnano'),      // 用于压缩和优化CSS 的处理器，默认是 cssnano.这是一个函数
                        cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
                        canPrint: true     //  插件能够在console中打印信息
                    })
                ],
                splitChunks: {    //  提取公共文件
                    cacheGroups: {
                        vendors: {  
                            test: /(node_modules)/,    //   筛选从node_modules文件夹下引入的模块
                            name: 'vendors',
                            chunks: 'all',
                            priority: 2
                        },
                        // 会抽离出第三库的代码，生成一个vendors.db5b3f3dc26a5ebe685c.js文件，且每次打包第三库的hash也不会变化，
                        // 这样就会利用浏览器的缓存机制，达到一个缓存优化，除非第三方库的版本变化，会重新生成一个新的文件，这样浏览
                        // 器也会重新请求新的文件
                    },
                    // 总结：可以根据自己的项目情况选择配置，因为第三库不需要每次都去加载，再没有版本变化的时候，
                    // 只需要变化变更的业务逻辑代码，这样来达到一个缓存优化的目的
                }
            }
        }
    )
}


module.exports = webpackConfig






