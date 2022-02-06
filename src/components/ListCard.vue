<template>
  <div class="p-3 border bg-light text-center" :if="showItem">
    <a class="show-card" href="javascript:void(0)" @click="showDetails(showItem.id)">
      <img class="rounded img-fluid" :src="showItem?.image?.medium || require('../assets/No_Image_Thumbnail.jpg')" />
      <span class="show-name">{{ showItem.name }}</span></a
    >
  </div>
</template>
<script>
export default {
  name: "ListCard",
  props: {
    showItem: Object,
  },
  methods: {
    showDetails(id) {
      console.log("item check", id);
      this.$emit("show-details", id);
    },
  },
};
</script>
<style scoped>
.show-name{
    font-size: 12px;
    display: block;
    font-weight: bold;
    margin-top: 5px;
}
.show-card{
    text-decoration: none;
    color:inherit
}
</style>