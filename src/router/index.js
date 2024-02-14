import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/Tours",
    name: "Tours",
    component: () => import("../views/SafariTour.vue"),
  },
  //   {
  //     path: "",
  //     name: "",
  //     // component: () => import("")
  //   },
  //   {
  //     path: "",
  //     name: "",
  //     // component: () => import("")
  //   },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
