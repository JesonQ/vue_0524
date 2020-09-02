import Vue from "vue"
import App from "./App"

Vue.config.productionTip = false

// 注册vuex,store
import store from "./vuex/store"

new Vue({
  el:"#app", 
  render:h=>h(App),
  store
})

