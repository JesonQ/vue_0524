<template>
  <div>
    <input type="text" placeholder="enter the name you search" v-model="searchName"/>
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchName:""
    }
  },
  methods: {
    // 点击search
    search(){
      // 触发事件,发送数据
      // this.$bus.$emit("search",this.searchName)
      this.$store.dispatch("search",this.searchName)
      this.searchName = ""
    }
  },
};
</script>

<style scoped>
</style>
