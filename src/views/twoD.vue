<template>
  <div class="twod">
    <plane-two-d style="height:100vh" />
    <display-position />
    <divider />
    <changing-functions />
  </div>
</template>

<script>
import DisplayPosition from "../components/DisplayPosition.vue";
import PlaneTwoD from "../components/PlaneTwoD.vue";
import divider from "../components/Divider.vue";
import ChangingFunctions from "../components/ChangingFunctions.vue";
export default {
  components: { PlaneTwoD, DisplayPosition, divider, ChangingFunctions },
  name: "twoD",
};
</script>
<style>
.twod * {
  font-family: "Roboto";
}
</style>
