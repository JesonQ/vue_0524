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
      show:true,  // 输入内容标志
      loading:false,  // loading标志
      users:[],    // 用户数据
      error:false  // 请求错误时的提示
    }
  },
  mounted() {
    // 定义事件,接收数据
    this.$bus.$on("search",(data)=>{  // data是用户的搜索内容
      // 准备发请求,点击完search按钮
      this.show = false  // 提示用户输入不显示
      this.loading = true  // loading显示
      // console.log(data)
      // 发送请求
      // axios.get("https://api.github.com/search/users",{
      axios.get("/api/search/users2",{  // 发请求
        params:{  // query参数
          q:data  // data用户输入的内容
        }
      }).then(response=>{
        // 数据回来了(成功)
        // console.log(response.data)
        this.loading = false  // 数据回来loading隐藏
        let users = response.data.items.filter(user =>({  // 对请求回来的数据进行过滤,每一项
          id:user.id,
          html_url:user.html_url,
          login:user.login,
          avatar_url:user.avatar_url
        }));
        this.users = users // 赋值成功展示数据
        console.log(users)
      }).catch(error=>{
        // 数据请求失败
        this.loading = false
        this.error = true  // 显示提示用户请求错误
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
