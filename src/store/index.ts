import Vue from 'vue';
import Vuex from 'vuex';
import { Position } from '../components/Position';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: 100,
    food: {
      x: 120,
      y: 220,
    },
  },
  getters: {
    level(state) {
      return Math.floor(state.score / 100);
    },
  },
  mutations: {
    SCORE_ADD(state, value) {
      state.score += value;
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
  },
  modules: {},
});
