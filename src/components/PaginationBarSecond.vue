<script setup>
import { useStudentStore } from "../stores/student/student";

const studentStore = useStudentStore();
</script>

<template>
  <div class="flex items-center justify-between">
    <div
      @click="studentStore.previousPage"
      class="w-[85px] h-[36px] flex items-center justify-center bg-white border border-[#D0D5DD] rounded-[8px] hover:bg-gray-100 hover:cursor-pointer select-none"
    >
      <h6 class="text-[14px] leading-[20px] text-[#344054]">avvalgisi</h6>
    </div>

    <div class="flex items-center justify-center">
      <PaginationInfo
        :paginationInfo="studentStore.paginationInfo"
        :color="'#344054'"
      />
    </div>

    <div
      @click="studentStore.nextPage"
      class="w-[85px] h-[36px] flex items-center justify-center bg-white border border-[#D0D5DD] rounded-[8px] hover:bg-gray-100 hover:cursor-pointer select-none"
    >
      <h6 class="text-[14px] leading-[20px] text-[#344054]">keyingisi</h6>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.active-pagination {
  background-color: #4d44b5;
  border-color: #4d44b5;
  h6 {
    color: white;
  }
}

.active-pagination:hover {
  background-color: #443c9e;
  border-color: #443c9e;
  h6 {
    color: white;
  }
}
</style>
