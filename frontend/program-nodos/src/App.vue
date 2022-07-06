<template>
  <div id="app">
    <GraficarNodos></GraficarNodos>
  </div>
</template>

<script>
import GraficarNodos from "./components/GraficarNodos.vue";

export default {
  name: "App",
  components: {
    GraficarNodos,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
