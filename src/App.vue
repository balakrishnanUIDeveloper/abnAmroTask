<template>
  <Header @submit-search="submitSearch" title="TV SHOWS" />
  <router-view></router-view>
  <Footer footerText="By using this site you agree to and accept our User Agreement, which can be read here." />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  methods: {
    showDetail(id) {
      console.log("check id", id);
    },
    submitSearch(id) {
      console.log("check submit", id);
      this.$router.push({ name: "search", params: { searchText: id } });
    }
  },
  created() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
