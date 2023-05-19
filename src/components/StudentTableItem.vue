<script setup>
import { defineProps } from "vue";
import { useStudentStore } from "../stores/student/student";

const studentStore = useStudentStore();
const props = defineProps([
  "id",
  "firstName",
  "lastName",
  "email",
  "groupId",
  "level",
  "addedAt",
]);
</script>

<template>
  <div
    class="tableRow flex items-center justify-between px-[25px] py-[32px] border-b border-[#EAECF0] bg-white"
  >
    <div class="flex items-center justify-start min-w-[50px]">
      <CheckBox />
    </div>

    <div class="flex items-center gap-[12px] min-w-[300px]">
      <div
        class="w-[40px] h-[40px] flex items-center justify-center bg-[#C1BBEB] rounded-full"
      >
        <i class="bx bxs-user-detail text-[20px] text-[#4D44B5]"></i>
      </div>

      <div class="">
        <h6 class="text-[15px] leading-[19px] font-bold text-[#303972]">
          {{ `${firstName} ${lastName}` }}
        </h6>
        <h6 class="text-[14px] leading-[24px] font-bold text-[#667085]">
          {{ email }}
        </h6>
      </div>
    </div>

    <div class="flex gap-[20px] min-w-[150px]">
      <h6 class="text-[16px] leading-[28px] font-bold text-[#232D42]">
        {{ groupId }}
      </h6>
    </div>

    <div class="flex gap-[20px] min-w-[150px]">
      <h6 class="text-[16px] leading-[28px] font-bold text-[#232D42]">
        {{ level }}
      </h6>
    </div>

    <div class="flex gap-[20px] min-w-[150px]">
      <h6 class="text-[16px] leading-[28px] font-bold text-[#232D42]">
        {{ addedAt.split("T")[0].split("-").join(".") }}
      </h6>
    </div>

    <div class="flex gap-[20px] min-w-[150px]">
      <h6 class="text-[16px] leading-[28px] font-bold text-[#232D42]">
        {{ id }}
      </h6>
    </div>

    <div class="flex items-center justify-between min-w-[90px]">
      <button
        @click="studentStore.removeItem(id)"
        class="w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-gray-100 hover:cursor-pointer select-none"
      >
        <i class="bx bx-trash text-[24px] text-[#A098AE]"></i>
      </button>

      <RouterLink
        :to="`/student/edit/${id}`"
        class="w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-gray-100 hover:cursor-pointer select-none"
      >
        <i class="bx bx-edit-alt text-[24px] text-[#A098AE]"></i>
      </RouterLink>
    </div>

    <div class="flex gap-[20px] min-w-[325px]"></div>
  </div>
</template>

<style lang="scss" scoped>
.tableRow h6 {
  font-family: "Abhaya Libre", serif !important;
}
</style>
