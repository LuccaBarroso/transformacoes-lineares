import Vue from "vue";
import Vuex from "vuex";
import mul from "../usefullFunctions/MatrixTimesVector.js";

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
    rotate2D: (state, x) => {
      const rotationVector = [
        [Math.cos(x * (Math.PI / 180)), -Math.sin(x * (Math.PI / 180))],
        [Math.sin(x * (Math.PI / 180)), Math.cos(x * (Math.PI / 180))],
      ];
      const newPos = mul(rotationVector, [state.p1.x, state.p1.y]);
      state.p1.x = newPos[0];
      state.p1.y = newPos[1];
      state.p1.z = newPos[2];
    },
    rotate3D: (state, { x, y, z }) => {
      let rotationVector = [
        [1, 0, 0],
        [0, Math.cos(x * (Math.PI / 180)), -Math.sin(x * (Math.PI / 180))],
        [0, Math.sin(x * (Math.PI / 180)), Math.cos(x * (Math.PI / 180))],
      ];
      let newPos = mul(rotationVector, [state.p1.x, state.p1.y, state.p1.z]);
      rotationVector = [
        [Math.cos(y * (Math.PI / 180)), 0, Math.sin(y * (Math.PI / 180))],
        [0, 1, 0],
        [-Math.sin(y * (Math.PI / 180)), 0, Math.cos(y * (Math.PI / 180))],
      ];
      newPos = mul(rotationVector, newPos);
      rotationVector = [
        [Math.cos(z * (Math.PI / 180)), -Math.sin(z * (Math.PI / 180), 0)],
        [Math.sin(z * (Math.PI / 180)), Math.cos(z * (Math.PI / 180)), 0],
        [0, 0, 1],
      ];
      newPos = mul(rotationVector, newPos);
      state.p1.x = newPos[0];
      state.p1.y = newPos[1];
      state.p1.z = newPos[2];
    },
  },
  actions: {},
  modules: {},
});
