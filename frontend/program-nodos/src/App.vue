<template>
  <div id="app">
    <HeaderPag></HeaderPag>
    <div class="container altura">
      <GraficarNodos></GraficarNodos>
    </div>
    <FooterPag></FooterPag>
  </div>
</template>

<script>
import GraficarNodos from "./components/GraficarNodos.vue";
import M from "materialize-css";
import FooterPag from "./components/template/FooterPag.vue";
import HeaderPag from "./components/template/HeaderPag.vue";

export default {
  name: "App",
  mounted() {
    M.AutoInit();
  },
  components: {
    GraficarNodos,
    FooterPag,
    HeaderPag,
  },
};
</script>

<style>
.altura {
  height: 360px;
}
</style>
