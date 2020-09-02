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

export default {
  name: "List",
  components: {
    Item,
  },
  computed: {
    show() {
      return this.$store.getters.show
    },
    loading() {
      return this.$store.getters.loading
    },
    users() {
      return this.$store.getters.users
    },
    error() {
      return this.$store.getters.error
    },
  },
};
</script>

<style scoped>
</style>
