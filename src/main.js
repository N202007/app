import Vue from 'vue'
import axios from './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')

//刷新保存状态
if (sessionStorage.getItem("store")) {
  store.replaceState(
      Object.assign(
          {},
          store.state,
          JSON.parse(sessionStorage.getItem("store"))
      )
  );
  sessionStorage.removeItem("store")
}

//监听，在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("store", JSON.stringify(store.state));
});