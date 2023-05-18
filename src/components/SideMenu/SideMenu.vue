<script setup>
import { ref } from "vue";
import { navLinks } from "../../constants/navLinks";

const navlinks = ref(navLinks);
</script>

<template>
  <aside class="w-[345px] bg-[#4D44B5] min-h-screen">
    <Logo />
    <ul class="ml-[50px]">
      <li v-for="el in navlinks" :key="el.id">
        <NavItem :link="el.link" :icon="el.icon" :title="el.title" />
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped></style>
