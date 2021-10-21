<template>
  <div>
    <view-port />
    <plane-three-d style="height:100vh" />
    <display-position :twoD="false" />
    <divider />
    <changing-functions :twoD="false" />
  </div>
</template>

<script>
import ChangingFunctions from "../components/ChangingFunctions.vue";
import ViewPort from "../components/ViewPort.vue"
import DisplayPosition from "../components/DisplayPosition.vue";
import Divider from "../components/Divider.vue";
import PlaneThreeD from "../components/PlaneThreeD.vue";
export default {
  components: { Divider, ChangingFunctions, DisplayPosition, PlaneThreeD, ViewPort },
  name: "threeD",
};
</script>
