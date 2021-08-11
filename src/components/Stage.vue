/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
<template>
  <div id="stage">
    <div v-show="!isRunning" id="info">
      <h1>Right Snake</h1>
      <h3>Please enter spance to start the snake</h3>
      <h3>press space to turn the snake right</h3>
    </div>
    <Snake v-if="isRunning" />
    <Food v-if="isRunning" />
  </div>
</template>

<script>
import Snake from './Snake.vue';
import Food from './Food.vue';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      isRunning: false,
    };
  },
  components: {
    Snake,
    Food,
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    start() {
      this.isRunning = true;
    },
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    window.addEventListener('keypress', (e) => {
      const keyCode = String.fromCharCode(e.keyCode);
      console.log(keyCode);
      if (keyCode === ' ') {
        this.start();
      }
    });
  },
};
</script>

<style></style>
