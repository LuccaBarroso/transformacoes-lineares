<template>
  <div class="action">
    <h2>Translação</h2>
    <div class="inputNumber">
      <label for="input">X=</label>
      <input type="number" v-model="x" />
    </div>
    <div class="inputNumber">
      <label for="input">Y=</label>
      <input type="number" v-model="y" />
    </div>
    <div v-if="!twoD" class="inputNumber">
      <label for="input">Z=</label>
      <input type="number" v-model="z" />
    </div>
    <button @click="translacionar()">Executar</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      x: 0,
      y: 0,
      z: 0,
    };
  },
  methods: {
    ...mapMutations(["translate"]),
    translacionar() {
      window.scrollTo(0, 0);
      this.translate({
        x: Number(this.x),
        y: Number(this.y),
        z: Number(this.z),
      });
      this.x = 0;
      this.y = 0;
      this.z = 0;
    },
  },
  props: {
    twoD: {
      type: Boolean,
      default: true,
    },
  },
  computed: {},
};
</script>

<style scoped lang="scss">
.action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    padding: 5px;
    margin: 5px;
    background-color: #6e8894;
    color: white;
  }
  .inputNumber {
    margin: 5px;
    padding: 5px;
    color: white;
    background-color: #544e61;
    input {
      outline: none;
      padding-left: 10px;
      color: white;
    }
  }
}
</style>
