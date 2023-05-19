<script setup>
import { defineProps } from "vue";

const props = defineProps(["paginationInfo", "color"]);
</script>

<template>
  <div class="flex items-center">
    <h6 :class="`text-[14px] leading-[21px] text-[${color}]`">
      {{
        `${paginationInfo.totalCount} dan ${paginationInfo.start}-${paginationInfo.end}`
      }}
    </h6>
  </div>
</template>

<style lang="scss" scoped></style>
