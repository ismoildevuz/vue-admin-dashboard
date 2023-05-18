<script setup></script>

<template lang="">
  <div>
    <section class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="mb-4 text-9xl font-extrabold text-blue-500">404</h1>
        <p class="mb-4 text-4xl font-bold text-gray-900">
          Something's missing.
        </p>
        <p class="mb-4 text-lg font-light text-gray-400">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <router-link
          to="/"
          class="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >Back to Homepage</router-link
        >
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
