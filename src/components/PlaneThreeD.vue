<template>
  <div id="canvas">
    <img
      class="left"
      src="../assets/planoCartesiano2d.png"
      alt="Minha Figura"
    />
    <svg class="left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100">
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" />
        </marker>
      </defs>
      <line
        :x1="getPositions('x0') / 2 + 137"
        :y1="51 - getPositions('y0') / 2"
        :x2="getPositions('x1') / 2 + 137"
        :y2="51 - getPositions('y1') / 2"
        stroke="#000"
        stroke-width="0.3"
        marker-end="url(#arrowhead)"
      />
    </svg>
    <img
      class="right"
      src="../assets/planoCartesiano2d2.png"
      alt="Minha Figura"
    />
    <svg class="right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100">
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" />
        </marker>
      </defs>
      <line
        :x1="getPositions('y0') / 2 + 207"
        :y1="51 - getPositions('z0') / 2"
        :x2="getPositions('y1') / 2 + 207"
        :y2="51 - getPositions('z1') / 2"
        stroke="#000"
        stroke-width="0.3"
        marker-end="url(#arrowhead)"
      />
    </svg>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getPositions"]),
  },
};
</script>

<style scoped lang="scss">
img,
svg {
  position: absolute;
  width: 40%;
  height: auto;
}
svg {
  height: 90%;
  width: 50%;
}
#canvas {
  position: relative;
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
</style>
