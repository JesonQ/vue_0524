<template>
  <div>app</div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$http.get("https://api.github.com/search/repositories?q=v&sort=stars").then(response=>{
      console.log(response.body.items)
    }).catch(error=>{
      console.log(error)
    })
  },
}
</script>

<style scoped>

</style>
