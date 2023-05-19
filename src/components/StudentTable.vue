<script setup>
import { useStudentStore } from "../stores/student/student";

const studentStore = useStudentStore();
</script>
<template>
  <div class="table border border-[#EAECF0] rounded-[8px]">
    <div
      class="tableHead flex items-center justify-between p-[25px] border-b border-[#EAECF0] rounded-t-[8px] bg-[#F9FAFB]"
    >
      <div class="flex items-center justify-start min-w-[50px]">
        <CheckBox />
      </div>

      <div class="flex min-w-[300px]">
        <div
          class="flex gap-[20px] px-[5px] rounded-lg hover:bg-gray-100 hover:cursor-pointer select-none"
        >
          <h6 class="text-[12px] leading-[21px] font-bold text-[#8A92A6]">
            I.O.F
          </h6>
          <i class="bx bx-down-arrow-alt text-[#667085]"></i>
        </div>
      </div>

      <div class="flex min-w-[150px]">
        <div
          class="flex gap-[20px] px-[5px] rounded-lg hover:bg-gray-100 hover:cursor-pointer select-none"
        >
          <h6 class="text-[12px] leading-[21px] font-bold text-[#8A92A6]">
            Guruh raqami
          </h6>
          <i class="bx bx-down-arrow-alt text-[#667085]"></i>
        </div>
      </div>

      <div class="flex min-w-[150px]">
        <div
          class="flex gap-[20px] px-[5px] rounded-lg hover:bg-gray-100 hover:cursor-pointer select-none"
        >
          <h6 class="text-[12px] leading-[21px] font-bold text-[#8A92A6]">
            Bosqich
          </h6>
          <i class="bx bx-down-arrow-alt text-[#667085]"></i>
        </div>
      </div>

      <div class="flex min-w-[150px]">
        <div
          class="flex gap-[20px] px-[5px] rounded-lg hover:bg-gray-100 hover:cursor-pointer select-none"
        >
          <h6 class="text-[12px] leading-[21px] font-bold text-[#8A92A6]">
            Qo'shilgan sana
          </h6>
          <i class="bx bx-down-arrow-alt text-[#667085]"></i>
        </div>
      </div>

      <div class="flex min-w-[150px]">
        <div
          class="flex gap-[20px] px-[5px] rounded-lg hover:bg-gray-100 hover:cursor-pointer select-none"
        >
          <h6 class="text-[12px] leading-[21px] font-bold text-[#8A92A6]">
            ID raqami
          </h6>
          <i class="bx bx-down-arrow-alt text-[#667085]"></i>
        </div>
      </div>

      <div class="flex min-w-[90px]">
        <div
          class="flex gap-[20px] px-[5px] rounded-lg hover:bg-gray-100 hover:cursor-pointer select-none"
        ></div>
      </div>

      <div class="flex min-w-[320px]">
        <div
          class="flex gap-[20px] px-[5px] rounded-lg hover:bg-gray-100 hover:cursor-pointer select-none"
        ></div>
      </div>
    </div>

    <ul class="h-[540px] bg-white">
      <li v-for="(el, index) in studentStore.paginatedList" :key="el.id">
        <StudentTableItem
          :id="el.id"
          :firstName="el.firstName"
          :lastName="el.lastName"
          :email="el.email"
          :groupId="el.groupId"
          :level="el.level"
          :addedAt="el.addedAt"
        />
      </li>
    </ul>

    <div class="bg-white p-[25px] rounded-b-[8px]">
      <PaginationBarSecond />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tableHead h6 {
  font-family: "Abhaya Libre", serif !important;
}
</style>
