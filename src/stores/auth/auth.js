import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useAuthStore = defineStore("authStore", () => {
  const state = reactive({
    id: 1,
    fullName: "Ochilov M.",
    role: "Admin",
  });

  const setId = (id) => {
    state.id = id;
  };

  const setFullName = (fullName) => {
    state.fullName = fullName;
  };

  const setRole = (role) => {
    state.role = role;
  };

  const getId = computed(() => state.id);

  const getFullName = computed(() => state.fullName);

  const getRole = computed(() => state.role);

  return { setId, setFullName, setRole, getId, getFullName, getRole };
});
