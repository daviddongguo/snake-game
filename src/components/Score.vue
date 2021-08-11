<template>
  <div id="score-panel">
    <div>
      Score: <span id="score">{{ score }}</span>
    </div>
    <div @click="levelUp">
      Level: <span id="level">{{ level }}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  computed: {
    ...mapState(['score']),
    ...mapGetters(['level']),
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    levelUp() {
      this.$store.dispatch('levelUp');
    },
  },
};
</script>

<style></style>
