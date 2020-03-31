<template>
  <div id="app">
    <div>{{this.add}}</div>
    <router-view></router-view>
  </div>
</template>
<script>
import Form from "./components/form/index";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Form
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 1200px;
  overflow-x: auto;
}
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>
