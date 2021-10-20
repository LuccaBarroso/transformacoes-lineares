<template>
  <router-link class="linkBtn" :to="to">
    {{ value }}
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      required: true,
    },
    value: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.linkBtn {
  height: 100%;
  background-color: #6e8894;
  text-decoration: none;
  color: white;
  padding: 18.3px;
  font-weight: 600;
}
.router-link-active {
  color: black;
  background-color: white;
}
</style>
