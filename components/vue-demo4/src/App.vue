<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">{{count}}</button>
    <button @click="incrementAsync">{{count}}</button>
    <p>四倍的count---{{currentCount}}</p>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from "vuex"
export default {
  name: 'App',
  computed: {
    // count(){
    //   return this.$store.state.count
    // },
    ...mapState(["count"]),
    // currentCount(){
    //   return this.$store.getters.currentCount
    // }
    ...mapGetters(["currentCount"])
  },
  methods: {
    // increment(){
    //   // count自加
    //   this.$store.dispatch("increment")   // 分发
    // },
    // decrement(){
    //   // count自减
    //   this.$store.dispatch("decrement")
    // },
    // 简化,直接提交到mutations,跨过actions
    // increment(){
    //   // count自加
    //   this.$store.commit("increment")   
    // },
    // decrement(){
    //   // count自减
    //   this.$store.commit("decrement")
    // },
    // 下面一句相当于上面的两句
    ...mapMutations(["increment","decrement"]),
    // incrementIfOdd(){
    //   // 当count为奇数时加
    //    this.$store.dispatch("incrementIfOdd")
    // },
    // incrementAsync(){
    //   // count异步加
    //    this.$store.dispatch("incrementAsync")
    // }
    ...mapActions(["incrementIfOdd","incrementAsync"])
    // 上面一句话展开为下面的
    // {
    //   incrementIfOdd:function incrementIfOdd(){
    //     // 当count为奇数时加
    //     this.$store.dispatch("incrementIfOdd")
    //   },
    //   incrementAsync:function incrementAsync(){
    //     // count异步加
    //     this.$store.dispatch("incrementAsync")
    //   }
    // }
  },
}
</script>

<style scoped>
</style>
