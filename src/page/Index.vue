
<template>
    <div class="index">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>
<script>
    import Header from '../components/Header.vue'
    export default {
        name: 'index',
        data() {
            return {
            }
        },
        components: {
            Header,
        },

    }
</script>
<style>

</style>