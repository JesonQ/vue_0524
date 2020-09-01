<template>
  <div>
    <router-link to="/about">about</router-link>
    <router-link to="/home">home</router-link>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>

</style>
