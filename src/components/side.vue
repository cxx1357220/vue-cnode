<template>
    <div class="side">
        <ul class="title-container">
            <li class="title-main" v-for="title in titleList" :key="title.loginname" @click='handleClick(title.recent_topics,title.loginname)'>
                <span>{{title.loginname}}</span>
                <img :src="title.avatar_url" />
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
                titleList: store.state.titleList,
            }
        },
        mounted() {
            this.getAuthorAll()
        },
        methods: {
            handleClick(recentTopics,name){
                this.$store.commit('changeArticleTitle', recentTopics); 
                this.$store.dispatch('changeHeaderTitle', name); 
                this.$router.push({
                    path:'detail',
                });
            },
            getAuthorList(id){
                return new Promise((reject,resolve) => {
                    if(this.titleList==''){
                    axios.get('/api/user/'+id)
                        .then((response) => {
                            reject(response.data.data);
                        })
                        .catch((error) => {
                            resolve(error);
                        });
                    }
                });
            },
            getAuthorAll(){
                return Promise.all(store.state.arrId.map(x=>this.getAuthorList(x))).then((response)=>{
                    this.titleList=response;
                    this.$store.commit('changeTitleList', response);  
                    console.log(this.$store.state.titleList); 
                })
                .catch((error) => {
                    alert(error);
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