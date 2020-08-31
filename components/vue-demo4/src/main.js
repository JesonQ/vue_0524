import Vue from "vue"
import App from "./App"


Vue.config.productionTip = false

// vue-resource引入并使用
// import VueResource from "vue-resource"
// Vue.use(VueResource)

new Vue({
  el:"#app", 
  render:h=>h(App)  
})

