import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 引入路由组件
import Home from "pages/Home.vue"
import About from "pages/About.vue"
import News from "pages/News.vue"
import Message from "pages/Message.vue"
import MessageDetail from "pages/MessageDetail"

export default new VueRouter({
  // mode:"hash", // 模式 带#
  mode:"history", // 存在一个问题, 刷新页面会丢失css样式, 解决方式, css引入设置为绝对路径
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
          component:Message,
          children:[
            {
              path:"/home/message/messageDetail/:id",  // :id占位符
              component:MessageDetail
            }
          ]
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