<template>
  <div>
    <h2>效果一: 显示TODO列表时, 已完成的TODO为绿色</h2>
    <TodoList :data="todos">
      <template slot-scope="scoped">
        <span style="color:green">
          {{scoped}}
        </span>
      </template>
    </TodoList>
    <hr>

    <h2>效果二: 显示TODO列表时, 带序号, TODO的颜色为蓝绿搭配</h2>
    <TodoList :data="todos"/>
  </div>
</template>

<script>
  import TodoList from './TodoList'
  export default {
    name: 'ScopeSlotTest',
    data () {
      return {
        todos: [
          {id: 1, text: 'AAA', isComplete: false},
          {id: 2, text: 'BBB', isComplete: true},
          {id: 3, text: 'CCC', isComplete: false},
          {id: 4, text: 'DDD', isComplete: false},
        ]
      }
    },

    components: {
      TodoList
    }
  }
</script>
