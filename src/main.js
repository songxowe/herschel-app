// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VeeValidate from 'vee-validate'
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
Vue.use(VeeValidate);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
