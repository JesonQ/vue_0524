<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span>
      <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" @click="clearISCompelte">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props:{
    "todos":Array,
    "completeAll":Function,
    "clearISCompelte":Function
  },
  computed: {
    // 计算已完成数据
    completeSize(){
      // 过滤数组中勾选到的li返回 组成的数组的长度 
      let filterTodo = this.todos.filter(todo=>todo.isComplete===true)
      // 以下三行等同于上面一行
      // let filterTodo = this.todos.filter((todo)=>{
      //   return todo.isComplete===true
      // })
      return filterTodo.length
    },
    // 全选全不选
    checkAll:{
      get(){  // 读取属性的时候
      // 返回的是布尔值
        return this.completeSize === this.todos.length && this.todos.length>0
      },
      set(value){   // 属性发生改变了以后 value就是改变后的值
        // console.log(value)   value不是true就是false
        // 调用父组件的方法
        this.completeAll(value)
      }
    }
  },
};
</script>

<style scoped>

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
