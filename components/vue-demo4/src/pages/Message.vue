<template>
  <div>
    <ul>
      <li v-for="(message) in messages" :key="message.id">
       <router-link :to="`/home/message/messageDetail/${message.id}`">
        {{message.title}}
       </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [],
    };
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
