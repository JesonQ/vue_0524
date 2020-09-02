<template>
  <div>
    <ul>
      <li v-for="item in news" :key="item.id">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      news:[
        {id:1,title:"news001"},
        {id:2,title:"news002"},
        {id:3,title:"news003"},
      ]
    }
  },
}
</script>

<style scoped>

</style>
