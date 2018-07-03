import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index.vue'
import detail from '../page/detail.vue'
import home from '../page/home.vue'
import article from '../page/article.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: index,
        name: 'index',
        children: [
          { path: 'detail', component: detail, name: 'detail' },
          { path: '/', component: home, name: 'home' },
          { path: 'article', component: article, name: 'article' }
        ]
    }]
})
