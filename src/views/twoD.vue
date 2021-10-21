<template>
  <div class="twod">
    <display-position />
    <divider />
    <changing-functions />
  </div>
</template>

<script>
import DisplayPosition from "../components/DisplayPosition.vue";
import divider from "../components/Divider.vue";
import ChangingFunctions from "../components/ChangingFunctions.vue";
export default {
  components: { DisplayPosition, divider, ChangingFunctions },
  name: "twoD",
};
</script>
<style>
.twod * {
  font-family: "Roboto";
}
</style>
