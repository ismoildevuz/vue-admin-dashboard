import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Teacher from "../views/Teacher/Teacher.vue";
import Student from "../views/Student/Student.vue";
import ErrorPage from "../views/ErrorPage/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
      children: [
        {
          path: "/teacher",
          name: "teacher",
          component: Teacher,
        },
        {
          path: "/student",
          name: "student",
          component: Student,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: ErrorPage,
    },
  ],
});

export default router;
