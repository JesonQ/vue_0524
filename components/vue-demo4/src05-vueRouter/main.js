import Vue from "vue"
import App from "./App"

// 注册路由器
import router from "./router/index"
Vue.config.productionTip = false

new Vue({
  el:"#app", 
  render:h=>h(App),
  router
})

