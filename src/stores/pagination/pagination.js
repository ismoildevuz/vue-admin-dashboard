import { defineStore } from "pinia";
import { computed, ref, reactive } from "vue";

export const usePaginationStore = defineStore("paginationStore", () => {
  const state = reactive({
    list: [
      {
        id: "682795134",
        firstName: "Sophia",
        lastName: "Anderson",
        className: "VII A",
        hours: 10,
      },
      {
        id: "397148652",
        firstName: "Liam",
        lastName: "Harrison",
        className: "IX B",
        hours: 15,
      },
      {
        id: "956731284",
        firstName: "Olivia",
        lastName: "Richardson",
        className: "VIII C",
        hours: 13,
      },
      {
        id: "843925671",
        firstName: "Noah",
        lastName: "Thompson",
        className: "X A",
        hours: 17,
      },
      {
        id: "521476938",
        firstName: "Emma",
        lastName: "Jefferson",
        className: "VI B",
        hours: 23,
      },
      {
        id: "368914527",
        firstName: "Jackson",
        lastName: "Henderson",
        className: "IX B",
        hours: 12,
      },
      {
        id: "729561483",
        firstName: "Ava",
        lastName: "Garrison",
        className: "VIII B",
        hours: 11,
      },
      {
        id: "837124596",
        firstName: "Aiden",
        lastName: "Williamson",
        className: "VII C",
        hours: 19,
      },
      {
        id: "146928753",
        firstName: "Isabella",
        lastName: "Robinson",
        className: "IX C",
        hours: 15,
      },
      {
        id: "253819476",
        firstName: "Lucas",
        lastName: "Harrison",
        className: "VII A",
        hours: 14,
      },
      {
        id: "791468325",
        firstName: "Mia",
        lastName: "Alexander",
        className: "VIII C",
        hours: 18,
      },
      {
        id: "682947153",
        firstName: "Caden",
        lastName: "Harrington",
        className: "VI B",
        hours: 16,
      },
      {
        id: "517964328",
        firstName: "Aria",
        lastName: "Hawkins",
        className: "X A",
        hours: 20,
      },
      {
        id: "394518762",
        firstName: "Grayson",
        lastName: "Harrison",
        className: "VII C",
        hours: 21,
      },
      {
        id: "468135297",
        firstName: "Riley",
        lastName: "Harrington",
        className: "VIII A",
        hours: 22,
      },
      {
        id: "725843916",
        firstName: "Mason",
        lastName: "Harriman",
        className: "X B",
        hours: 11,
      },
      {
        id: "135972468",
        firstName: "Layla",
        lastName: "Hawkins",
        className: "VI A",
        hours: 13,
      },
      {
        id: "689251347",
        firstName: "Caleb",
        lastName: "Harrison",
        className: "IX B",
        hours: 12,
      },
      {
        id: "274659183",
        firstName: "Zoe",
        lastName: "Henderson",
        className: "VIII B",
        hours: 14,
      },
      {
        id: "951628437",
        firstName: "Matthew",
        lastName: "Harrison",
        className: "VII C",
        hours: 16,
      },
      {
        id: "823947165",
        firstName: "Charlotte",
        lastName: "Williamson",
        className: "IX C",
        hours: 15,
      },
      {
        id: "476315829",
        firstName: "Ethan",
        lastName: "Henderson",
        className: "VII A",
        hours: 17,
      },
      {
        id: "582937416",
        firstName: "Lily",
        lastName: "Harrison",
        className: "VIII C",
        hours: 18,
      },
      {
        id: "629481735",
        firstName: "James",
        lastName: "Harrison",
        className: "VI B",
        hours: 19,
      },
      {
        id: "816593274",
        firstName: "Amelia",
        lastName: "Williamson",
        className: "X A",
        hours: 20,
      },
      {
        id: "536714892",
        firstName: "Benjamin",
        lastName: "Robinson",
        className: "VII C",
        hours: 22,
      },
      {
        id: "897352641",
        firstName: "Harper",
        lastName: "Henderson",
        className: "VIII A",
        hours: 21,
      },
      {
        id: "365829471",
        firstName: "Sebastian",
        lastName: "Harrison",
        className: "X B",
        hours: 23,
      },
      {
        id: "948217356",
        firstName: "Evelyn",
        lastName: "Harrison",
        className: "VI A",
        hours: 12,
      },
    ],
  });

  const currentPage = ref(1);
  const perPage = 5;

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
  };
});
