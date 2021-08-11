<template>
  <div id="food" :style="{ left: leftOffset, top: topOffset }">
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
    leftOffset() {
      return `${this.$store.state.food.x.toString()}px`;
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    topOffset() {
      return `${this.$store.state.food.y.toString()}px`;
    },
  },
};
</script>

<style></style>
