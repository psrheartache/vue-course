const state = {
  userName: 'Cyf'
}

const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}

const mutations = {
  SET_USER_NAME (state, params) {
      state.userName = params
  }
}

const actions = {
  updateUserName  ({ commit, state, rootState, dispatch }) {
      console.log(rootState.appName)
      // dispatch('','')
  }
}

export default{
  //命名空间，是内容更密闭；
  // 展开对象,没用可以用VUEX得mapState解析，如果用了还可以用createNamespacedHelpers
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}
