export default {
  path: '/aboutUs',
  name: 'aboutUs',
  component: () => import(/* webpackChunkName: "s-aboutUs" */ '../aboutUs.vue')    //  路由按需加载
}





