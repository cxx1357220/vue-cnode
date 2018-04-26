# cnode

> A Vue.js project

#### 安装

下载
```bash
git clone https://github.com/cxx1357220/vue-cnode.git
```
安装
```bash
npm install
npm run dev
```

#### 引入vuex和axios
```bash
npm install vuex --save 
npm install axios -S
```

在main.js中引入 
```js
import axios from 'axios'
Vue.prototype.$axios = axios   //这样写会使eslint报错，建议关闭

import Vuex from 'vuex'
Vue.use(Vuex)
```
#### 关闭eslint

找到build文件夹--->webpack.base.conf.js---->module---->rules中与eslint相关的注释掉
```js
  module: {
    rules: [
      // ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
```

#### 改变vuex里的数据，view里并不能监听到

改变vuex里的数据，view里并不能监听到，所以用了watch，
在computed中写一个计算属性listenTitle,返回状态管理中的headerTitle。然后在watch中监听这个计算属性的变化，对Header.vue中的headerTitle重新赋值。

```js
        computed: {  
            listenTitle: {  
                get: function () {
                    return this.$store.state.headerTitle;
                }              
            }  
        },  
        watch: {  
            listenTitle: function(a,b) {  
                this.headerTitle=a;
            }  
        }, 
```

#### 嵌套路由

index.js
```js
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
```
Index.vue
```html
<template>
    <div class="index">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>
```

#### 接口proxyTable

更改config中的index.js里边的proxyTable

```js
    proxyTable: {
      '/api': {
        target: 'https://cnodejs.org', // 接口的域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          '^/api': '/api/v1'  //api
        }
      }
    },
```

#### 在手机预览

更改config中的index.js里边的host，同局域网下手机访问为'1,1,1,1:7777'

```js
    host: '1,1,1,1', // 更改此为你的ip地址
    port: 7777, // 端口，有可能冲突
```

#### 组件传值

原谅我都用了vuex，自从用了vuex，什么bus，props都觉得好难用。


