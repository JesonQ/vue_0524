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
  computed: {
    count(){
      return this.$store.state.count
    }
  },
  methods: {
    increment(){
      // count自加
      this.$store.dispatch("increment")   // 分发
    },
    decrement(){
      // count自减
      this.$store.dispatch("decrement")
    },
    incrementIfOdd(){
      // 当count为奇数时加
       this.$store.dispatch("incrementIfOdd")
    },
    incrementAsync(){
      // count异步加
       this.$store.dispatch("incrementAsync")
    }
  },
}
</script>

<style scoped>

</style>
