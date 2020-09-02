import Vue from "vue"
import App from "./App"

Vue.config.productionTip = false

// 注册vuex,store在全局就有$store,在this身上
import store from "./vuex/store"

new Vue({
  el:"#app", 
  render:h=>h(App),
  store
})

