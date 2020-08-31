<template>
  <ul>
    <li v-for="(item, index) in data" :key="index">
      <slot :row="item"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    data: Array
  }
}
</script>