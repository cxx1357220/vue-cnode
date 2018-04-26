<template>
    <div class="Header">
    <span style='justify-content:left;'>
        <span class="menu" @click='handleClick()'></span>
        <span class="title">{{headerTitle}}</span>
    </span>

    </div>
</template>
<script>
    import store from '../vuex/store.js' 
    export default {
        name: "Header",
        data() {
            return {
                headerTitle:store.state.headerTitle,
            }
        },
        methods: {
            handleClick(){
                this.$store.dispatch('change_headerTitle', '作者列表'); 
                this.$router.push({
                    name:'home'
                });
            },
        },
        computed: {  
            listenheaderTitle() {  
                return this.$store.state.headerTitle;  
            }  
        },  
        watch: {  
            listenheaderTitle: function(a, b) {  
                this.headerTitle=a;  //监听变化
            }  
        }, 
    }
</script>
<style scoped>
    li,
    p,
    span,
    ul {
        padding: 0;
        margin: 0;
        bottom: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang-SC-Regular, STHeiti, Helvetica, Arial, Verdana, "sans-serif", Microsoft YaHei;
        font-weight: 200;
    }
    .Header {
        height: 70px;
        line-height:70px;
        width: 100%;
        background-color: #000000;
        justify-content: flex-start;
        flex-basis: 70px;
        flex-shrink: 0;
        position: fixed;
        top: 0;
        z-index: 2;
    }
    .color{
        background-color: #00a2ea;        
    }
    .Header .menu {
        margin:0 60px;
        height: 16px;
        width: 20px;
        border-color: #fff;
        border-style: solid;
        border-width: 2px 0;
        cursor: pointer;
    }
    .Header .menu:before {
        content: "";
        width: 20px;
        height: 2px;
        background-color: #fff;
    }
    .Header span{
        color: #fff;
    }
    .title{
        white-space: nowrap;
        overflow:-webkit-marquee;
        overflow:marquee;
        marquee-style:scroll;
        marquee-repetition:infinite;
        marquee-direction:left;
        marquee-speed:slow; 
        -webkit-marquee-style:scroll;
        -webkit-marquee-repetition:infinite;
        -webkit-marquee-direction:left;
        -webkit-marquee-speed:slow; 
    }
</style>