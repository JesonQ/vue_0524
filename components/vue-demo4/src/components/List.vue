<template>
  <div>
    <h3 v-if="show">请输入搜索内容!!</h3>
    <p v-else-if="loading">loading...</p>
    <div class="row" v-else-if="users">
      <Item v-for="user in users" :key="user.id" :user="user"></Item>
    </div>
    <p v-show="error">网络错误,稍后重试!!</p>
  </div>
</template>

<script>
import Item from "./Item";
import axios from "axios"
export default {
  name: "List",
  data() {
    return {
      show:true,
      loading:false,
      users:[],
      error:false
    }
  },
  mounted() {
    // 定义事件,接收数据
    this.$bus.$on("search",(data)=>{
      this.show = false
      this.loading = true
      // console.log(data)
      // 发送请求
      // axios.get("https://api.github.com/search/users",{
      axios.get("/api/search/users2",{
        params:{
          q:data
        }
      }).then(response=>{
        // console.log(response.data)
        this.loading = false
        let users = response.data.items.filter(user =>({
          id:user.id,
          html_url:user.html_url,
          login:user.login,
          avatar_url:user.avatar_url
        }));
        this.users = users
        console.log(users)
      }).catch(error=>{
        this.loading = false
        this.error = true
        // console.log(error)
      })
    })
  },
  components: {
    Item,
  },
};
</script>

<style scoped>
</style>
