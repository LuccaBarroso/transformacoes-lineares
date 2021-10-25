<template>
  <v-app>
    <top-nav-bar />
    <view-port />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import ViewPort from "./components/ViewPort.vue";
import TopNavBar from "./components/TopNavBar.vue";
import Footer from "./components/footer.vue";
export default {
  name: "App",

  components: { TopNavBar, ViewPort, Footer },
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>
