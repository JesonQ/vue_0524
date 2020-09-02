// actions文件, 写请求或者是逻辑代码
// 引入axios
import axios from "axios";
import {LOADING, GETUSERS, ERROR} from "./mutations-type"
export let actions = {
  // 定义方法发送请求
  search({ commit }, searchName) {  // commit是从context解构出来的
    // this.show = false; // 提示用户输入不显示
    // this.loading = true; // loading显示
    commit(LOADING)
    // 发送请求
    axios.get("/api/search/users2", {  // 发请求
      params: {  // query参数
        q: searchName  // searchName-->用户输入的内容
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
        commit(GETUSERS,users)
      }).catch(error => {
        // 数据请求失败
        // this.loading = false
        // this.error = true
        commit(ERROR)
        console.log(error)
      })
  }
}