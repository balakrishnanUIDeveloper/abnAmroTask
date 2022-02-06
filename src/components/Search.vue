<template>
  <form class="d-flex" @submit="submitSearch">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      :class="{ 'is-invalid': errors.length > 0 }"
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
      errors: [],
      searchText: "",
    };
  },
  methods: {
    submitSearch(e) {
      this.errors = [];
      e.preventDefault();
      if (!this.searchText) {
        this.errors.push("Search text cannot be empty");
      } else if (!this.validSearch(this.searchText)) {
        this.errors.push("Valid searchText required.");
      }
      if (this.errors.length > 0) {
        return false;
      } else if (this.searchText) {
        console.log("check submt", this.searchText);
        this.$emit("submit-search", this.searchText);
        this.searchText = "";
      }
    },
    validSearch: function (searchText) {
      var re = /^[0-9a-zA-Z\s]*$/;
      return re.test(searchText);
    },
  },
};
</script>