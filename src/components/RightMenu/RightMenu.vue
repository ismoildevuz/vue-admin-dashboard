<script setup>
import { ref } from "vue";
import { useGroupStore } from "../../stores/group/group";
import { useMessageStore } from "../../stores/message/message";

const groupStore = useGroupStore();
const messageStore = useMessageStore();
</script>

<template>
  <aside class="w-[395px] bg-white min-h-screen pl-[30px] pt-[50px] pr-[50px]">
    <Menu />
    <div class="mt-[40px]">
      <div class="flex justify-between">
        <h4 class="text-[24px] leading-[36px] font-bold text-[#303972]">
          Guruhlar
        </h4>

        <div
          class="w-[48px] h-[48px] flex items-center justify-center bg-[#4D44B5] rounded-full"
        >
          <i class="bx bx-plus text-[20px] text-white"></i>
        </div>
      </div>

      <ul class="mt-[50px]">
        <li v-for="el in groupStore.getList.slice(0, 5)" :key="el.id">
          <GroupMenuItem
            :id="el.id"
            :title="el.title"
            :className="el.className"
          />
        </li>
      </ul>

      <div
        class="h-[60px] flex items-center justify-center bg-[#4D44B51A] rounded-full"
      >
        <h5 class="text-[18px] leading-[27px] font-semibold text-[#4D44B5]">
          Barchasi
        </h5>
      </div>
    </div>

    <div class="mt-[65px]">
      <h4 class="text-[24px] leading-[36px] font-bold text-[#303972]">
        Xabarlar
      </h4>

      <ul class="mt-[25px]">
        <li v-for="el in messageStore.getList.slice(0, 4)" :key="el.id">
          <MessageMenuItem
            :id="el.id"
            :author="el.author"
            :message="el.message"
            :createdAt="el.createdAt"
          />
        </li>
      </ul>

      <div
        class="h-[60px] flex items-center justify-center bg-[#4D44B51A] rounded-full mt-[32px]"
      >
        <h5 class="text-[18px] leading-[27px] font-semibold text-[#4D44B5]">
          Barchasi
        </h5>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped></style>
