<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div class="w-full p-[50px]">
    <div v-if="router.currentRoute.value.name === 'student'">
      <div class="flex items-center justify-between">
        <Header :title="`O'quvchilar`" />
        <Menu />
      </div>

      <div class="flex items-center justify-between mt-[40px] mb-[40px]">
        <SearchBox />
        <RouterLink
          to="/student/add"
          class="w-[210px] h-[60px] flex items-center justify-center bg-[#4D44B5] rounded-full hover:bg-[#443C9E] hover:cursor-pointer select-none"
        >
          <i class="bx bx-plus text-[25px] text-white"></i>
        </RouterLink>
      </div>

      <StudentTable />
    </div>

    <RouterView v-if="router.currentRoute.value.name !== 'student'" />
  </div>
</template>
<style lang="scss" scoped></style>
