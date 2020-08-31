<template>
  <div>
    <h2 v-if="ok">loading...</h2>
    <p v-else-if="name">git中以v开头点赞量最多的是
      <a :href="url">
        {{name}}
      </a>
    </p>
    <p v-else-if="error">网络错误,请稍候重试!</p>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'App',
  data() {
    return {
      ok:true, // loading的显示
      name:"",  // 点赞量最多的
      url:"",  // 访问网址
      error:""  // 错误
    }
  },
  mounted() {
    // 使用vue-resource发送请求(vue1.x)
    // this.$http.get("https://api.github.com/search/repositories?q=v&sort=stars").then(response=>{
    //   console.log(response.body.items)
    // }).catch(error=>{
    //   console.log(error)
    // })
    // 使用axios发送请求
    axios.get("https://api.github.com/search/repositories",{
      params:{
        q:"v",
        sort:"stars"
      }
    }).then(response=>{
      this.ok = false
      this.name = response.data.items[0].name
      this.url = response.data.items[0].html_url
      console.log(response.data.items)
    }).catch(error=>{
      this.ok = false
      this.error = error
      console.log(error)
    })
  },
}
</script>

<style scoped>

</style>
