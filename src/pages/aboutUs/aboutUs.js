import '@/static/css/common/reset';
import '@/static/css/common/common';
import '@/static/js/lib/fontIcon';
import Vue from 'vue';
import axios from 'axios';
import aboutUs from './aboutUs.vue';
import router from '@/router/router';

import store from '@/store/state';

 
Vue.config.devtools = true;   
Vue.config.performance = true;   
Vue.prototype.$axios = axios    
//  Vue.config.productionTip = false
new Vue({
    router,
    store,
    'render': (h) => h(aboutUs)
}).$mount('#aboutUs');


