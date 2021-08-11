/* eslint-disable object-curly-newline */
import Vue from 'vue';
import Vuex from 'vuex';
import { isInStage, isSame, move, Position, randomPosition } from '../components/Utile';

Vue.use(Vuex);

const arr = () => [
  { x: 120, y: 120 },
  { x: 120, y: 110 },
  { x: 120, y: 100 },
  { x: 120, y: 90 },
  { x: 120, y: 80 },
  { x: 120, y: 70 },
];

export default new Vuex.Store({
  state: {
    food: {
      x: 120,
      y: 150,
    },
    snake: {
      direct: 2, // 0 up, 1 right, 2 down 3 left
      speed: 1000,
      tail: { x: 0, y: 0 },
      body: arr(),
    },
  },
  getters: {
    level(state) {
      return state.snake.body.length;
    },
    score({ snake }) {
      return snake.body.length * 100;
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
    SNAKE_STEP(state) {
      const { snake } = state;

      let header = move(snake.body[0], snake.direct);
      while (!isInStage(header)) {
        state.snake.direct = (state.snake.direct + 1) % 4;
        header = move(snake.body[0], snake.direct);
      }
      snake.body.unshift(header);
      state.snake.tail = snake.body.pop() || state.snake.tail;
    },
    SNAKE_GROW(state) {
      // state.snake.body.unshift(value);
      state.snake.body.push(state.snake.tail);
    },
    SNAKE_TURN(state, value) {
      state.snake.direct = (state.snake.direct + 4 + value) % 4;
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
      const header = move(state.snake.body[0], state.snake.direct);

      for (let i = state.snake.body.length - 2; i >= 1; i -= 1) {
        if (isSame(header, state.snake.body[i])) {
          commit('SNAKE_REFRESH');
        }
      }

      if (isSame(state.food, header)) {
        commit('SNAKE_GROW', state.food);
        commit('FOOD_CHANGE', randomPosition());
      }

      commit('SNAKE_STEP');
    },
  },
  modules: {},
});
