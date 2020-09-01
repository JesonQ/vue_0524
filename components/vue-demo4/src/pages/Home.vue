<template>
  <div>
    <ul>
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
}
</script>

<style scoped>

</style>
