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
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      x: 120,
      y: 120,
    };
  },
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    left() {
      return `${this.x.toString()}px`;
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    top() {
      return `${this.y.toString()}px`;
    },
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    const rnd = () => Math.floor(Math.random() * 30) * 10;
    setInterval(() => {
      this.x = rnd();
      this.y = rnd();
    }, 1000);
  },
};
</script>

<style></style>
