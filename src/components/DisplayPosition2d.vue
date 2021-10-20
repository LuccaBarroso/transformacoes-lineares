<template>
  <div class="parent">
    <div class="displayPossition">
      <div class="inputNumber">
        <label for="input">X0=</label>
        <input type="number" v-model="getPositionX0" />
      </div>
      <div class="inputNumber">
        <label for="input">Y0=</label>
        <input type="number" v-model="getPositionY0" />
      </div>
      <div class="inputNumber">
        <label for="input">X1=</label>
        <input type="number" v-model="getPositionX1" />
      </div>
      <div class="inputNumber">
        <label for="input">Y1=</label>
        <input type="number" v-model="getPositionY1" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["getPositions"]),
    getPositionX0: {
      get() {
        return this.getPositions("x0");
      },
      set(value) {
        //{ index: "x0", value: Number(value) }
        this.setPositions({ index: "x0", value });
      },
    },
    getPositionY0: {
      get() {
        return this.getPositions("y0");
      },
      set(value) {
        //{ index: "x0", value: Number(value) }
        this.setPositions({ index: "y0", value });
      },
    },
    getPositionX1: {
      get() {
        return this.getPositions("x1");
      },
      set(value) {
        //{ index: "x0", value: Number(value) }
        this.setPositions({ index: "x1", value });
      },
    },
    getPositionY1: {
      get() {
        return this.getPositions("y1");
      },
      set(value) {
        //{ index: "x0", value: Number(value) }
        this.setPositions({ index: "y1", value });
      },
    },
  },
  methods: {
    ...mapMutations(["setPositions"]),
  },
};
</script>

<style scoped lang="scss">
.parent {
  display: flex;
  justify-content: center;
  padding-top: 40px;
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
}
</style>
