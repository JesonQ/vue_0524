<template>
  <div>MessageDetail</div>
</template>

<script>
let allMessage = [
  { id: 1, title: "message001" ,content:"message001..."},
  { id: 2, title: "message002" ,content:"message002..."},
  { id: 3, title: "message003" ,content:"message003..."},
];
export default {
  name: "MessageDetail",
  data() {
    return {
      messageDetail:[]
    }
  },
  mounted() {
    setTimeout(() => {
      // this.messageDetail 
    }, 1000);
  },
};
</script>

<style scoped>
</style>
