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
import { mapState, mapGetters } from 'vuex';
import Snake from './Snake.vue';
import Food from './Food.vue';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      isRunning: false,
    };
  },
  computed: {
    ...mapState(['snake', 'food', 'isAlive']),
    ...mapGetters(['level']),
  },
  components: {
    Snake,
    Food,
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    stop() {
      clearInterval(this.timer);
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    move() {
      if (!this.isAlive) {
        this.stop();
        // setTimeout(() => {
        //   this.isRunning = false;
        // }, 1000);
      }
      this.$store.dispatch('moveSnake');
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    right() {
      this.$store.dispatch('turnSnake');
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    run(value) {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.move();
      }, value);
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    start() {
      this.isRunning = true;
      setTimeout(() => {
        this.run(500 - this.level * 5);
      }, 1000);
    },
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    window.addEventListener('keypress', (e) => {
      const keyCode = String.fromCharCode(e.keyCode);
      console.log(keyCode);
      if (keyCode === ' ' && !this.isRunning) {
        this.start();
      }
      if (keyCode === ' ' && this.isRunning) {
        this.right();
      }
    });
  },
};
</script>

<style></style>
