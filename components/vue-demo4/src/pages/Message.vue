<template>
  <div>
    <ul>
      <li v-for="(message) in messages" :key="message.id">
       <router-link :to="`/home/message/messageDetail/${message.id}?title1=${message.title}`">
        {{message.title}}
       </router-link>
       --<button @click="pushC(message.id)">push查看</button>
       --<button @click="replaceC(message.id)">replace查看</button>
      </li>
    </ul>
    <router-view :msg="msg"></router-view>
    <button @click="$router.back()">返回</button>
    <button @click="$router.forward()">前进一项</button>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [],
      msg:"guigu"
    };
  },
  methods: {
    pushC(id2){
      // 编程式字符串写法
      // this.$router.push(`/home/message/messageDetail/${id2}`)
      // 对象的写法
      this.$router.push({
        name:"push",  // 对象params传参,需要一个name
        path:"/home/message/messageDetail",
        params:{
          id:id2
        }
      })
    },
    replaceC(id){
      this.$router.replace(`/home/message/messageDetail/${id}`)
    }
  },
  mounted() {
    // 模拟发送异步请求
    setTimeout(() => {
      let messages = [
        { id: 1, title: "message001" },
        { id: 2, title: "message002" },
        { id: 3, title: "message003" },
      ];
      this.messages = messages
    }, 2000);
  },
};
</script>

<style scoped>
</style>
