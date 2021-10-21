<template>
  <div class="topbar">
    <div class="logo">
      <h1>Transformações Lineares</h1>
    </div>
    <v-spacer />
    <div class="btns">
      <nav-bar-btn to="/2d" value="2D" />
      <nav-bar-btn to="/3d" value="3D" />
    </div>
  </div>
</template>

<script>
import NavBarBtn from "./NavBarBtn.vue";
export default {
  components: { NavBarBtn },
};
</script>

<style lang="scss" scoped>
.topbar {
  z-index: 1;
  display: flex;
  width: 100vw;
  position: fixed;
  top: 0%;
  background-color: #544e61;
  padding: 0 15px 0 10px;
  align-items: center;
  height: 40px;
  .logo {
    color: white;
    font-weight: 400;
    font-size: 8px;
    margin: 5px;
  }
}
</style>
