<template>
  <div id="canvas">
    <img src="../assets/planoCartesiano2d.png" alt="Minha Figura" />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100">
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
        x1="173.5"
        y1="51"
        :x2="calcX2"
        :y2="calcY2"
        stroke="#000"
        stroke-width="0.3"
        marker-end="url(#arrowhead)"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    x2: Number,
    y2: Number,
  },
  computed: {
    calcX2() {
      // console.log(this.x2 + 171);
      return this.x2 / 2 + 173.5;
    },
    calcY2() {
      console.log(-Math.abs(this.y2 + 51));
      return 51 - this.y2 / 2;
    },
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
  width: 100%;
}
#canvas {
  position: relative;
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
