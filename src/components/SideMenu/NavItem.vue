<script setup>
import { defineProps } from "vue";

const props = defineProps(["link", "icon", "title"]);
</script>
<template>
  <RouterLink
    :to="link"
    class="flex items-center pl-[24px] py-[16px] gap-[24px] rounded-l-full"
  >
    <i :class="icon + ' text-[#C1BBEB] text-[40px]'"></i>
    <h5 class="text-[18px] leading-[27px] font-medium text-[#C1BBEB]">
      {{ title }}
    </h5>
  </RouterLink>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  background-color: white;
  i,
  h5 {
    color: #4d44b5;
  }
}
</style>
