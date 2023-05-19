import { defineStore } from "pinia";
import { computed, ref, reactive } from "vue";

export const useTeacherStore = defineStore("teacherStore", () => {
  const state = reactive({
    list: [
      {
        id: "682795134",
        firstName: "Sophia",
        lastName: "Anderson",
        className: "VII A",
        hours: 10,
        login: "user",
        password: "1234",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel repudiandae accusamus illo architecto repellendus.",
        image: "ABV8520.jpg",
        dateOfBirth: new Date().toJSON(),
        subjectName: "Mathematics",
      },
      {
        id: "397148652",
        firstName: "Liam",
        lastName: "Harrison",
        className: "IX B",
        hours: 15,
        login: "user",
        password: "1234",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel repudiandae accusamus illo architecto repellendus.",
        image: "ABV8520.jpg",
        dateOfBirth: new Date().toJSON(),
        subjectName: "Mathematics",
      },
      {
        id: "956731284",
        firstName: "Olivia",
        lastName: "Richardson",
        className: "VIII C",
        hours: 13,
        login: "user",
        password: "1234",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel repudiandae accusamus illo architecto repellendus.",
        image: "ABV8520.jpg",
        dateOfBirth: new Date().toJSON(),
        subjectName: "Mathematics",
      },
      {
        id: "843925671",
        firstName: "Noah",
        lastName: "Thompson",
        className: "X A",
        hours: 17,
        login: "user",
        password: "1234",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel repudiandae accusamus illo architecto repellendus.",
        image: "ABV8520.jpg",
        dateOfBirth: new Date().toJSON(),
        subjectName: "Mathematics",
      },
      {
        id: "521476938",
        firstName: "Emma",
        lastName: "Jefferson",
        className: "VI B",
        hours: 23,
        login: "user",
        password: "1234",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel repudiandae accusamus illo architecto repellendus.",
        image: "ABV8520.jpg",
        dateOfBirth: new Date().toJSON(),
        subjectName: "Mathematics",
      },
      {
        id: "368914527",
        firstName: "Jackson",
        lastName: "Henderson",
        className: "IX B",
        hours: 12,
        login: "user",
        password: "1234",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel repudiandae accusamus illo architecto repellendus.",
        image: "ABV8520.jpg",
        dateOfBirth: new Date().toJSON(),
        subjectName: "Mathematics",
      },
      {
        id: "729561483",
        firstName: "Ava",
        lastName: "Garrison",
        className: "VIII B",
        hours: 11,
        login: "user",
        password: "1234",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel repudiandae accusamus illo architecto repellendus.",
        image: "ABV8520.jpg",
        dateOfBirth: new Date().toJSON(),
        subjectName: "Mathematics",
      },
      {
        id: "837124596",
        firstName: "Aiden",
        lastName: "Williamson",
        className: "VII C",
        hours: 19,
        login: "user",
        password: "1234",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel repudiandae accusamus illo architecto repellendus.",
        image: "ABV8520.jpg",
        dateOfBirth: new Date().toJSON(),
        subjectName: "Mathematics",
      },
      {
        id: "146928753",
        firstName: "Isabella",
        lastName: "Robinson",
        className: "IX C",
        hours: 15,
        login: "user",
        password: "1234",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel repudiandae accusamus illo architecto repellendus.",
        image: "ABV8520.jpg",
        dateOfBirth: new Date().toJSON(),
        subjectName: "Mathematics",
      },
      {
        id: "253819476",
        firstName: "Lucas",
        lastName: "Harrison",
        className: "VII A",
        hours: 14,
        login: "user",
        password: "1234",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel repudiandae accusamus illo architecto repellendus.",
        image: "ABV8520.jpg",
        dateOfBirth: new Date().toJSON(),
        subjectName: "Mathematics",
      },
      {
        id: "791468325",
        firstName: "Mia",
        lastName: "Alexander",
        className: "VIII C",
        hours: 18,
        login: "user",
        password: "1234",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel repudiandae accusamus illo architecto repellendus.",
        image: "ABV8520.jpg",
        dateOfBirth: new Date().toJSON(),
        subjectName: "Mathematics",
      },
      {
        id: "682947153",
        firstName: "Caden",
        lastName: "Harrington",
        className: "VI B",
        hours: 16,
        login: "user",
        password: "1234",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel repudiandae accusamus illo architecto repellendus.",
        image: "ABV8520.jpg",
        dateOfBirth: new Date().toJSON(),
        subjectName: "Mathematics",
      },
      {
        id: "517964328",
        firstName: "Aria",
        lastName: "Hawkins",
        className: "X A",
        hours: 20,
        login: "user",
        password: "1234",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel repudiandae accusamus illo architecto repellendus.",
        image: "ABV8520.jpg",
        dateOfBirth: new Date().toJSON(),
        subjectName: "Mathematics",
      },
      {
        id: "394518762",
        firstName: "Grayson",
        lastName: "Harrison",
        className: "VII C",
        hours: 21,
        login: "user",
        password: "1234",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel repudiandae accusamus illo architecto repellendus.",
        image: "ABV8520.jpg",
        dateOfBirth: new Date().toJSON(),
        subjectName: "Mathematics",
      },
      {
        id: "468135297",
        firstName: "Riley",
        lastName: "Harrington",
        className: "VIII A",
        hours: 22,
        login: "user",
        password: "1234",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel repudiandae accusamus illo architecto repellendus.",
        image: "ABV8520.jpg",
        dateOfBirth: new Date().toJSON(),
        subjectName: "Mathematics",
      },
      {
        id: "725843916",
        firstName: "Mason",
        lastName: "Harriman",
        className: "X B",
        hours: 11,
        login: "user",
        password: "1234",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel repudiandae accusamus illo architecto repellendus.",
        image: "ABV8520.jpg",
        dateOfBirth: new Date().toJSON(),
        subjectName: "Mathematics",
      },
    ],
  });

  const addItem = (item) => {
    state.list.unshift(item);
  };

  const getItem = (id) => {
    return state.list.find((el) => el.id == id);
  };

  const updateItem = (id, data) => {
    state.list.forEach((el, index) => {
      if (el.id == id) {
        console.log(el);
        el = data;
        return;
      }
    });
  };

  const removeItem = (id) => {
    state.list.forEach((el, index) => {
      if (el.id == id) {
        state.list.splice(index, 1);
        return;
      }
    });
  };

  const setList = (list) => {
    state.list = list;
  };
  const getList = computed(() => state.list);

  const currentPage = ref(1);
  const perPage = 12;

  const totalCount = ref(computed(() => state.list.length));
  const totalPages = ref(computed(() => Math.ceil(totalCount.value / perPage)));

  const start = ref(computed(() => (currentPage.value - 1) * perPage + 1));
  const end = ref(
    computed(() => Math.min(start.value + perPage - 1, totalCount.value))
  );

  const paginatedList = computed(() => {
    return state.list.slice(start.value - 1, end.value);
  });

  const paginationInfo = reactive({
    totalCount: computed(() => totalCount.value),
    start: computed(() => start.value),
    end: computed(() => end.value),
  });

  const pageNumbers = computed(() => {
    const count = 3;
    let start = Math.max(currentPage.value - 1, 1);
    let end = start + count - 1;

    if (end > totalPages.value) {
      end = totalPages.value;
      start = Math.max(end - count + 1, 1);
    }
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  });

  const activePage = ref(computed(() => currentPage.value));

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };

  const previousPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };

  const setCurrentPage = (page) => {
    currentPage.value = page;
  };

  return {
    paginatedList,
    paginationInfo,
    pageNumbers,
    activePage,
    previousPage,
    nextPage,
    setCurrentPage,
    setList,
    getList,
    getItem,
    addItem,
    updateItem,
    removeItem,
  };
});
