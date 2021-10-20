<template>
  <div>
    <div class="buttons">
      <button
        @click="changeCurAction('translacao')"
        :class="{ active: translacao }"
      >
        Translação
      </button>
      <button @click="changeCurAction('rotacao')" :class="{ active: rotacao }">
        Rotação
      </button>
      <button
        @click="changeCurAction('reflexao')"
        :class="{ active: reflexao }"
      >
        Reflexão
      </button>
      <button
        @click="changeCurAction('projecao')"
        :class="{ active: projecao }"
      >
        Projeção
      </button>
      <button
        v-if="twoD"
        @click="changeCurAction('cisalhamento')"
        :class="{ active: cisalhamento }"
      >
        Cisalhamento
      </button>
    </div>
    <!-- Actual components -->
    <translacao v-if="translacao" :twoD="twoD" />
    <rotacao v-if="rotacao" :twoD="twoD" />
  </div>
</template>

<script>
import translacao from "../components/Translacao.vue";
import Rotacao from "./Rotacao.vue";
export default {
  components: { translacao, Rotacao },
  data() {
    return {
      translacao: true,
      rotacao: false,
      reflexao: false,
      projecao: false,
      cisalhamento: false,
    };
  },
  props: {
    twoD: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    changeCurAction(newAction) {
      this.translacao = false;
      this.rotacao = false;
      this.reflexao = false;
      this.projecao = false;
      this.cisalhamento = false;
      if (newAction == "translacao") this.translacao = true;
      if (newAction == "rotacao") this.rotacao = true;
      if (newAction == "reflexao") this.reflexao = true;
      if (newAction == "projecao") this.projecao = true;
      if (newAction == "cisalhamento") this.cisalhamento = true;
    },
  },
};
</script>

<style scoped lang="scss">
.buttons {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0px;
  button {
    border-radius: 10px 0 0 10px;
    color: white;
    margin-bottom: 10px;
    background-color: #544e61;
    padding: 5px;
    padding-right: 100px;
    width: 110px;
  }
  button:hover:not(.active) {
    padding: 2.5px;
    margin-top: 2.5px;
    margin-bottom: 12.5px;
    padding-right: 5px;
  }
  button.active {
    background-color: #6e8894;
  }
}
</style>
