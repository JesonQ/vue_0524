<template>
  <li
    :style="{background:myBcolor}"
    @mouseenter="handleEnter(true)"
    @mouseleave="handleEnter(false)"
  >
    <label>
      <input type="checkbox" v-model="todo.isComplete" />
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="show" @click="deleteItem(index,todo.title)">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: { 
    todo: Object,
    deleteTodo: Function,
    index: Number
  },
  data() {
    return {
      myBcolor: "#fff", // 动态存储li的背景颜色
      show: false // 控制按钮的显示与隐藏
    };
  },
  methods: {
    // 滑入滑出效果逻辑代码
    handleEnter(value) {
      // 传一个标志位(value)来确认滑入还是滑出
      // console.log("handleEnter()")
      if (value) {
        // 滑入
        this.myBcolor = "#eee"; // li背景
        this.show = true; // 按钮的显示
      } else {
        // 滑出
        this.myBcolor = "#fff";
        this.show = false;
      }
    },
    // 删除按钮操作
    deleteItem(index, title) {
      // console.log(111)
      if (window.confirm("您确定要删除" + title + "吗?")) {
        // 调用父组件的删除方法
        this.deleteTodo(index);
      }
    }
  }
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
