<script setup>
import { ref, reactive, computed } from "vue";
import { useStudentStore } from "../../stores/student/student";
import { useRouter } from "vue-router";

const router = useRouter();
const studentStore = useStudentStore();

const id = router.currentRoute.value.params.id;

const studentInfo = reactive(studentStore.getItem(id));

studentInfo.dateOfBirth = studentInfo.dateOfBirth
  .split("T")[0]
  .split("-")
  .join(".");

const editStudent = () => {
  const data = {
    firstName: studentInfo.firstName,
    lastName: studentInfo.lastName,
    dateOfBirth: new Date(
      studentInfo.dateOfBirth.split(".").join("-")
    ).toJSON(),
    className: studentInfo.className,
    login: studentInfo.login,
    password: studentInfo.password,
    hours: studentInfo.hours,
    email: studentInfo.email,
    groupId: studentInfo.groupId,
    level: studentInfo.level,
    addedAt: studentInfo.addedAt,
    image: studentInfo.image,
  };

  studentStore.updateItem(id, data);
  router.push({ name: "student" });
};
</script>
<template>
  <div class="">
    <div class="flex items-center justify-between">
      <Header :title="`O'quvchi ma'lumotlarini tahrirlash`" />
      <Menu />
    </div>

    <form @submit.prevent="editStudent">
      <div class="bg-white rounded-[20px] mt-[50px]">
        <div class="bg-[#4D44B5] px-[40px] py-[12px] rounded-t-[20px]">
          <div>
            <h3 class="text-[24px] leading-[36px] font-bold text-white">
              O'quvchi ma'lumotlari
            </h3>
          </div>
        </div>

        <div class="p-[40px]">
          <div class="flex gap-[24px]">
            <div class="">
              <label
                for="image"
                class="text-[18px] leading-[27px] font-semibold text-[#303972] mb-[16px] block"
                >Rasm *</label
              >
              <div
                class="w-[175px] h-[175px] flex items-center justify-center border border-dashed border-[#C1BBEB] rounded-[5px]"
              >
                <h6
                  class="text-[14px] leading-[21px] text-[#A098AE] text-center"
                >
                  Drag and drop or click here to select file
                </h6>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-[24px]">
              <div class="w-[575px]">
                <label
                  for="firstName"
                  class="text-[18px] leading-[27px] font-semibold text-[#303972] mb-[16px] block"
                  >Ism *</label
                >
                <input
                  v-model="studentInfo.firstName"
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Ismni kiriting"
                  class="text-[14px] leading-[21px] text-[#A098AE] border border-[#C1BBEB] rounded-[5px] p-[15px] w-full focus:outline-none focus:border-[#a098ae]"
                  required
                />
              </div>

              <div class="w-[575px]">
                <label
                  for="lastName"
                  class="text-[18px] leading-[27px] font-semibold text-[#303972] mb-[16px] block"
                  >Familiya *</label
                >
                <input
                  v-model="studentInfo.lastName"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Familiyani kiriting"
                  class="text-[14px] leading-[21px] text-[#A098AE] border border-[#C1BBEB] rounded-[5px] p-[15px] w-full focus:outline-none focus:border-[#a098ae]"
                  required
                />
              </div>

              <div class="w-[575px]">
                <label
                  for="dateOfBirth"
                  class="text-[18px] leading-[27px] font-semibold text-[#303972] mb-[16px] block"
                  >Tug'ilgan sana *</label
                >
                <input
                  v-model="studentInfo.dateOfBirth"
                  type="text"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  placeholder="Tug'ilgan sanani kiriting: 12.31.2000"
                  class="text-[14px] leading-[21px] text-[#A098AE] border border-[#C1BBEB] rounded-[5px] p-[15px] w-full focus:outline-none focus:border-[#a098ae]"
                  required
                />
              </div>

              <div class="w-[575px]">
                <label
                  for="groupId"
                  class="text-[18px] leading-[27px] font-semibold text-[#303972] mb-[16px] block"
                  >Tug'ilgan sana *</label
                >
                <select
                  v-model="studentInfo.className"
                  id="groupId"
                  name="groupId"
                  class="text-[14px] leading-[21px] text-[#A098AE] border border-[#C1BBEB] rounded-[5px] p-[15px] w-full focus:outline-none focus:border-[#a098ae]"
                  required
                >
                  <option selected="" disabled>Guruhni tanlang</option>
                  <option value="VII A">VII A</option>
                  <option value="VI B">VI B</option>
                  <option value="VIII B">VIII B</option>
                  <option value="IX A">IX A</option>
                </select>
              </div>

              <div class="w-[575px]">
                <label
                  for="login"
                  class="text-[18px] leading-[27px] font-semibold text-[#303972] mb-[16px] block"
                  >Login *</label
                >
                <input
                  v-model="studentInfo.login"
                  type="text"
                  name="login"
                  id="login"
                  placeholder="Loginni kiriting"
                  class="text-[14px] leading-[21px] text-[#A098AE] border border-[#C1BBEB] rounded-[5px] p-[15px] w-full focus:outline-none focus:border-[#a098ae]"
                  required
                />
              </div>

              <div class="w-[575px]">
                <label
                  for="password"
                  class="text-[18px] leading-[27px] font-semibold text-[#303972] mb-[16px] block"
                  >Parol *</label
                >
                <input
                  v-model="studentInfo.password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Parolni kiriting"
                  class="text-[14px] leading-[21px] text-[#A098AE] border border-[#C1BBEB] rounded-[5px] p-[15px] w-full focus:outline-none focus:border-[#a098ae]"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-end p-[40px]">
          <button
            type="submit"
            class="addButton w-[130px] h-[60px] flex items-center justify-center bg-[#4D44B5] rounded-full hover:bg-white hover:border-2 hover:border-[#4D44B5] hover:cursor-pointer select-none"
          >
            <h5 class="text-[18px] leading-[27px] text-white">SAQLASH</h5>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.addButton:hover {
  h5 {
    color: #4d44b5;
  }
}
</style>
