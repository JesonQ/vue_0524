// 引入包
import Vue from "vue"
import Vuex from "vuex"
// 声明使用插件
Vue.use(Vuex)

let state = {  // 存储初始化数据,是需要共享的数据

}

let mutations = {  // 直接修改state中的数据,都是些方法,不可以写异步操作和判断等逻辑代码(很单纯)

}

let actions = {  // 用户操作方法,可以写异步操作和判断等逻辑代码

}

let getters = {  // 根据state中的数据做计算

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
