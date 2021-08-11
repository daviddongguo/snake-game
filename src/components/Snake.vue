<template>
  <div id="snake" v-on:keyup.enter="move" v-on:keydown.left="left()" v-on:keydown.right="right()">
    <SnakeBody v-for="p of snake.body" :key="p.x.toString() + p.y" :position="p" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SnakeBody from './SnakeBody.vue';

export default {
  components: {
    SnakeBody,
  },
  computed: {
    ...mapState(['snake', 'food']),
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    move() {
      this.$store.dispatch('moveSnake');
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    right() {
      this.$store.commit('SNAKE_TURN', 1);
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    left() {
      this.$store.commit('SNAKE_TURN', -1);
    },
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    window.addEventListener('keypress', (e) => {
      const keyCode = String.fromCharCode(e.keyCode);
      console.log(keyCode);
      if (keyCode === 'q') {
        this.left();
      }
      if (keyCode === 'w') {
        this.move();
      }
      if (keyCode === 'e') {
        this.right();
      }
    });
    this.timer = setInterval(() => {
      this.move();
    }, 200);
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style></style>
