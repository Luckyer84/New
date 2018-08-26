// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/common-css/common.css'
import './assets/common-js/common.js'
import jquery from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Icon from 'vue-svg-icon/Icon.vue' //引入svg

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.component('icon', Icon) //注册svg
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
