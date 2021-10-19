import Vue from "vue";
import VueRouter from "vue-router";
import twoD from "../views/twoD.vue";
import threeD from "../views/threeD.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/3d",
    name: "threeD",
    component: threeD,
  },
  {
    path: "*",
    name: "twoD",
    component: twoD,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
