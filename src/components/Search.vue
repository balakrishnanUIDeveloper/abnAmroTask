<template>
  <form class="d-flex" @submit="submitSearch">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      v-model="searchText"
    />
    <button class="btn btn-outline-success" type="submit" v-if="btn">
      Search
    </button>
  </form>
</template>

<script>
export default {
  name: "Search",
  props: {
    btn: Boolean,
  },
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    submitSearch(e) {
      e.preventDefault();
      if (this.searchText) {
        console.log("check submt", this.searchText);
        this.$emit('submit-search', this.searchText);
      }
      this.searchText='';
    },
  },
};
</script>