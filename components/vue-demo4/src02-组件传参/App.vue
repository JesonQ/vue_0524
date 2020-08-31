<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- <Header @addTodo="addTodo" :num="num"></Header> -->
        <Header :num="num" ref="header1"></Header>
        <List :todos="todos"></List>
        <Footer :todos="todos" :clearISCompelte="clearISCompelte">
          <template name="left">
            <label>
              <input type="checkbox" v-model="checkAll" :disabled="ok" />
            </label>
          </template>
          <template>
            <span>
              <span>已完成{{completeSize}}</span>
              / 全部{{todos.length}}
            </span>
          </template>
          <template>
            <button class="btn btn-danger" @click="clearISCompelte">清除已完成任务</button>
          </template>
        </Footer>
      </div>
      <ScopeSlotTest></ScopeSlotTest>
      <TodoList></TodoList>
    </div>
  </div>
</template>

<script>
import Header from "components/Header";
import List from "components/List";
import Footer from "components/Footer";
import ScopeSlotTest from "./components/scopeSlot/ScopeSlotTest"
import TodoList from "./components/scopeSlot/TodoList"

import PubSub from "pubsub-js";
export default {
  name: "App",
  data() {
    return {
      // todos:[
      //   {id:1,title:"吃饭",isComplete:false},
      //   {id:2,title:"睡觉",isComplete:true},
      //   {id:3,title:"打豆豆",isComplete:false},
      // ]
      // 在本地localStorage取出来  &&
      todos: JSON.parse(window.localStorage.getItem("todoKey")) || [],
      num: 10,
    };
  },
  computed: {
    // 全选全不选
    checkAll: {
      get() {
        // 读取属性的时候
        // 列表无数据禁用全选
        if (this.todos.length === 0) {
          this.ok = true;
        } else {
          this.ok = false;
        }
        // 返回的是布尔值
        return this.completeSize === this.todos.length && this.todos.length > 0;
      },
      set(value) {
        // 属性发生改变了以后 value就是改变后的值
        // console.log(value)   value不是true就是false
        // 调用父组件的方法
        // this.completeAll(value,msg)
        // PubSub.pulish("completeAll",{value, msg})  //当参数为多个时, 封装对象传递
        PubSub.publish("completeAll", value);
      },
    },
    completeSize() {
      // 过滤数组中勾选到的li返回 组成的数组的长度
      let filterTodo = this.todos.filter((todo) => todo.isComplete === true);
      // 以下三行等同于上面一行
      // let filterTodo = this.todos.filter((todo)=>{
      //   return todo.isComplete===true
      // })
      return filterTodo.length;
    },
  },
  methods: {
    // 父组件定义操作数据的方法, 通过组件标签属性传递给子组件,子组件内部调用父组件方法完成传参
    addTodo(title) {
      this.todos.unshift({ id: Date.now(), title: title, isComplete: false });
    },
    // 父组件删除todo
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    // 全选全不选
    completeAll(value) {
      this.todos.forEach((todo) => (todo.isComplete = value));
    },
    // 清除已完成
    clearISCompelte() {
      let todos = this.todos.filter((todo) => todo.isComplete === false);
      this.todos = todos;
    },
  },
  mounted() {
    // 给header绑定自定义事件  相当于 @addTodo="addTodo"
    this.$refs.header1.$on("addTodo", this.addTodo);
    // this.$refs.header1.$on("addTodo",()=>{
    //   console.log(123)
    // })

    // 定义全局事件总线 事件
    // this.$bus.$on("deleteTodo",this.deleteTodo)
    // 触发一次
    this.$bus.$once("deleteTodo", this.deleteTodo);

    // 订阅消息
    PubSub.subscribe("completeAll", (msg, data) => {
      this.completeAll(data);
    });
  },
  beforeDestroy() {
    // 销毁自定义事件
    this.$refs.header1.$off("addTodo");
    // 解绑全局事件总线
    this.$bus.$off("deleteTodo");
    // 解绑
    PubSub.unsubscribe("completeAll");
  },
  components: {
    Header,
    List,
    Footer,
    ScopeSlotTest,
    TodoList
  },
  watch: {
    todos: {
      handler() {
        window.localStorage.setItem("todoKey", JSON.stringify(this.todos));
      },
    },
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


