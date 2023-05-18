<script setup>
import { usePaginationStore } from "../stores/pagination/pagination";

const paginationStore = usePaginationStore();
</script>
<template>
  <div class="bg-white rounded-[20px] py-[32px] mt-[36px]">
    <h4 class="text-[24px] leading-[36px] font-bold text-[#303972] mx-[32px]">
      O'qituvchilar:
    </h4>

    <ul class="mt-[24px] mb-[30px] h-[480px]">
      <li v-for="el in paginationStore.paginatedList" :key="el.id">
        <InfoTableItem
          :id="el.id"
          :firstName="el.firstName"
          :lastName="el.lastName"
          :className="el.className"
          :hours="el.hours"
        />
      </li>
    </ul>

    <div class="flex items-center justify-between px-[32px]">
      <PaginationInfo :paginationInfo="paginationStore.paginationInfo" />
      <PaginationBar
        :pageNumbers="paginationStore.pageNumbers"
        :activePage="paginationStore.activePage"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
