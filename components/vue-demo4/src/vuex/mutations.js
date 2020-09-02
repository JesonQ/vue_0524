// 放修改数据的方法
import {LOADING, GETUSERS, ERROR} from "./mutations-type"
export let mutations = {
  [LOADING](state) {  // 发请求前修改state数据
    state.show = false; // 提示用户输入不显示
    state.loading = true; // loading显示
  },
  [GETUSERS](state,users) {  // 接收到后台数据,修改state数据
    state.loading = false
    state.users = users
  },
  [ERROR](state) {  // 出错时修改state数据
    state.loading = false
    state.error = true
  }
}