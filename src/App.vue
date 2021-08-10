<template>
  <div id="main">
    <Stage />
    <Score />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Stage from './components/Stage.vue';
import Score from './components/Score.vue';

@Component({
  components: {
    Stage,
    Score,
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
@bg-color: #b7d4a8;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: bold 20px 'Courier';
}

#main {
  margin: 100px auto;
  width: 360px;
  height: 420px;
  background-color: @bg-color;
  border: 10px solid black;
  border-radius: 30px;

  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
}

#stage {
  width: 304px;
  height: 304px;
  // margin: 18px 18px auto 18px;
  border: 2px solid black;
  position: relative;
}
#snake {
  div {
    width: 10px;
    height: 10px;
    background: #000;
    border: 1px solid @bg-color;
    position: absolute;
  }
}

#food {
  width: 10px;
  height: 10px;
  position: absolute;
  left: 40px;
  top: 100px;
  // background: red;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  // align-items: center;
  align-content: space-between;

  div {
    width: 4px;
    height: 4px;
    background: #000;
    transform: rotate(45deg);
  }
}

#score-panel {
  width: 300px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}
</style>
