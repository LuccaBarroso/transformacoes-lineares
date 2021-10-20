<template>
  <div class="2d">
    <plane-two-d style="height:100vh" />
    <input type="number" v-model="x2" />
    <input type="number" v-model="y2" />
    <display-positiond />
  </div>
</template>

<script>
import DisplayPositiond from "../components/DisplayPosition2d.vue";
import PlaneTwoD from "../components/PlaneTwoD.vue";
export default {
  components: { PlaneTwoD, DisplayPositiond },
  name: "twoD",
  data() {
    return {
      x2: 10,
      y2: 10,
    };
  },
};
</script>
