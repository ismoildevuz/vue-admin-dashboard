<script setup>
import { defineProps } from "vue";

const props = defineProps(["title"]);
</script>

<template>
  <header>
    <div>
      <h3 class="text-[36px] leading-[54px] font-bold text-[#303972]">
        {{ title }}
      </h3>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
