<script setup>
import { defineProps } from "vue";

const props = defineProps(["title", "amount", "icon", "color"]);
</script>

<template>
  <div class="flex w-[220px] items-center gap-[32px]">
    <div
      :class="`w-[72px] h-[72px] flex items-center justify-center bg-[${color}] rounded-full`"
    >
      <i :class="`${icon} text-[40px] text-white`"></i>
    </div>

    <div>
      <h5 class="text-[18px] leading-[27px] text-[#A098AE]">{{ title }}</h5>
      <h3 class="text-[36px] leading-[54px] font-bold text-[#303972]">
        {{ amount }}
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
