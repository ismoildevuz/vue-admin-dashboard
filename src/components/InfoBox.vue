<script setup>
import { reactive } from "vue";
import { useStudentStore } from "../stores/student/student";
import { useTeacherStore } from "../stores/teacher/teacher";
import { useGroupStore } from "../stores/group/group";
import { useSubjectStore } from "../stores/subject/subject";

const studentStore = useStudentStore();
const teacherStore = useTeacherStore();
const groupStore = useGroupStore();
const subjectStore = useSubjectStore();

const state = reactive({
  list: [
    {
      id: 1,
      title: "O'quvchilar",
      amount: studentStore.getList.length,
      icon: "bx bx-user",
      color: "#4D44B5",
    },
    {
      id: 2,
      title: "O'qituvchilar",
      amount: teacherStore.getList.length,
      icon: "bx bx-user-circle",
      color: "#FB7D5B",
    },
    {
      id: 3,
      title: "Guruhlar",
      amount: groupStore.getList.length,
      icon: "bx bx-calendar",
      color: "#FCC43E",
    },
    {
      id: 4,
      title: "Fanlar",
      amount: subjectStore.getList.length,
      icon: "bx bx-math",
      color: "#303972",
    },
  ],
});
</script>
<template>
  <div class="bg-white rounded-[20px] p-[45px]  mt-[40px]">
    <ul class="flex items-center justify-between">
      <li v-for="el in state.list" :key="el.id">
        <InfoBoxItem
          :title="el.title"
          :amount="el.amount"
          :icon="el.icon"
          :color="el.color"
        />
      </li>
    </ul>
  </div>
</template>
<style lang="" scoped></style>
