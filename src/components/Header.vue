<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">{{ title }}</router-link>
      <Search :btn="true" @submit-search="submitSearch" />
    </div>
  </nav>
</template>

<script>
import Search from "./Search.vue";
export default {
  name: "Header",
  props: ["title"],
  components: {
    Search,
  },
  methods: {
    submitSearch(id) {
      console.log(id);
      this.$emit('submit-search', id)
    },
  },
};
</script>