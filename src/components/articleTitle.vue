<template>
    <div class="side">
        <ul class="title-container">
            <li class="title-main" v-for="title in titleList" @click='handleClick(title.id,title.title)'>
                <span>{{title.title}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    import store from '../vuex/store.js' 
    import axios from 'axios'

    export default {
        name: 'side',
        data() {
            return {
                titleList:store.state.articleTitle,
                headerTitle:store.state.headerTitle
            }
        },
        mounted() {
            //this.reverse_title();
        },
        methods: {
            //reverse_title(){
            //     let titleList=store.state.articleTitle;
            //        titleList=titleList.slice();//数组需要深度copy，不然reverse()会改变原数组
            //    this.titleList=titleList.reverse();
            //},
            handleClick(id,title){
                this.$store.dispatch('change_headerTitle', '文章内容'); 
                this.$router.push({
                    path:'article',
                    query: { id:  id}
                });
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
    .side {
        margin-top: 70px;
    }
    .title-container {
        flex-direction: column;
        background-color: #f4f4f4;
        width: 100%;
    }
    .title-main {
        width: 100%;
        height: 100px;
        justify-content: space-between;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 0 1px 0 #cecece;
        padding-left: 15px;
        padding-right: 15px;
    }
    .title-main img {
        width: 70px;
        height: 70px;
        flex-basis: 70px;
        flex-shrink: 0;
    }
    .title-main span {
        margin-left: 15px;
    }
</style>