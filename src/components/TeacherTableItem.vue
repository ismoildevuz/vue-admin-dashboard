<script setup>
import { defineProps } from "vue";

const props = defineProps(["id", "firstName", "lastName", "subjectName"]);
</script>

<template>
  <div class="w-[340px] h-[350px] p-[32px] rounded-[20px] bg-white relative">
    <button
      class="absolute top-2 right-2 w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-gray-100 hover:cursor-pointer select-none"
    >
      <i class="bx bx-dots-horizontal-rounded text-[24px] text-[#A098AE]"></i>
    </button>

    <div class="flex justify-center gap-[24px]">
      <div
        class="w-[120px] h-[120px] flex items-center justify-center bg-[#C1BBEB] rounded-full"
      >
        <i class="bx bxs-user-detail text-[80px] text-[#4D44B5]"></i>
      </div>
    </div>

    <div class="flex items-center justify-center mt-[24px]">
      <h4
        class="text-[24px] leading-[36px] font-bold text-[#303972] text-center"
      >
        {{ `${firstName} ${lastName}` }}
      </h4>
    </div>

    <div class="flex items-center justify-center mt-[10px]">
      <h5 class="text-[18px] leading-[27px] text-[#A098AE]">
        {{ subjectName }}
      </h5>
    </div>

    <div class="flex items-center justify-center gap-[16px] mt-[32px]">
      <div
        class="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#4D44B5] hover:bg-[#443C9E] hover:border-[1px] hover:border-[#4D44B5] hover:cursor-pointer select-none"
      >
        <i class="bx bx-phone text-[24px] text-white"></i>
      </div>

      <div
        class="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#4D44B5] hover:bg-[#443C9E] hover:border-[1px] hover:border-[#4D44B5] hover:cursor-pointer select-none"
      >
        <i class="bx bx-envelope text-[24px] text-white"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
