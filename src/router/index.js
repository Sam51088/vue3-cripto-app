import MainPage from "../views/MainPage.vue";
import InfoPage from "../views/InfoPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainPage,
    name: "MainPage",
  },
  {
    path: "/crypto/:id",
    component: InfoPage,
    name: "InfoPage",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
