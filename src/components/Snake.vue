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
import { mapState } from 'vuex';
import SnakeBody from './SnakeBody.vue';

export default {
  name: 'Snake',
  components: {
    SnakeBody,
  },
  computed: { ...mapState(['snake', 'food']) },
};
</script>

<style></style>
