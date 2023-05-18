import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useMessageStore = defineStore("messageStore", () => {
  const state = reactive({
    list: [
      {
        id: 1,
        author: "Salimjon Sheraliyev",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci ut quas quidem libero corrupti.",
        createdAt: new Date().toJSON(),
      },
      {
        id: 2,
        author: "Salimjon Sheraliyev",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci ut quas quidem libero corrupti.",
        createdAt: new Date().toJSON(),
      },
      {
        id: 3,
        author: "Salimjon Sheraliyev",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci ut quas quidem libero corrupti.",
        createdAt: new Date().toJSON(),
      },
      {
        id: 4,
        author: "Salimjon Sheraliyev",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci ut quas quidem libero corrupti.",
        createdAt: new Date().toJSON(),
      },
      {
        id: 6,
        author: "Salimjon Sheraliyev",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci ut quas quidem libero corrupti.",
        createdAt: new Date().toJSON(),
      },
      {
        id: 7,
        author: "Salimjon Sheraliyev",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci ut quas quidem libero corrupti.",
        createdAt: new Date().toJSON(),
      },
      {
        id: 8,
        author: "Salimjon Sheraliyev",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci ut quas quidem libero corrupti.",
        createdAt: new Date().toJSON(),
      },
      {
        id: 9,
        author: "Salimjon Sheraliyev",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci ut quas quidem libero corrupti.",
        createdAt: new Date().toJSON(),
      },
      {
        id: 10,
        author: "Salimjon Sheraliyev",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci ut quas quidem libero corrupti.",
        createdAt: new Date().toJSON(),
      },
      {
        id: 11,
        author: "Salimjon Sheraliyev",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci ut quas quidem libero corrupti.",
        createdAt: new Date().toJSON(),
      },
      {
        id: 12,
        author: "Salimjon Sheraliyev",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci ut quas quidem libero corrupti.",
        createdAt: new Date().toJSON(),
      },
      {
        id: 13,
        author: "Salimjon Sheraliyev",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci ut quas quidem libero corrupti.",
        createdAt: new Date().toJSON(),
      },
      {
        id: 14,
        author: "Salimjon Sheraliyev",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci ut quas quidem libero corrupti.",
        createdAt: new Date().toJSON(),
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
