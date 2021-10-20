<template>
  <div class="twod">
    <plane-two-d style="height:100vh" />
    <display-positiond />
    <divider />
    <changing-functions />
  </div>
</template>

<script>
import DisplayPositiond from "../components/DisplayPosition2d.vue";
import PlaneTwoD from "../components/PlaneTwoD.vue";
import divider from "../components/Divider.vue";
import ChangingFunctions from "../components/ChangingFunctions.vue";
export default {
  components: { PlaneTwoD, DisplayPositiond, divider, ChangingFunctions },
  name: "twoD",
};
</script>
<style>
.twod * {
  font-family: "Roboto";
}
</style>
