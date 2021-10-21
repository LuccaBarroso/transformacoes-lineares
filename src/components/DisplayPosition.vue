<template>
  <div class="parent">
    <div class="displayPossition" :class="{ threeD: !twoD }">
      <div class="inputNumber">
        <label for="input">X0=</label>
        <input type="number" v-model="getPositionX0" />
      </div>
      <div class="inputNumber">
        <label for="input">Y0=</label>
        <input type="number" v-model="getPositionY0" />
      </div>
      <div v-if="!twoD" class="inputNumber">
        <label for="input">Z0=</label>
        <input type="number" v-model="getPositionZ0" />
      </div>
      <div class="inputNumber">
        <label for="input">X1=</label>
        <input type="number" v-model="getPositionX1" />
      </div>
      <div class="inputNumber">
        <label for="input">Y1=</label>
        <input type="number" v-model="getPositionY1" />
      </div>
      <div v-if="!twoD" class="inputNumber">
        <label for="input">Z1=</label>
        <input type="number" v-model="getPositionZ1" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: {
    twoD: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters(["getPositions"]),
    getPositionX0: {
      get() {
        return this.getPositions("x0");
      },
      set(value) {
        this.setPositions({ index: "x0", value });
        this.UPDATE_VECTOR();
      },
    },
    getPositionY0: {
      get() {
        return this.getPositions("y0");
      },
      set(value) {
        this.setPositions({ index: "y0", value });
        this.UPDATE_VECTOR();
      },
    },
    getPositionZ0: {
      get() {
        return this.getPositions("z0");
      },
      set(value) {
        this.setPositions({ index: "z0", value });
        this.UPDATE_VECTOR();
      },
    },
    getPositionX1: {
      get() {
        return this.getPositions("x1");
      },
      set(value) {
        this.setPositions({ index: "x1", value });
        this.UPDATE_VECTOR();
      },
    },
    getPositionY1: {
      get() {
        return this.getPositions("y1");
      },
      set(value) {
        this.setPositions({ index: "y1", value });
        this.UPDATE_VECTOR();
      },
    },
    getPositionZ1: {
      get() {
        return this.getPositions("z1");
      },
      set(value) {
        this.setPositions({ index: "z1", value });
        this.UPDATE_VECTOR();
      },
    },
  },
  methods: {
    ...mapMutations(["setPositions", "UPDATE_VECTOR"]),
  },
};
</script>

<style scoped lang="scss">
.parent {
  display: flex;
  justify-content: center;
  padding-top: 60px;
  .displayPossition {
    align-items: center;
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    .inputNumber {
      display: flex;
      width: 100%;
      border: 2px solid black;
      border-radius: 30px;
      padding: 10px;
      margin: 10px;
      input {
        outline: none;
        width: 90%;
        padding-left: 10px;
      }
    }
  }
  .threeD {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media only screen and (max-width: 700px) {
  .displayPossition {
    width: 90% !important;
  }
}
</style>
