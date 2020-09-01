import Vue from "vue"
import App from "./App"

// 完整引入
// import ElementUI from 'element-ui';
// // 引入css
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI)

// 按需引入
import {Button, Message} from "element-ui"
// 注册组件
Vue.component(Button.name, Button)
// 将Message放到Vue原型身上
Vue.prototype.$message = Message;
Vue.config.productionTip = false


new Vue({
  el:"#app", 
  render:h=>h(App) 
})

