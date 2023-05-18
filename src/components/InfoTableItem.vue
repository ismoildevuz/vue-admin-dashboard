<script setup>
import { defineProps } from "vue";

const props = defineProps([
  "id",
  "firstName",
  "lastName",
  "className",
  "hours",
]);
</script>

<template>
  <div class="flex items-center justify-between px-[32px] py-[24px]">
    <div class="flex items-center gap-[24px] min-w-[250px]">
      <div
        class="w-[48px] h-[48px] flex items-center justify-center bg-[#C1BBEB] rounded-full"
      >
        <i class="bx bxs-user-detail text-[30px] text-[#4D44B5]"></i>
      </div>

      <div>
        <h5 class="text-[18px] leading-[27px] font-semibold text-[#303972]">
          {{ `${firstName} ${lastName}` }}
        </h5>
      </div>
    </div>

    <div class="flex items-center justify-between w-[65%]">
      <div class="flex min-w-[125px]">
        <h5 class="text-[18px] leading-[27px] font-semibold text-[#4D44B5]">
          {{ `ID ${id}` }}
        </h5>
      </div>

      <div class="flex items-center gap-[16px] min-w-[125px]">
        <div
          class="w-[48px] h-[48px] flex items-center justify-center bg-[#FB7D5B] rounded-full"
        >
          <i class="bx bx-chalkboard text-[24px] text-white"></i>
        </div>

        <div>
          <h6 class="text-[14px] leading-[21px] text-[#A098AE]">Class</h6>
          <h5 class="text-[18px] leading-[27px] font-semibold text-[#303972]">
            {{ className }}
          </h5>
        </div>
      </div>

      <div class="flex min-w-[70px]">
        <h5 class="text-[18px] leading-[27px] font-semibold text-[#303972]">
          {{ `${hours} soat` }}
        </h5>
      </div>

      <div class="flex items-center justify-between min-w-[125px]">
        <div
          class="w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-gray-100 hover:cursor-pointer select-none"
        >
          <i class="bx bx-printer text-[24px] text-[#A098AE]"></i>
        </div>

        <div
          class="w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-gray-100 hover:cursor-pointer select-none"
        >
          <i
            class="bx bx-dots-horizontal-rounded text-[24px] text-[#A098AE]"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
