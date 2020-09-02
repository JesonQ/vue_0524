import Vue from "vue"
import Vuex from "vuex"

// 引入axios
import axios from "axios";
Vue.use(Vuex)

let state = {
  show: true, // 输入内容标志
  loading: false, // loading标志
  users: [], // 用户数据
  error: false, // 请求错误时的提示
}

let mutations = {
  loading(state) {
    state.show = false; // 提示用户输入不显示
    state.loading = true; // loading显示
  },
  getUsers(state,users) {
    state.loading = false
    state.users = users
  },
  error(state) {
    state.loading = false
    state.error = true
  }
}

let actions = {
  search({ commit }, searchName) {  // commit是从context解构出来的
    // this.show = false; // 提示用户输入不显示
    // this.loading = true; // loading显示
    commit("loading")
    // 发送请求
    axios.get("/api/search/users2", {  // 发请求
      params: {  // query参数
        q: searchName  // data用户输入的内容
      }
    })
      .then(response => {
        // 数据回来了(成功)
        console.log(response.data)
        // 接收后台返回的数据
        let users = response.data.items.map(user => ({
          avatar_url: user.avatar_url,
          html_url: user.html_url,
          id: user.id,
          login: user.login
        }))
        console.log(users)
        // 把数据赋值到data中的users
        // this.loading = false
        // this.users = users
        commit("getUsers",users)
      }).catch(error => {
        // 数据请求失败
        // this.loading = false
        // this.error = true
        commit("error")
        console.log(error)
      })
  }
}

let getters = {

}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})