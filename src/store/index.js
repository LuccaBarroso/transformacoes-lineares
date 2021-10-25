import Vue from "vue";
import Vuex from "vuex";
import mul from "../usefullFunctions/MatrixTimesVector.js";
import {
  Scene,
  TrackballControls,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  FogExp2,
  // CylinderBufferGeometry,
  // MeshPhongMaterial,
  // Mesh,
  DirectionalLight,
  AmbientLight,
  LineBasicMaterial,
  Geometry,
  Vector3,
  Line,
  Points,
  PointsMaterial,
} from "three-full";

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
      z: 0,
    },
    width: 0,
    height: 0,
    camera: null,
    controls: null,
    scene: null,
    renderer: null,
    axisLines: [],
    vector: [],
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
    RESETZ(state) {
      state.p0.z = 0;
      state.p1.z = 0;
    },
    SET_VIEWPORT_SIZE(state, { width, height }) {
      state.width = width;
      state.height = height;
    },
    INITIALIZE_RENDERER(state, el) {
      state.renderer = new WebGLRenderer({ antialias: true });
      state.renderer.setPixelRatio(window.devicePixelRatio);
      state.renderer.setSize(state.width, state.height);
      el.appendChild(state.renderer.domElement);
    },
    INITIALIZE_CAMERA(state) {
      state.camera = new PerspectiveCamera(
        // 1. Field of View (degrees)
        60,
        // 2. Aspect ratio
        state.width / state.height,
        // 3. Near clipping plane
        1,
        // 4. Far clipping plane
        1000
      );
      state.camera.position.z = 100;
    },
    INITIALIZE_CONTROLS(state) {
      state.controls = new TrackballControls(
        state.camera,
        state.renderer.domElement
      );
      state.controls.rotateSpeed = 1.0;
      state.controls.zoomSpeed = 1.2;
      state.controls.panSpeed = 0.8;
      state.controls.noZoom = false;
      state.controls.noPan = false;
      state.controls.staticMoving = true;
      state.controls.dynamicDampingFactor = 0.3;
    },
    INITIALIZE_SCENE(state) {
      state.scene = new Scene();
      state.scene.background = new Color(0xffffff);
      state.scene.fog = new FogExp2(0xcccccc, 0.002);
      // var geometry = new CylinderBufferGeometry(0, 10, 30, 4, 1);
      // var material = new MeshPhongMaterial({
      //   color: 0xffffff,
      //   flatShading: true
      // });
      // for (var i = 0; i < 500; i++) {
      //   var mesh = new Mesh(geometry, material);
      //   mesh.position.x = (Math.random() - 0.5) * 1000;
      //   mesh.position.y = (Math.random() - 0.5) * 1000;
      //   mesh.position.z = (Math.random() - 0.5) * 1000;
      //   mesh.updateMatrix();
      //   mesh.matrixAutoUpdate = false;
      //   state.pyramids.push(mesh);
      // }
      // state.scene.add(...state.pyramids);
      // lights
      var lightA = new DirectionalLight(0xffffff);
      lightA.position.set(1, 1, 1);
      state.scene.add(lightA);
      var lightB = new DirectionalLight(0x002288);
      lightB.position.set(-1, -1, -1);
      state.scene.add(lightB);
      var lightC = new AmbientLight(0x222222);
      state.scene.add(lightC);
      // Axis Line 1
      var materialB = new LineBasicMaterial({ color: 0x0000ff, linewidth: 2 });
      var geometryB = new Geometry();
      geometryB.vertices.push(new Vector3(0, 0, 0));
      geometryB.vertices.push(new Vector3(0, 1000, 0));
      var lineA = new Line(geometryB, materialB);
      state.axisLines.push(lineA);
      // Axis Line 2
      var materialC = new LineBasicMaterial({ color: 0x00ff00, linewidth: 2 });
      var geometryC = new Geometry();
      geometryC.vertices.push(new Vector3(0, 0, 0));
      geometryC.vertices.push(new Vector3(1000, 0, 0));
      var lineB = new Line(geometryC, materialC);
      state.axisLines.push(lineB);
      // Axis 3
      var materialD = new LineBasicMaterial({ color: 0xff0000, linewidth: 2 });
      var geometryD = new Geometry();
      geometryD.vertices.push(new Vector3(0, 0, 0));
      geometryD.vertices.push(new Vector3(0, 0, 1000));
      var lineC = new Line(geometryD, materialD);
      state.axisLines.push(lineC);
      state.scene.add(...state.axisLines);
      // Axis 4 SELF MADE
      var materialE = new LineBasicMaterial({ color: 0x000000, linewidth: 3 });
      var geometryE = new Geometry();
      geometryE.vertices.push(new Vector3(state.p0.x, state.p0.y, state.p0.z));
      geometryE.vertices.push(new Vector3(state.p1.x, state.p1.y, state.p1.z));
      var arrow = new Line(geometryE, materialE);
      state.vector.push(arrow);

      var pointMaterial = new PointsMaterial({
        size: 3,
        sizeAttenuation: false,
        color: 0x000000,
      });
      var pointGeometry = new Geometry();
      pointGeometry.vertices.push(
        new Vector3(state.p1.x, state.p1.y, state.p1.z)
      );
      var point = new Points(pointGeometry, pointMaterial);
      state.vector.push(point);
      state.scene.add(...state.vector);
    },
    UPDATE_VECTOR(state) {
      state.scene.remove(...state.vector);
      state.vector = [];

      var materialE = new LineBasicMaterial({ color: 0x000000 });
      var geometryE = new Geometry();
      geometryE.vertices.push(new Vector3(state.p0.x, state.p0.y, state.p0.z));
      geometryE.vertices.push(new Vector3(state.p1.x, state.p1.y, state.p1.z));
      var arrow = new Line(geometryE, materialE);
      state.vector.push(arrow);

      var pointMaterial = new PointsMaterial({
        size: 3,
        sizeAttenuation: false,
        color: 0x000000,
      });
      var pointGeometry = new Geometry();
      pointGeometry.vertices.push(
        new Vector3(state.p1.x, state.p1.y, state.p1.z)
      );
      var point = new Points(pointGeometry, pointMaterial);
      state.vector.push(point);

      state.scene.add(...state.vector);

      state.renderer.render(state.scene, state.camera);
    },
    RESIZE(state, { width, height }) {
      state.width = width;
      state.height = height;
      state.camera.aspect = width / height;
      state.camera.updateProjectionMatrix();
      state.renderer.setSize(width, height);
      state.controls.handleResize();
      state.renderer.render(state.scene, state.camera);
    },
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
      let rotationMatriz = [
        [1, 0, 0],
        [0, Math.cos(x * (Math.PI / 180)), -Math.sin(x * (Math.PI / 180))],
        [0, Math.sin(x * (Math.PI / 180)), Math.cos(x * (Math.PI / 180))],
      ];
      let newPos = mul(rotationMatriz, [state.p1.x, state.p1.y, state.p1.z]);
      rotationMatriz = [
        [Math.cos(y * (Math.PI / 180)), 0, Math.sin(y * (Math.PI / 180))],
        [0, 1, 0],
        [-Math.sin(y * (Math.PI / 180)), 0, Math.cos(y * (Math.PI / 180))],
      ];
      newPos = mul(rotationMatriz, newPos);
      rotationMatriz = [
        [Math.cos(z * (Math.PI / 180)), -Math.sin(z * (Math.PI / 180), 0)],
        [Math.sin(z * (Math.PI / 180)), Math.cos(z * (Math.PI / 180)), 0],
        [0, 0, 1],
      ];
      newPos = mul(rotationMatriz, newPos);
      state.p1.x = newPos[0];
      state.p1.y = newPos[1];
      state.p1.z = newPos[2];
    },
    reflect(state, eixo) {
      let reflectMatriz;
      if (state.p0.z == 0 && state.p1.z == 0) {
        if (eixo === "x") {
          reflectMatriz = [
            [1, 0],
            [0, -1],
          ];
        } else if (eixo === "y") {
          reflectMatriz = [
            [-1, 0],
            [0, 1],
          ];
        }
      } else {
        if (eixo === "x") {
          reflectMatriz = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, -1],
          ];
        } else if (eixo === "y") {
          reflectMatriz = [
            [-1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
          ];
        } else if (eixo === "z") {
          reflectMatriz = [
            [1, 0, 0],
            [0, -1, 0],
            [0, 0, 1],
          ];
        }
      }
      let newPos = mul(reflectMatriz, [state.p1.x, state.p1.y, state.p1.z]);
      state.p1.x = newPos[0];
      state.p1.y = newPos[1];
      state.p1.z = newPos[2];
      newPos = mul(reflectMatriz, [state.p0.x, state.p0.y, state.p0.z]);
      state.p0.x = newPos[0];
      state.p0.y = newPos[1];
      state.p0.z = newPos[2];
    },
    project(state, eixo) {
      let projectMatriz;
      if (eixo === "x") {
        projectMatriz = [
          [1, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ];
      } else if (eixo === "y") {
        projectMatriz = [
          [0, 0, 0],
          [0, 1, 0],
          [0, 0, 0],
        ];
      } else if (eixo === "z") {
        projectMatriz = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 1],
        ];
      }

      let newPos = mul(projectMatriz, [state.p1.x, state.p1.y, state.p1.z]);
      state.p1.x = newPos[0];
      state.p1.y = newPos[1];
      state.p1.z = newPos[2];
      newPos = mul(projectMatriz, [state.p0.x, state.p0.y, state.p0.z]);
      state.p0.x = newPos[0];
      state.p0.y = newPos[1];
      state.p0.z = newPos[2];
    },
    shearing(state, { eixo, k }) {
      console.log(k);
      let shearingMatriz = [];
      if (eixo == "x") {
        shearingMatriz = [
          [1, k],
          [0, 1],
        ];
      } else {
        shearingMatriz = [
          [1, 0],
          [k, 1],
        ];
      }
      console.log(shearingMatriz);
      let newPos = mul(shearingMatriz, [state.p1.x, state.p1.y]);
      state.p1.x = newPos[0];
      state.p1.y = newPos[1];
    },
  },
  actions: {
    INIT({ state, commit }, { width, height, el }) {
      return new Promise((resolve) => {
        commit("SET_VIEWPORT_SIZE", { width, height });
        commit("INITIALIZE_RENDERER", el);
        commit("INITIALIZE_CAMERA");
        commit("INITIALIZE_CONTROLS");
        commit("INITIALIZE_SCENE");
        // Initial scene rendering
        state.renderer.render(state.scene, state.camera);
        // Add an event listener that will re-render
        // the scene when the controls are changed
        state.controls.addEventListener("change", () => {
          state.renderer.render(state.scene, state.camera);
        });
        resolve();
      });
    },
    ANIMATE({ state, dispatch }) {
      window.requestAnimationFrame(() => {
        dispatch("ANIMATE");
        state.controls.update();
      });
    },
  },
  modules: {},
});
