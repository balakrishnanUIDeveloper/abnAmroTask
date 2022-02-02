<template>
    <form class="d-flex" @submit="submitSearch()">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
</template>

<script>
export default {
    name: "Search",
    props:{
        btn: Boolean
    },
    methods:{
        submitSearch() {
            console.log('check submt');
        }
    }
}
</script>