import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'
Vue.prototype.axios = axios //全局注册axios
import Scroller from '@/components/Scroller'
Vue.component('Scroller', Scroller);
import Loading from '@/components/Loading'
Vue.component('Loading', Loading);
Vue.config.productionTip = false

//过滤器
Vue.filter('setImg', (url, widthHeight) => {
  return url.replace(/w\.h/, widthHeight);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
