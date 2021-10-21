<template>
  <div>
    <display-position :twoD="false" />
    <divider />
    <changing-functions :twoD="false" />
  </div>
</template>

<script>
import ChangingFunctions from "../components/ChangingFunctions.vue";
import DisplayPosition from "../components/DisplayPosition.vue";
import Divider from "../components/Divider.vue";
export default {
  components: {
    Divider,
    ChangingFunctions,
    DisplayPosition,
  },
  name: "threeD",
};
</script>
