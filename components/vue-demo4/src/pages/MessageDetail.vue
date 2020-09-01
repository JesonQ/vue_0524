<template>
  <div>
    <ul>
      <li>routerview传参{{msg}}</li>
      <li>query参数{{$route.query.title1}}</li>
      <li>{{messageDetail.id}}</li>
      <li>{{messageDetail.title}}</li>
      <li>{{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script>
let allMessage = [
  { id: 1, title: "message001", content: "message001..." },
  { id: 2, title: "message002", content: "message002..." },
  { id: 3, title: "message003", content: "message003..." },
];
export default {
  name: "MessageDetail",
  props:["msg"],
  data() {
    return {
      messageDetail: {},
    };
  },
  mounted() {
    // 当我们的组件挂在完成后,会执行一次
    this.sendAjax()
  },
  methods: {
    // 发送ajax请求
    sendAjax() {
      setTimeout(() => {
        // this.messageDetail
        let id = +this.$route.params.id; // 取到的id是字符串,转换为number
        let message = allMessage.find((item) => item.id === id);
        this.messageDetail = message;
        // console.log(message);
      }, 1000);
    },
  },
  watch: {
    // 监视$route的变化,
    $route: {
      handler() {
        this.sendAjax()
      },
    },
  },
};
</script>

<style scoped>
</style>
