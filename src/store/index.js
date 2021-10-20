import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    p0: {
      x: 0,
      y: 0,
      z: 0,
    },
    p1: {
      x: 10,
      y: 10,
      z: 10,
    },
  },
  getters: {
    getPositions: (state) => (index) => {
      if (index[1] == 0) {
        if (index[0] === "x") return state.p0.x;
        if (index[0] === "y") return state.p0.y;
        if (index[0] === "z") return state.p0.z;
      } else {
        if (index[0] === "x") return state.p1.x;
        if (index[0] === "y") return state.p1.y;
        if (index[0] === "z") return state.p1.z;
      }
    },
  },
  mutations: {
    setPositions: (state, { index, value }) => {
      const newValue = value === "" ? 0 : Number(value);
      if (index[1] == 0) {
        if (index[0] === "x") state.p0.x = newValue;
        if (index[0] === "y") state.p0.y = newValue;
        if (index[0] === "z") state.p0.z = newValue;
      } else {
        if (index[0] === "x") state.p1.x = newValue;
        if (index[0] === "y") state.p1.y = newValue;
        if (index[0] === "z") state.p1.z = newValue;
      }
    },
    translate: (state, { x, y, z = 0 }) => {
      state.p0.x += x;
      state.p0.y += y;
      state.p0.z += z;
      state.p1.x += x;
      state.p1.y += y;
      state.p1.z += z;
    },
  },
  actions: {},
  modules: {},
});
