<template>
  <div class="action">
    <h2>Reflexão</h2>
    <button @click="reflexionar('x')">Reflect X</button>
    <button @click="reflexionar('y')">Reflect Y</button>
    <button v-show="!twoD" @click="reflexionar('z')">Reflect Z</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["reflect", "UPDATE_VECTOR"]),
    reflexionar(eixo) {
      window.scrollTo(0, 0);
      this.reflect(eixo);
      this.UPDATE_VECTOR();
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
