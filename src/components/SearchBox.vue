<script setup>
import { ref } from "vue";

const searching = ref("");
</script>

<template>
  <div
    class="searchBox flex items-center gap-[20px] w-[350px] h-[60px] px-[32px] py-[14px] bg-white rounded-full focus-within:outline focus-within:outline-[1px] focus-within:outline-[#a098ae]"
  >
    <div class="flex items-center">
      <i class="bx bx-search text-[32px] text-[#4D44B5]"></i>
    </div>

    <input
      v-model="searching"
      type="text"
      id="searchInput"
      placeholder="Izlash"
      class="text-[18px] leading-[27px] text-[#A098AE] focus:outline-none"
    />
  </div>
</template>

<style lang="scss" scoped></style>
