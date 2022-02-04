<template>
  <ErrorView :error="notFoundMessage" />
</template>
<script>
import ErrorView from '../components/ErrorView.vue'
export default {
  name: "NotFound",
  components:{
      ErrorView
  },
  data() {
    return {
      notFoundMessage: "404 page not Found",
    };
  },
};
</script>