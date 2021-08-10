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
  components: {
    Snake,
    Food,
  },
};
</script>

<style></style>
