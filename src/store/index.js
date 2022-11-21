import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phone: '',
    token: ''
  },
  getters: {
    getToken(state) {
      return Cookie.get('token')
    },
    getPhone(state) {
      return Cookie.get('phone')
    }
  },
  mutations: {
    setToken(state,token) {
      state.token = token
      Cookie.set('token',token)
    },
    setPhone(state, phone) {
      state.phone = phone
      Cookie.set('phone',phone)
    }
  },
  actions: {
  },
  modules: {
  }
})
