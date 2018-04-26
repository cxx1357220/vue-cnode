import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/Index.vue'
import Detail from '../page/Detail.vue'
import home from '../page/home.vue'
import article from '../page/Article.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Index,
        name: 'Index',
        children: [
          { path: 'detail', component: Detail, name: 'detail' },
          { path: '/', component: home, name: 'home' },
          { path: 'article', component: article, name: 'article' }
        ]
    }]
})
