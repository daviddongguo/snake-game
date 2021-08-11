/* eslint-disable no-trailing-spaces */
<template>
  <div id="snake">
    <SnakeBody
      v-for="(p, index) of snake.body"
      :key="p.x.toString() + p.y"
      :position="p"
      :isHeader="index === 0"
      :isTail="index === snake.body.length - 1"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import SnakeBody from './SnakeBody.vue';

export default {
  name: 'Snake',
  components: {
    SnakeBody,
  },
  computed: {
    ...mapState(['snake', 'food']),
    ...mapGetters(['level']),
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    move() {
      this.$store.dispatch('moveSnake');
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    right() {
      this.$store.dispatch('turnSnake');
    },

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    start(value) {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.move();
      }, value);
    },
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    window.addEventListener('keypress', (e) => {
      const keyCode = String.fromCharCode(e.keyCode);
      console.log(keyCode);
      if (keyCode === ' ') {
        this.right();
      }
    });
    setTimeout(() => {
      this.start(2000 / this.level);
    }, 1000);
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style></style>
