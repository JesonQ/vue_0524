<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addTodo="addTodo"></Header>
        <List :todos="todos" :deleteTodo="deleteTodo"></List>
        <Footer :todos="todos" :completeAll="completeAll" :clearISCompelte="clearISCompelte"></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "components/Header";
import List from "components/List";
import Footer from "components/Footer";
export default {
  name: "App",
  data() {
    return {
      // todos:[
      //   {id:1,title:"吃饭",isComplete:false},
      //   {id:2,title:"睡觉",isComplete:true},
      //   {id:3,title:"打豆豆",isComplete:false},
      // ]
      // 在本地localStorage取出来
      todos:JSON.parse(window.localStorage.getItem("todoKey"))
    }
  },
  methods: {
    // 父组件定义操作数据的方法, 通过组件标签属性传递给子组件,子组件内部调用父组件方法完成传参
    addTodo(title){
      this.todos.unshift(
         {id:Date.now(),title:title,isComplete:false},
      )
    },
    // 父组件删除todo
    deleteTodo(index){
      this.todos.splice(index, 1)
    },
    // 全选全不选
    completeAll(value){
      this.todos.forEach(todo=>todo.isComplete=value)
    },
    // 清除已完成
    clearISCompelte(){
      let todos = this.todos.filter(todo=>todo.isComplete===false)
      this.todos = todos
    }
  },
  components: {
    Header,
    List,
    Footer
  },
  watch: {
    todos:{
      handler(){
        window.localStorage.setItem("todoKey",JSON.stringify(this.todos))
        
      }
    }
  },
};
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>


