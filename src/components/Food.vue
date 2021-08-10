<template>
  <div id="food" :style="{ left: left, top: top }">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    left() {
      return `${this.$store.state.food.x.toString()}px`;
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    top() {
      return `${this.$store.state.food.y.toString()}px`;
    },
  },
  methods: {},
};
</script>

<style></style>
