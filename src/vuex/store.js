import Vue from 'vue'
import Vuex from 'vuex'
// 引用
Vue.use(Vuex)
// 创建基本状态
const state = {
  titleList: '',
  articleTitle: '',
  headerTitle: '作者列表',
  arrId: ['JacksonTian', 'imzengyang', 'JZLeung', 'vanishcode', 'chuanzai', 'huanz', 'zhangshiqiu', 'i5ting', 'Hyurl', 'D8Ge', 'spursy', 'wangchaoduo', 'JerrysShan', 'FrankDiao', 'heguangda', 'ITCNZ', 'yuu2lee4'],
}
// 创建改变状态的方法
const mutations = {
  changeTitleList (state, n) {
    if (state.titleList == '') {
      state.titleList = n
    }
  },
  changeArticleTitle (state, n) {
    state.articleTitle = n
  },
  changeHeaderTitle (state, n) {
    Vue.set(state, 'headerTitle', n)
  }
}
// 创建驱动actions可以使得mutations得以启动
const actions = {
  changeHeaderTitle (context, n) {
    context.commit('changeHeaderTitle', n)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
