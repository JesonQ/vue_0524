<template>
  <div>
    <div class="container">
      <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <Search></Search>
      </section>
      <List></List>
    </div>
  </div>
</template>

<script>
import Search from "./components/Search";
import List from "./components/List";
import axios from "axios";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    List,
    Search,
  },
};
</script>

<style scoped>
</style>
