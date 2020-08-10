/*
 * 异步加载vue组件，路由按需加载
 * 引入每个页面文件夹下的路由（如：index文件下router文件夹里的router.js路由设置文件），将所有引入的路由，一起在这个文件里合成为一个公共的路由，清晰明了，方便管理；
 */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// 因为这个router文件夹不在webpack.config.js所配置范围内，所以不能使用webpack里设置的别名（@）和es6语法扩展名（....）的方式引用；只能按相对路径引用文件；

//     多页面时  开发版路由不起作用   只能访问静态html页面
import index from '../pages/index/router/router.js';
import aboutUs from '../pages/aboutUs/router/router.js';
// import index from '../pages/index/index.vue';
// import aboutUs from '../pages/aboutUs/aboutUs.vue';

const routes = [
  index,
  aboutUs
  // {
  //   path: '/',
  //   name: 'index',
  //   component: index  
  // },
  // {
  //   path: '/aboutUs',
  //   name: 'aboutUs',
  //   component: aboutUs  
  // }
];

let router = new Router({
  mode:'history',
  routes
});


//  路由守卫


export default router;




