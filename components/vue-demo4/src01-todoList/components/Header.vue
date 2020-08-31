<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" 
      v-model.trim="title"
      @keyup.enter="handleC"
    />
  </div>
</template>

<script>
export default {
  name: "Header",
  props:{
    "addTodo":Function
  },
  data() {
    return {
      title:"",  // 收集用户输入
    }
  },
  methods: {
    handleC(){
      // console.log("handleC()",this.title)
      if(this.title===""){  // 用户输入为空直接return
        return
      }
      // 调用父组件的方法
      this.addTodo(this.title)  
      this.title = "" //输入框置空
    }
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
