<template>
    <div class="p-3 border bg-light">
        <img class="rounded" v-bind:src="showItem?.image?.medium" />
        <span>{{ showItem.name }}</span>
    </div>
</template>
<script>
export default {
    name: 'ListCard',
    props:{
        showItem: Object
    }
}
</script>