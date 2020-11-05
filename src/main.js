import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import qs from 'qs'
import store from './store'
import ElementUI from 'element-ui'
import Utils from './common/utils'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import './mock.js'
import '@/components/ef/index.css'
import Vue2OrgTree from 'vue-tree-color'
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vue2OrgTree)
Vue.prototype.$http = axios;
Vue.prototype.Utils = Utils;
Vue.prototype.$qs = qs;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
