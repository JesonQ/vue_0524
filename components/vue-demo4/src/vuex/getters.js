// vuex中计算
export let getters = {
  show(state){
    return state.show
  },
  loading(state){
    return state.loading
  },
  users(state){
    return state.users
  },
  error(state){
    return state.error
  }
}