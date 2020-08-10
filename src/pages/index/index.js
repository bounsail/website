import '@/static/css/common/reset';
import '@/static/css/common/common';
import '@/static/js/lib/fontIcon';
import Vue from 'vue';
import axios from 'axios';
import index from './index.vue';
import router from '@/router/router';
import store from '@/store/state';
//   像vue这种框架、库；打包时最好在cdn中引入；不然打包的库文件上万行；而且单文件也很大；
 
Vue.config.devtools = true;    //  chrome使用devtools调试工具
Vue.config.performance = true;   //  chrome使用performance调试工具 
Vue.prototype.$axios = axios;    
//  Vue.config.productionTip = false
new Vue({
    router,
    store,
    'render': (h) => h(index)
}).$mount('#index');


// template模板渲染时JavaScript变量出错的问题, 此时也许你会通过console.log来进行调试
// // main.js
// Vue.prototype.$log = window.console.log;
// // 组件内部
// <div>{{$log(info)}}</div>

