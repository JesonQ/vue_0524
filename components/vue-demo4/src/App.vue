<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">{{count}}</button>
    <button @click="incrementAsync">{{count}}</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count:0  // 数据
    }
  },
  methods: {
    increment(){
      // count自加
      this.count ++
    },
    decrement(){
      // count自减
      this.count --
    },
    incrementIfOdd(){
      // 当count为奇数时加
      if(this.count%2 === 1){
        this.count ++
      }
    },
    incrementAsync(){
      // count异步加
      setTimeout(() => {
        this.count ++
      }, 1000);
    }
  },
}
</script>

<style scoped>

</style>
