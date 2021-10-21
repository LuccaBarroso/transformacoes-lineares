<template>
  <router-link class="linkBtn" @click.native="deleteZ()" :to="to">
    {{ value }}
  </router-link>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    to: {
      required: true,
    },
    value: {
      type: String,
    },
  },
  methods: {
    ...mapMutations(["RESETZ", "UPDATE_VECTOR"]),
    deleteZ() {
      if (this.to == "/2d") this.RESETZ();
      this.UPDATE_VECTOR();
    },
  },
};
</script>

<style scoped lang="scss">
.linkBtn {
  background-color: #6e8894;
  text-decoration: none;
  color: white;
  padding: 10.5px;
  font-weight: 600;
}
.router-link-active {
  color: black;
  background-color: white;
}
</style>
