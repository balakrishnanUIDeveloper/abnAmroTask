<template>
  <div class="container list-view">
    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5
        g-2 g-lg-3">
      <div class="col" :key="item.id" v-for="item in shows">
          <ListCard @show-details="$emit('show-details', item.id)" :showItem="item"/>
      </div>
    </div>
  </div>
</template>
<script>
import ListCard from './ListCard.vue';
export default {
  name: "ListView",
  components:{
      ListCard
  },
  props:{
    shows: Array
  },
  emits: ['show-details'],
};
</script>
<style>
.list-view {
  margin-top: 20px;
  margin-bottom: 70px;
}
</style>