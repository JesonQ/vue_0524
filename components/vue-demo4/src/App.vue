<template>
  <div>
    <el-button type="primary" @click="open1">主要按钮</el-button>
    <el-button type="success" @click="open2">成功按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    open1(){
      this.$message("这是一条提示!!")
    },
    open2(){
      this.$message({
        message:"这是一条成功的信息!!",
        type:"success"
      })
    }
  },
};
</script>

<style scoped>
</style>
