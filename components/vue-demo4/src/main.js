import Vue from "vue"
import App from "./App"


Vue.config.productionTip = false

// 定义事件总线
// Vue.prototype.$bus = new Vue()

new Vue({
  el:"#app", 
  render:h=>h(App),
  beforeCreate() {
    // 定义事件总线
    Vue.prototype.$bus = this
  },  
})

