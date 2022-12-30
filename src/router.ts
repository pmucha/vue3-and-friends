import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    name: "Home",
    path: "/",
    components: {
      default: () => import("@/pages/Home.vue"),
      sidebar: () => import("@/views/Sidebar1.vue"),
    },
  },
  {
    name: "About",
    path: "/about/:id?",
    components: {
      default: () => import("@/pages/About.vue"),
      sidebar: () => import("@/views/Sidebar2.vue"),
    },
  },
  {
    name: "Not Found",
    path: "/:404?",
    component: () => import("@/pages/404.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
