<template>
  <ErrorView :error="errorMessage" v-if="showError" />
  <ListView :shows="shows" @show-details="showDetail" v-if="!showError && shows.length > 0" />
</template>
<script>
import ListView from "../components/ListView.vue";
import ErrorView from "../components/ErrorView.vue";
import * as CONST from "../App.constants.js";
export default {
  name: "Home",
  components: {
    ListView,
    ErrorView,
  },
  methods: {
    showDetail(id) {
      // console.log("check id", id);
      this.$router.push({ name: "show", params: { id: id } });
    },
    fetchTVShows(nextPage = false) {
      this.$store.dispatch("actionA").then((pageNo) => {
        // ... given a state management provision for future use of pagination
        // console.log("dispatch", pageNo);
        this.fetchTvShowWithPage(pageNo, nextPage);
      });
    },
    apiData(page){
      return fetch(`${CONST.URL.SHOW}?page=${page}`)
    },
    fetchTvShowWithPage(page, checkNextPage) {
      let that = this;
        this.apiData(page).then(async (response) => {
          this.showError = false;
          const data = await response.json();
          // console.log("response", data);
          // check for error response //but these are not available in our API
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }
          if (data && data.length > 0) {
            if (checkNextPage) {
              that.shows = [...that.shows, ...data];
            } else {
              that.shows = data;
            }
          }
        })
        .catch((error) => {
          this.errorMessage = error;
          this.showError = true;
          console.error("There was an error!", error);
        });
    },
    getNextTvShows() {
      let that = this;
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          that.fetchTVShows(true);
        }
      };
    },
  },
  created() {
    this.fetchTVShows();
  },
  mounted() {
    this.getNextTvShows();
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