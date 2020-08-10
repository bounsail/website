export default {
  path: '/',
  name: 'index',
  // meta:{
  //   title: '首页'      //  路由守卫里设置会起作用，或在html页面的title里设置
  // },
  component: () => import(/* webpackChunkName: "s-index" */ '../index.vue')    //  路由按需加载
  // Magic Comments（魔术注释法）  
  // 在动态import()代码处添加注释webpackChunkName告诉webpack打包后的chunk的名称（注释中的内容很重要，不能省掉），这里打包以后的name就是s-index。
}

// 大多数情况下使用动态import()是通过循环来做的，这样就不得不引入变量了，使用[request]来告诉webpack，这里的值是根据后面传入的字符串来决定，本例中就是变量pathName的值，具体如下：
// import(/* webpackChunkName: "[request]" */`../containers/${pathName}`)






