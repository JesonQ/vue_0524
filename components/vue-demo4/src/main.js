import Vue from "vue"
import App from "./App"

// 完整引入
import ElementUI from 'element-ui';
// 引入css
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false


new Vue({
  el:"#app", 
  render:h=>h(App) 
})

