<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="card-title text-center">{{ showItem.name }}</h3>
        <h6 class="card-subtitle text-center">{{ showItem.language }}</h6>
        <div class="row">
          <div class="col-lg-5 col-md-5 col-sm-6">
            <div class="white-box text-center">
              <img
                :src="showItem?.image?.original || require('../assets/No_Image_Available.jpg')"
                class="img-responsive img-thumbnail"
              />
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-6 text-left">
            <h4 class="box-title mt-5">
              Genre: {{ showItem.genres.join("/ ") }}
            </h4>
            <p>
              {{ showItem.summary }}
            </p>
            <h3 class="box-title mt-5">Key Highlights</h3>
            <ul class="list-unstyled">
              <li><i class="fa fa-check text-success"></i>Sturdy structure</li>
              <li>
                <i class="fa fa-check text-success"></i>Designed to foster easy
                portability
              </li>
              <li>
                <i class="fa fa-check text-success"></i>Perfect furniture to
                flaunt your wonderful collectibles
              </li>
            </ul>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12">
            <h3 class="box-title mt-5">General Info</h3>
            <div class="table-responsive">
              <table class="table table-striped table-product">
                <tbody>
                  <tr>
                    <td width="390">Brand</td>
                    <td>Stellar</td>
                  </tr>
                  <tr>
                    <td>Delivery Condition</td>
                    <td>Knock Down</td>
                  </tr>
                  <tr>
                    <td>Seat Lock Included</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>Office Chair</td>
                  </tr>
                  <tr>
                    <td>Style</td>
                    <td>Contemporary&amp;Modern</td>
                  </tr>
                  <tr>
                    <td>Wheels Included</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Upholstery Included</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Upholstery Type</td>
                    <td>Cushion</td>
                  </tr>
                  <tr>
                    <td>Head Support</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Suitable For</td>
                    <td>Study&amp;Home Office</td>
                  </tr>
                  <tr>
                    <td>Adjustable Height</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Model Number</td>
                    <td>F01020701-00HT744A06</td>
                  </tr>
                  <tr>
                    <td>Armrest Included</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Care Instructions</td>
                    <td>
                      Handle With Care,Keep In Dry Place,Do Not Apply Any
                      Chemical For Cleaning.
                    </td>
                  </tr>
                  <tr>
                    <td>Finish Type</td>
                    <td>Matte</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as CONST from '../App.constants.js'
export default {
  name: "ShowDetail",
  data() {
    return {
      showItem: {},
      showError: false,
      errorMessage: "",
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