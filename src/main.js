import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

router.beforeEach(function (to, from, next) {
  if (to.path === '/cart'&&store.getters.getToken) {
    console.log('CookieToken:',store.getters.getToken);
    next()
  } else if (to.path === '/cart' && !store.getters.getToken) {
    console.log('Misstoken')
    next('/login')
  } else {
    console.log('else')
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
