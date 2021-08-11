<template>
  <div id="snake" v-on:keyup.enter="move" v-on:keydown.left="left()" v-on:keydown.right="right()">
    <SnakeBody v-for="p of snake.body" :key="p.x.toString() + p.y" :position="p" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import SnakeBody from './SnakeBody.vue';

export default {
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
      this.$store.commit('SNAKE_TURN_RIGHT');
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
    setTimeout(() => {
      console.log('statr.....');
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
