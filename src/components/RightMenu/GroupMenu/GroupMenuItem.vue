<script setup>
import { defineProps } from "vue";

const props = defineProps(["id", "title", "className"]);
</script>
<template>
  <div class="flex items-center justify-between mb-[32px]">
    <div class="flex items-center gap-[15px]">
      <div
        class="w-[48px] h-[48px] flex items-center justify-center bg-[#C1BBEB] rounded-full"
      >
        <i class="bx bxs-user-detail text-[24px] text-[#4D44B5]"></i>
      </div>

      <div class="">
        <h6 class="text-[14px] leading-[21px] font-semibold text-[#303972]">
          {{ title }}
        </h6>
        <h6 class="text-[14px] leading-[21px] text-[#A098AE] ">
          Class {{ className }}
        </h6>
      </div>
    </div>

    <div
      class="email w-[48px] h-[48px] flex items-center justify-center bg-white rounded-full border-2 border-[#A098AE] hover:bg-[#4D44B5] hover:border-none"
    >
      <i class="bx bx-envelope text-[24px] text-[#A098AE]"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.email:hover {
  i {
    color: white;
  }
}
</style>
