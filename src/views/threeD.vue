<template>
  <div><divider /> <changing-functions :twoD="false" /></div>
</template>

<script>
import ChangingFunctions from "../components/ChangingFunctions.vue";
import Divider from "../components/Divider.vue";
export default {
  components: { Divider, ChangingFunctions },
  name: "threeD",
};
</script>
