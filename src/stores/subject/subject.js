import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useSubjectStore = defineStore("subjectStore", () => {
  const state = reactive({
    list: [
      {
        id: 1,
        subjectName: "Matematika",
      },
      {
        id: 2,
        subjectName: "Matematika",
      },
      {
        id: 3,
        subjectName: "Matematika",
      },
      {
        id: 4,
        subjectName: "Matematika",
      },
      {
        id: 5,
        subjectName: "Matematika",
      },
      {
        id: 6,
        subjectName: "Matematika",
      },
      {
        id: 7,
        subjectName: "Matematika",
      },
      {
        id: 8,
        subjectName: "Matematika",
      },
      {
        id: 9,
        subjectName: "Matematika",
      },
      {
        id: 10,
        subjectName: "Matematika",
      },
      {
        id: 11,
        subjectName: "Matematika",
      },
      {
        id: 12,
        subjectName: "Matematika",
      },
      {
        id: 13,
        subjectName: "Matematika",
      },
      {
        id: 14,
        subjectName: "Matematika",
      },
      {
        id: 15,
        subjectName: "Matematika",
      },
      {
        id: 16,
        subjectName: "Matematika",
      },
    ],
  });

  const setList = (list) => {
    state.list = list;
  };

  const addItem = (item) => {
    state.list.push(item);
  };

  const getList = computed(() => state.list);

  return { setList, addItem, getList };
});
