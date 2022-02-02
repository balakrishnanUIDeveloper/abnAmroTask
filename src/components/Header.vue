<template>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">{{title}}</a>
            <Search />
        </div>
    </nav>
</template>

<script>
import Search from './Search.vue'
export default {
  name: 'Header',
  props: ['title'],
  components:{
      Search
  }
}
</script>