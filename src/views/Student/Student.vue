<script setup>
import { useStudentStore } from "../../stores/student/student";

const studentStore = useStudentStore();
</script>
<template>
  <div class="w-screen p-[50px]">
    <div class="flex items-center justify-between">
      <Header :title="`O'quvchilar`" />
      <Menu />
    </div>

    <div class="flex items-center justify-between mt-[40px] mb-[80px]">
      <SearchBox />
      <div
        class="w-[210px] h-[60px] flex items-center justify-center bg-[#4D44B5] rounded-full"
      >
        <i class="bx bx-plus text-[25px] text-white"></i>
      </div>

      <div>
        <table>
          <thead>
            <th>I.O.F</th>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>
<style lang="" scoped></style>
