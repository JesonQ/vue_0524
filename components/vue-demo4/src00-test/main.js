import Vue from "vue"
import App from "./App"


Vue.config.productionTip = false

new Vue({
  el:"#app",  // 挂载节点 
  // 页面渲染解析 
  // render:h=>h(App)   
  render:(createElement)=>{
    return createElement(App)
  }
})

