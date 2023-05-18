<script setup>
import { defineProps } from "vue";
import { usePaginationStore } from "../stores/pagination/pagination";

const props = defineProps(["pageNumbers", "activePage"]);
const paginationStore = usePaginationStore();
</script>

<template>
  <div class="flex items-center justify-between w-[280px]">
    <div
      @click="paginationStore.previousPage"
      class="w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-gray-100 hover:cursor-pointer select-none"
    >
      <i class="bx bxs-left-arrow text-[20px] text-[#A098AE]"></i>
    </div>

    <div class="flex gap-[16px]">
      <div
        v-for="(number, index) in pageNumbers"
        :key="index"
        :class="`w-[50px] h-[50px] flex items-center justify-center bg-white border-2 border-[#A098AE] rounded-full hover:bg-gray-100 hover:cursor-pointer select-none ${
          number == activePage ? 'active-pagination' : ''
        }`"
        @click="paginationStore.setCurrentPage(number)"
      >
        <h6 class="text-[18px] leading-[27px] text-[#A098AE]">
          {{ number }}
        </h6>
      </div>
    </div>

    <div
      @click="paginationStore.nextPage"
      class="w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-gray-100 hover:cursor-pointer select-none"
    >
      <i class="bx bxs-right-arrow text-[20px] text-[#A098AE]"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.active-pagination {
  background-color: #4d44b5;
  border-color: #4d44b5;
  h6 {
    color: white;
  }
}

.active-pagination:hover {
  background-color: #443c9e;
  border-color: #443c9e;
  h6 {
    color: white;
  }
}
</style>
