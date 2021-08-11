/* eslint-disable object-curly-newline */
import Vue from 'vue';
import Vuex from 'vuex';
import {
  Direction,
  isInStage,
  isSame,
  modelTurn,
  move,
  Position,
  randomPosition,
} from '../components/Utile';

Vue.use(Vuex);

const arr = () => [
  { x: 120, y: 120 },
  { x: 120, y: 110 },
  { x: 120, y: 100 },
  { x: 120, y: 90 },
  { x: 120, y: 80 },
  { x: 120, y: 70 },
  { x: 120, y: 60 },
  { x: 120, y: 50 },
  { x: 120, y: 40 },
  { x: 120, y: 30 },
  { x: 120, y: 20 },
  { x: 120, y: 10 },
  { x: 120, y: 0 },
  { x: 130, y: 0 },
  { x: 140, y: 0 },
  { x: 150, y: 0 },
  { x: 160, y: 0 },
];

export default new Vuex.Store({
  state: {
    score: 0,
    food: {
      x: 120,
      y: 150,
    },
    snake: {
      direct: 2, // 0 up, 1 right, 2 down 3 left
      speed: 1000,
      exTail: arr()[arr.length - 1],
      body: arr().slice(0, arr.length - 1),
    },
  },
  getters: {
    level(state) {
      return state.snake.body.length;
    },

    isAlive({ snake }) {
      const header = move(snake.body[0], snake.direct);
      for (let i = snake.body.length - 2; i >= 1; i -= 1) {
        if (header.x === snake.body[i].x && header.y === snake.body[i].y) {
          return false;
        }
      }
      return true;
    },
  },
  mutations: {
    // TODO: simple this code by using utile tools
    SNAKE_STEP(state) {
      const { snake } = state;

      let header = move(snake.body[0], snake.direct);
      while (!isInStage(header)) {
        state.snake.direct = (state.snake.direct + 1) % 4;
        header = move(snake.body[0], snake.direct);
      }
      snake.body.unshift(header);
      state.snake.exTail = snake.body.pop() || state.snake.exTail;
      state.score += 100;
    },
    SNAKE_GROW(state) {
      // state.snake.body.unshift(value);
      state.snake.body.push(state.snake.exTail);
    },
    SNAKE_TURN_RIGHT(state) {
      state.snake.direct = modelTurn(state.snake.direct as Direction, 1);
    },
    SNAKE_TURN_LEFT(state) {
      state.snake.direct = modelTurn(state.snake.direct as Direction, -1);
    },
    SNAKE_REFRESH(state) {
      state.snake.body = arr();
    },
    FOOD_CHANGE(state, value: Position) {
      state.food.x = value.x;
      state.food.y = value.y;
    },
  },
  actions: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    changeFood({ commit, state }, value) {
      if (value && value.x && value.y) {
        commit('FOOD_CHANGE', value);
      }
    },
    moveSnake({ commit, state }) {
      let header = move(state.snake.body[0], state.snake.direct);

      for (let i = state.snake.body.length - 2; i >= 1; i -= 1) {
        if (isSame(header, state.snake.body[i])) {
          // TODO: turn left, then try move again

          commit('SNAKE_TURN_LEFT', -1);
          header = move(state.snake.body[0], state.snake.direct);
          return;
          // commit('SNAKE_REFRESH');
        }
      }

      if (isSame(state.food, header)) {
        commit('SNAKE_GROW', state.food);
        commit('FOOD_CHANGE', randomPosition());
      }

      commit('SNAKE_STEP');
    },
    turnSnake({ commit, state }, value) {
      const toDirect = modelTurn(state.snake.direct as Direction, value);
      const header = move(state.snake.body[0], toDirect);

      for (let i = state.snake.body.length - 2; i >= 1; i -= 1) {
        if (isSame(header, state.snake.body[i])) {
          commit('SNAKE_TURN_LEFT');
          // TODO: refresh snake
          // commit('SNAKE_REFRESH');
        }
      }

      commit('SNAKE_TURN_RIGHT');
    },
  },
  modules: {},
});
