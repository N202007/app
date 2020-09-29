import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [
      {
        name: "星星",
        phone: "15173923746",
        username: "cove",
        pwd: "123456",
      },
      {
        name: "老唐",
        phone: "15173923746",
        username: "tang",
        pwd: "123456",
      },
    ],
  },
  mutations: {

  },
  actions: {

  },
  modules: {

  }
})
