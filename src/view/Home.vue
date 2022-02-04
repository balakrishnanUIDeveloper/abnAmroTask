<template>
  <ErrorView :error="errorMessage" v-if="showError" />
  <ListView :shows="shows" @show-details="showDetail" v-if="!showError" />
</template>
<script>
import ListView from "../components/ListView.vue";
import ErrorView from "../components/ErrorView.vue";
import * as CONST from '../App.constants.js'
export default {
  name: "Home",
  components: {
    ListView,
    ErrorView,
  },
  methods: {
    showDetail(id) {
      console.log("check id", id);
      this.$router.push({ name: 'show', params: { id: id } })
    },
    fetchTVShows() {
      fetch(`${CONST.URL.SHOW}?page=1`)
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
            this.shows = data;
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
    this.fetchTVShows();
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