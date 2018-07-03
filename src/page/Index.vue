
<template>
    <div class="index">
        <viewHeader></viewHeader>
        <router-view></router-view>
    </div>
</template>
<script>
    import header from '../components/header.vue'
    export default {
        name: 'index',
        data() {
            return {
            }
        },
        components: {
            viewHeader:header,
        },

    }
</script>
<style>

</style>