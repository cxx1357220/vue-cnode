<template>
    <div class="home">
        <side></side>
    </div>
</template>
<script>
    import side from '../components/side.vue'

    export default {
        name: 'home',
        data() {
            return {
            }
        },
        components: {
            side,
        }
    }
</script>