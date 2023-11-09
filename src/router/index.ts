import { createRouter, createWebHistory } from "vue-router";

import LastEdit from "@/views/LastEdit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "initial",
      component: LastEdit,
      meta:{title:"Last Edit"}
    },
  ],
});

export default router;
