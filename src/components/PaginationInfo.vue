<script setup>
import { defineProps } from "vue";

const props = defineProps(["paginationInfo"]);
</script>

<template>
  <div class="flex items-center">
    <h6 class="text-[14px] leading-[21px] text-[#303972]">
      {{ `${paginationInfo.totalCount} dan ${paginationInfo.start}-${paginationInfo.end}` }}
    </h6>
  </div>
</template>

<style lang="scss" scoped></style>
