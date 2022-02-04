<template>
  <div class="alert alert-danger" role="alert">
    {{error? error : 'Something went wrong, please try again later'}}
  </div>
</template>
<script>
export default {
    name: 'ErrorView',
    props:{
        error: String
    }
}
</script>