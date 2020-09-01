import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 引入路由组件
import Home from "../pages/Home.vue"
import About from "../pages/About.vue"
import News from "../pages/News.vue"
import Message from "../pages/Message.vue"

export default new VueRouter({
  mode:"hash", // 模式 带#
  routes:[  // 路由规则
    {
      path:"/home",  // 访问路径
      component:Home,  // 路径对应显示的
      children:[  // home的子路由
        { 
          path:"/home/news",
          component:News
        },
        {
          path:"message",  // 简写方式,不加 /
          component:Message
        },
        {
          path:"",
          redirect:"/home/news"
        }
      ]
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