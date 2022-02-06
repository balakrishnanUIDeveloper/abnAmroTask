<template>
  <div class="container show-detail">
    <div class="row">
      <div class="col">
        <h3 class="card-title text-center">{{ showItem.name }}</h3>
        <h6 class="card-subtitle text-center">{{ showItem.language }}</h6>
        <div class="row">
          <div class="col-lg-5 col-md-5 col-sm-6">
            <div class="white-box text-center">
              <img
                alt="image"
                v-bind:src="showItem?.image?.original || img_thumbnail"
                class="img-responsive img-thumbnail"
              />
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-6 text-left">
            <h6 class="box-title mt-5">
              <strong
                >Genre:
                {{ showItem?.genres && showItem.genres.join("/ ") }}</strong
              >
            </h6>
            <p>
              {{ showItem.summary || desc }}
            </p>
            <h6 class="box-title mt-5 underlined">
              <strong>Show Details</strong>
            </h6>
            <ul class="list-unstyled">
              <li>Premiered: {{ showItem?.premiered }}</li>
              <li>Runtime: {{ showItem?.runtime }}</li>
              <li>Status: {{ showItem?.status }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as CONST from "../App.constants.js";
export default {
  name: "ShowDetail",
  data() {
    return {
      showItem: {},
      showError: false,
      errorMessage: "",
      desc: "No Decription Available",
      img_thumbnail: require("../assets/No_Image_Available.jpg"),
    };
  },
  methods: {
    fetchShowDetail(id) {
      fetch(`${CONST.URL.SHOW}/${id}`)
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
          if (data && Object.keys(data).length > 0) {
            this.showItem = data;
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
    console.log("check route", this.$route.params.id);
    this.fetchShowDetail(this.$route.params.id);
  },
};
</script>
<style>
.show-detail {
  margin-top: 20px;
}
</style>