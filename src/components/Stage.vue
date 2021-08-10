/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
<template>
  <div id="stage">
    <Snake />
    <Food />
  </div>
</template>

<script>
import Snake from './Snake.vue';
import Food from './Food.vue';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      food: {
        x: 60,
        y: 120,
      },
    };
  },
  components: {
    Snake,
    Food,
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    change() {
      const rnd = () => Math.floor(Math.random() * 30) * 10;
      this.food.x = rnd();
      this.food.y = rnd();
    },
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    this.change();
  },
};
</script>

<style></style>
