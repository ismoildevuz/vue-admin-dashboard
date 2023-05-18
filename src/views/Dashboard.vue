<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <main class="flex justify-between bg-[#F3F4FF]">
    <SideMenu />
    <div
      class="w-full p-[50px]"
      v-if="router.currentRoute.value.name === 'dashboard'"
    >
      <div class="flex items-center justify-between">
        <Header :title="'Dashboard'" />
        <SearchBox />
      </div>
      <InfoBox />
      <InfoTable />
    </div>
    <RouterView v-if="router.currentRoute.value.name !== 'dashboard'" />
    <RightMenu v-if="router.currentRoute.value.name === 'dashboard'" />
  </main>
</template>
