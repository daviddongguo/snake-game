<template>
  <div :style="{ left, top }"></div>
</template>

<script>
export default {
  props: ['position'],
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    left() {
      return `${this.position.x.toString()}px`;
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    top() {
      return `${this.position.y.toString()}px`;
    },
  },
};
</script>

<style></style>
