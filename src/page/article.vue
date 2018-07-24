<template>
    <div class="articleAndReply">
        <div>{{articleTitle}}</div>
        <div v-html="article"></div>
        <div style='background-color:#099999'>回复：</div>
        <div class="bor" v-for="title in replies" :key="title.id">
            <p class='author'>用户：{{title.author.loginname}}</p>
            <span v-html="title.content"></span>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'articleAndReply',
  data() {
    return {
      article: '',
      articleTitle: '',
      replies: ''
    }
  },
  components: {},
  mounted() {
    this.getArticle(this.$route.query.id)
  },
  methods: {
    getArticle(id) {
      axios
        .get('/api/topic/' + id)
        .then(response => {
          console.log(response)
          this.article = response.data.data.content
          this.articleTitle = response.data.data.title
          this.replies = response.data.data.replies
        })
        .catch(error => {
          alert('网络错误')
        })
    }
  }
}
</script>
<style>
.articleAndReply {
  margin-top: 70px;
  padding: 20px;
  word-break: break-all;
}
.articleAndReply img {
  width: 100%;
}
pre {
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-wrap;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
.bor {
  border-bottom: 1px solid #000000;
}
.author {
  border-bottom: 1px solid #c0c0c0;
}
</style>