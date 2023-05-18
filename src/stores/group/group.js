import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useGroupStore = defineStore("groupStore", () => {
  const state = reactive({
    list: [
      {
        id: 1,
        title: "Dasturiy injinering",
        className: "VII A",
      },
      {
        id: 2,
        title: "Dasturiy injinering",
        className: "VII A",
      },
      {
        id: 3,
        title: "Dasturiy injinering",
        className: "VII A",
      },
      {
        id: 4,
        title: "Dasturiy injinering",
        className: "VII B",
      },
      {
        id: 5,
        title: "Dasturiy injinering",
        className: "VII B",
      },
      {
        id: 6,
        title: "Dasturiy injinering",
        className: "VII B",
      },
      {
        id: 7,
        title: "Dasturiy injinering",
        className: "VII A",
      },
      {
        id: 8,
        title: "Dasturiy injinering",
        className: "VII A",
      },
      {
        id: 9,
        title: "Dasturiy injinering",
        className: "VII A",
      },
      {
        id: 10,
        title: "Dasturiy injinering",
        className: "VII B",
      },
      {
        id: 11,
        title: "Dasturiy injinering",
        className: "VII B",
      },
      {
        id: 12,
        title: "Dasturiy injinering",
        className: "VII B",
      },
      {
        id: 13,
        title: "Dasturiy injinering",
        className: "VII A",
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
