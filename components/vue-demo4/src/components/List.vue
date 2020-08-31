<template>
  <ul class="todo-main">
    <Item v-for="(todo,index) in todos" :key="todo.id" 
      :todo="todo" 
      :index="index"
    ></Item>
  </ul>
</template>

<script>
import Item from './Item'
export default {
  name: "List",
  props:{
    /* 
      1. 在父组件里子组件标签上传值
      2. 在子组件内部props里接值
      3. props里接到的值相当于是data中的值,按data里的用法去用
    */
    // Array/Function要求父组件传来的类型,类型不符合警告
    "todos":Array,
    // "deleteTodo":Function
  },
  components:{
    Item
  },
  // mounted() {
      // props里接收的数据都在this身上
  //   console.log(this.todos)
  // },
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
