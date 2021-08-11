<template>
  <div :style="{ left: leftOffset, top: topOffset, backgroundColor: color }"></div>
</template>

<script>
export default {
  props: ['position', 'isHeader', 'isTail'],
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    leftOffset() {
      return `${this.position.x.toString()}px`;
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    topOffset() {
      return `${this.position.y.toString()}px`;
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    color() {
      if (this.isHeader) {
        return 'red';
      }
      if (this.isTail) {
        return 'grey';
      }

      return 'black';
    },
  },
};
</script>

<style></style>
