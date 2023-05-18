<script setup>
import { defineProps } from "vue";

const props = defineProps(["id", "author", "message", "createdAt"]);

const formatDate = (time) => {
  const date = new Date(time);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const formattedTime = `${hours}:${minutes
    .toString()
    .padStart(2, "0")} ${period}`;
  return formattedTime;
};
</script>
<template>
  <div
    class="flex justify-between mb-[16px] border-b-[1px] border-[#A098AE] h-[75px]"
  >
    <div class="flex items-center gap-[15px]">
      <div
        class="w-[48px] h-[48px] flex items-center justify-center bg-[#C1BBEB] rounded-full"
      >
        <i class="bx bxs-user-detail text-[24px] text-[#4D44B5]"></i>
      </div>

      <div class="">
        <h6 class="text-[14px] leading-[21px] font-semibold text-[#303972]">
          {{ author }}
        </h6>
        <h6 class="text-[14px] leading-[21px] text-[#A098AE]">
          Class {{ message.slice(0, 18) + "..." }}
        </h6>
      </div>
    </div>

    <span class="text-[14px] leading-[21px] text-[#A098AE]">{{
      formatDate(createdAt)
    }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
