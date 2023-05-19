<script setup></script>

<template>
  <input
    type="checkbox"
    class="w-[20px] h-[20px] appearance-none bg-white border-[1px] border-[#D0D5DD] checked:border-[#000AFF] rounded-[6px] cursor-pointer relative focus:outline-0 focus:border-blue-600"
  />
</template>

<style lang="scss" scoped>
input[type="checkbox"]:checked {
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("./src/assets/icons/checkbox.svg");
}
</style>
