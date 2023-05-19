<script setup>
import { useTeacherStore } from "../stores/teacher/teacher";

const teacherStore = useTeacherStore();
</script>
<template>
  <div class="">
    <ul class="h-[1130px] mb-[30px] grid grid-cols-4 gap-[40px]">
      <li v-for="el in teacherStore.paginatedList" :key="el.id">
        <TeacherTableItem
          :id="el.id"
          :firstName="el.firstName"
          :lastName="el.lastName"
          :subjectName="el.subjectName"
        />
      </li>
    </ul>

    <div class="flex items-center justify-between px-[32px]">
      <PaginationInfo
        :paginationInfo="teacherStore.paginationInfo"
        :color="'#303972'"
      />
      <TeacherPagination
        :pageNumbers="teacherStore.pageNumbers"
        :activePage="teacherStore.activePage"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
