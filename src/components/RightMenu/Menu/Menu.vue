<script setup>
import { useAuthStore } from "../../../stores/auth/auth";

const authStore = useAuthStore();
</script>

<template>
  <div class="flex items-center justify-between w-[315px]">
    <div
      class="w-[60px] h-[60px] flex items-center justify-center bg-white rounded-full"
    >
      <i class="bx bx-bell text-[30px] text-[#A098AE]"></i>
    </div>

    <div
      class="w-[60px] h-[60px] flex items-center justify-center bg-white rounded-full"
    >
      <i class="bx bx-cog text-[30px] text-[#A098AE]"></i>
    </div>

    <div class="flex items-center justify-between w-[170px]">
      <div class="">
        <h6
          class="text-[14px] leading-[21px] font-semibold text-[#303972] text-center"
        >
          {{ authStore.getFullName }}
        </h6>
        <h6 class="text-[14px] leading-[21px] text-[#A098AE]  text-center">
          {{ authStore.getRole }}
        </h6>
      </div>

      <div
        class="w-[60px] h-[60px] flex items-center justify-center bg-[#C1BBEB] rounded-full"
      >
        <i class="bx bxs-user-detail text-[30px] text-[#4D44B5]"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
