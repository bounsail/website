module.exports = {
    "env": {     //  env 关键字指定你想启用的环境
        "browser": true,
        "es2020": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",      //   继承Eslint中推荐的（打钩的）规则项        
        // "eslint:all",           //   继承Eslint中所有的核心规则项 ()
        // "extends": "standard",  //使用别人写好的规则包（以eslint-config-开头的npm包），如eslint-config-standard
        "plugin:vue/essential"
    ],
    "parserOptions": { //  设置解析器选项parserOptions能帮助 ESLint 确定什么是解析错误，所有语言选项默认都是 false。
        "ecmaVersion": 11,
        "sourceType": "module",
        // parser: require.resolve('babel-eslint'),
        // 使用的额外的语言特性
        // "ecmaFeatures": {
        //     "jsx": true, // 启用 JSX
        //     "globalReturn": true, // 允许在全局作用域下使用 return 语句
        //     "impliedStrict": true, // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
        //     "experimentalObjectRestSpread": true,	// 启用实验性的 object rest/spread properties 支持。(重要：这是一个实验性的功能,在未来可能会有明显改变。 建议你写的规则 不要 依赖该功能，除非当它发生改变时你愿意承担维护成本。)
        // }
    },
    "plugins": [     //  ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它。
        "vue",      //   使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。
        // "html"     //  eslint-plugin-html此插件用来识别.html 和 .vue文件中的js代码
    ],
    "rules": {
        "no-console":0,      //或  "off"  //   是否判断console
        "quotes": [1, "single"]    //  使用单引号
    }
};


// 默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果发现配置文件中有 “root”: true，它就会停止在父级目录中寻找。



