<template>
  <v-app>
    <top-nav-bar />
    <view-port />
    <router-view />
  </v-app>
</template>

<script>
import ViewPort from "./components/ViewPort.vue";
import TopNavBar from "./components/TopNavBar.vue";
export default {
  name: "App",

  components: { TopNavBar, ViewPort },
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>
