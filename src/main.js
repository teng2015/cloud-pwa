import Vue from 'vue'
import App from './components/index/App'
import router from './router'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  /*template: '<App/>',
   components: {App},*/
  render: h => h(App)
});