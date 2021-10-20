<template>
  <div class="2d">
    <plane-two-d style="height:100vh" :x2="Number(x2)" :y2="Number(y2)" />
    <input type="number" v-model="x2" />
    <input type="number" v-model="y2" />
  </div>
</template>

<script>
import PlaneTwoD from "../components/PlaneTwoD.vue";
export default {
  components: { PlaneTwoD },
  name: "twoD",
  data() {
    return {
      x2: 10,
      y2: 10,
    };
  },
};
</script>
