<template>
  <v-app>
    <top-nav-bar />
    <router-view />
  </v-app>
</template>

<script>
import TopNavBar from "./components/TopNavBar.vue";
export default {
  name: "App",

  components: { TopNavBar },
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>
