<template>
  <div>
    <!-- html部分 -->
    app
    <h1>我是app里的H1</h1>
    <!-- <hello-world></hello-world> -->
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
// js代码部分
// 导入组件
import HelloWorld from "./components/Helloworld"
export default {
  name:"App",
  components:{  // 注册组件
    // "hello-world":HelloWorld
    HelloWorld
  }
}
</script>

<style>
  /* css部分 */
</style>