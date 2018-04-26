import Vue from 'vue'
import Vuex from 'vuex'
// 引用
Vue.use(Vuex)
// 创建基本状态
const state = {
  titleList:'',
  articleTitle:'',
  headerTitle: '作者列表',
  arr_id:['JacksonTian','imzengyang','JZLeung','vanishcode','chuanzai','huanz','zhangshiqiu','i5ting','Hyurl','D8Ge','spursy','wangchaoduo','JerrysShan','FrankDiao','heguangda','ITCNZ','yuu2lee4'],
}
// 创建改变状态的方法
const mutations = {
    change_titleList (state, n) {
      if(state.titleList==''){
        state.titleList = n        
      }
    },
    change_articleTitle (state, n) {
        state.articleTitle = n
    },
    change_headerTitle (state, n) {
      Vue.set(state, 'headerTitle', n)
    }
}
// 创建驱动actions可以使得mutations得以启动
const actions = {
  change_headerTitle (context, n) {
    context.commit('change_headerTitle', n)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})