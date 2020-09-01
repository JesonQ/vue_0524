<template>
  <div>
    <ul class="nav nav-tabs">
      <li>
        <router-link to="/home/news">news</router-link>
      </li>
      <li>
        <router-link to="/home/message">message</router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  beforeCreate() {
    console.log("beforeCreate()")
  },
  beforeDestroy() {
    console.log("beforeDestroy()")
  },
}
</script>

<style scoped>

</style>
