<template>
    <footer class="footer mt-auto py-3 bg-light text-center">
        <div class="container">
            <span class="text-muted h6">{{footerText}}</span>
        </div>
    </footer>
</template>
<script>
export default {
    name:'Footer',
    props:[
        'footerText'
    ]
}
</script>
<style>
.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>
