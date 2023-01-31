import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/views/login/login.vue"),
  },

  {
    path: "/home",
    component: () => import("@/views/home/home.vue"),
  },
  {
    path: "/search",
    component: () => import("@/views/search/search.vue"),
  },
  {
    path: "/order",
    component: () => import("@/views/order/order.vue"),
  },
  {
    path: "/confirm",
    component: () => import("@/views/confirm/confirm.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
