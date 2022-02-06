<template>
  <div class="alert alert-danger" role="alert">
    {{ error ? error : defaultMsg }}
  </div>
</template>
<script>
import * as CONST from "../App.constants.js";
export default {
  name: "ErrorView",
  props: {
    error: String,
  },
  data() {
    return {
      defaultMsg: CONST.ERR_MSG,
    };
  },
};
</script>