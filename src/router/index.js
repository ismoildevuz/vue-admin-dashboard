import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Teacher from "../views/Teacher/Teacher.vue";
import Student from "../views/Student/Student.vue";
import StudentAdd from "../views/Student/StudentAdd.vue";
import StudentEdit from "../views/Student/StudentEdit.vue";
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
          children: [
            {
              path: "/student/add",
              name: "student-add",
              component: StudentAdd,
            },
            {
              path: "/student/edit/:id",
              name: "student-edit",
              component: StudentEdit,
            },
          ],
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
