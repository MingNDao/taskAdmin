import Vue from 'vue'
import App from './app.vue'
import router from './router'
import elementUI from 'element-ui'
import "font-awesome/scss/font-awesome.scss";
Vue.use(elementUI)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: (h) => h(App)
})
