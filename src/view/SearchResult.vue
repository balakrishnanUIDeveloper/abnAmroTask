<template>
  <ErrorView :error="errorMessage" v-if="showError" />
  <ListView :shows="shows" @show-details="showDetail" v-if="!showError && shows.length > 0" />
</template>
<script>
import ListView from "../components/ListView.vue";
import ErrorView from "../components/ErrorView.vue";
import * as CONST from '../App.constants.js'
export default {
  name: "SearchResult",
  components: {
    ListView,
    ErrorView,
  },
  methods: {
    showDetail(id) {
      console.log("check id", id);
      this.$router.push({ name: "show", params: { id: id } });
    },
    searchTvShow(id) {
      fetch(`${CONST.URL.SEARCH}?q=${id}`)
        .then(async (response) => {
          this.showError = false;
          const data = await response.json();
          console.log("response", data);
          // check for error response //but these are not available in our API
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }
          if (data && data.length > 0) {
            this.shows = data.map((i) => i.show);
            
          }
        })
        .catch((error) => {
          this.errorMessage = error;
          this.showError = true;
          console.error("There was an error!", error);
        });
    },
  },
  created() {
    console.log("check route search result", this.$route.params.searchText);
    this.searchTvShow(this.$route.params.searchText);
  },
  data() {
    return {
      shows: [],
      errorMessage: "",
      showError: false,
    };
  },
};
</script>