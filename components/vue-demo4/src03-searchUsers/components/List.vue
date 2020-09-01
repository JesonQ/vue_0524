<template>
  <div>
    <h3 v-if="show">请输入搜索内容!!</h3>
    <p v-else-if="loading">loading...</p>
    <div class="row" v-else-if="users.length>0">
      <Item v-for="user in users" :key="user.id" :user="user"></Item>
    </div>
    <p v-show="error">网络错误,稍后重试!!</p>
  </div>
</template>

<script>
import Item from "./Item";
import axios from "axios";
export default {
  name: "List",
  data() {
    return {
      show: true, // 输入内容标志
      loading: false, // loading标志
      users: [], // 用户数据
      error: false, // 请求错误时的提示
    };
  },
  mounted() {
    // 定义事件,接收数据
    this.$bus.$on("search", async (data) => {
      // data是用户的搜索内容
      // 准备发请求,点击完search按钮
      this.show = false; // 提示用户输入不显示
      this.loading = true; // loading显示
      // console.log(data)

      // 发送请求
      // .then的写法
      axios.get("https://api.github.com/sear/users",{
      // axios.get("/api/search/users2",{  // 发请求
        params:{  // query参数
          q:data  // data用户输入的内容
        }
      })
      .then(response=>{
        // 数据回来了(成功)
        this.loading = false
        console.log(response.data)
        // 接收后台返回的数据
        let users = response.data.items.map(user=>({
          avatar_url:user.avatar_url,
          html_url:user.html_url,
          id:user.id,
          login:user.login
        }))
        console.log(users)
        // 把数据赋值到data中的users
        this.users = users
        // console.log(this.users)
      }).catch(error=>{
        // 数据请求失败
        this.loading = false
        this.error = true
        // setTimeout(() => {
        //   this.error = false
        //   this.show = true
        // }, 2000);
        console.log(error)
      })

      // async+await写法
      // try {
      //   // 可能出现错误的代码
      //   let result = await axios.get("/api/search/users2", {
      //     // 发请求
      //     params: {
      //       // query参数
      //       q: data, // data用户输入的内容
      //     },
      //   });
      //   // 数据回来了(成功);
      //   this.loading = false;
      //   console.log(result.data);
      //   // 接收后台返回的数据
      //   let users = result.data.items.map((user) => ({
      //     avatar_url: user.avatar_url,
      //     html_url: user.html_url,
      //     id: user.id,
      //     login: user.login,
      //   }));
      //   console.log(users);
      //   // 把数据赋值到data中的users
      //   this.users = users;
      // } catch (error) {
      //   // 错误捕获
      //   // 数据请求失败
      //   this.loading = false;
      //   this.error = true;
      //   console.log(error);
      // }
    });
  },
  components: {
    Item,
  },
};
</script>

<style scoped>
</style>
