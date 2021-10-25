<template>
  <transition name="show" appear>
    <div class="action">
      <h2>Cisalhamento</h2>
      <div class="inputNumber">
        <label for="input">K=</label>
        <input type="number" v-model="k" />
      </div>
      <button @click="cisalhar('x')">Eixo X</button>
      <button @click="cisalhar('y')">Eixo Y</button>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      k: 0,
    };
  },
  methods: {
    ...mapMutations(["shearing", "UPDATE_VECTOR"]),
    cisalhar(eixo) {
      window.scrollTo(0, 0);
      this.shearing({ eixo, k: Number(this.k) });
      this.k = 0;
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
  position: absolute;
  left: 45vw;
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

@media (max-width: 600px) {
  .inputNumber {
    input {
      width: 60%;
    }
  }
  .action {
    left: 10vw;
  }
}
.show-enter-active {
  opacity: 0;
  animation-fill-mode: forwards;
  animation: bounce-in 0.5s 0.5s ease-in-out;
}
.show-leave-active {
  animation-fill-mode: forwards;
  animation: bounce-in 0.5s ease-in-out reverse;
}
@keyframes bounce-in {
  0% {
    opacity: 1;
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
