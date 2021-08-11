<template>
  <div :style="{ leftOffset, topOffset }"></div>
</template>

<script>
export default {
  props: ['position'],
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    leftOffset() {
      return `${this.position.x.toString()}px`;
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    topOffset() {
      return `${this.position.y.toString()}px`;
    },
  },
};
</script>

<style></style>
