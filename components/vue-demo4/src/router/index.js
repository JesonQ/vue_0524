import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 引入路由组件
import Home from "../pages/Home.vue"
import About from "../pages/About.vue"
export default new VueRouter({
  mode:"hash", // 带#
  routes:[
    {
      path:"/home",  // 访问路径
      component:Home
    },
    {
      path:"/about",
      component:About
    },
    // 设置默认访问路由
    {
      path:"",
      redirect:"/about"
    }
  ],
  linkActiveClass:"myColor"
})