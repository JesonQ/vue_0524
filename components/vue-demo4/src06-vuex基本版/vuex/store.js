// 引入包
import Vue from "vue"
import Vuex from "vuex"
// 声明使用插件
Vue.use(Vuex)

let state = {  // 存储初始化数据,是需要共享的数据
  count: 0  // 数据
}

let mutations = {  // 直接修改state中的数据,都是些方法,不可以写异步操作和判断等逻辑代码(很单纯)
  increment(state) {   //state共享数据
    // count自加
    state.count++
  },
  decrement(state) {
    // count自减
    state.count--
  }
}

let actions = {  // 用户操作方法,可以写异步操作和判断等逻辑代码
  increment(context) {
    // count自加
    context.commit("increment")  // 提交这个方法到mutations
  },
  decrement(context) {
    // count自减
    context.commit("decrement")
  },
  incrementIfOdd(context) {
    // 当count为奇数时加
    if (context.state.count % 2 === 1) {
      context.commit("increment")
    }
  },
  incrementAsync(context) {
    // count异步加
    setTimeout(() => {
      context.commit("increment")
    }, 1000);
  }
}

let getters = {  // 根据state中的数据做计算

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
