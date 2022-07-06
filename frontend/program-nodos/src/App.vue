<template>
  <div id="app">
    <HeaderPag></HeaderPag>
    <div class="container altura">

    <RouterView/>
    </div>
    <FooterPag></FooterPag>
  </div>
</template>

<script>
import FooterPag from "./components/template/FooterPag.vue";
import HeaderPag from "./components/template/HeaderPag.vue";
export default {
  name: "App",
  components: {
    FooterPag,
    HeaderPag,
  },
};
</script>
<style>
.altura {
  height: 410px;
}

</style>
