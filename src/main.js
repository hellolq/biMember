// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import echarts from 'echarts'
import axios from 'axios'
import Calendar from 'vue2-datepick';

axios.defaults.baseURL = '/OAWSSMS';
axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.use(Calendar);
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
  mounted () {
    this.resizeFontsize();
  },
  methods:{
    resizeFontsize() {
      document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 * 37.5 + 'px';
    }
  }
})


