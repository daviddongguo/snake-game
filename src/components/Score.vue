<template>
  <div id="score-panel">
    <div>
      Score: <span id="score">{{ score }}</span>
    </div>
    <div>
      Level: <span id="level" @click="change">{{ level }}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  computed: {
    ...mapState(['score']),
    ...mapGetters(['level', 'isAlive', 'level']),
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    change() {
      const rnd = () => Math.floor(Math.random() * 30) * 10;
      const x = rnd();
      const y = rnd();
      this.$store.dispatch('changeFood', { x, y });
    },
  },
};
</script>

<style></style>
