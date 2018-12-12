// actions是用来异步触发数据。
import { getAppName } from 'api/app.js'

const actions = {
  updateAppName ({ commit }) {
      getAppName().then(res => {
          const { code, info: { appName } } = res
          commit('SET_APP_NAME', appName)
      }).catch(err => {
          console.log(err)
      })
   }

  // async getAppName ({ commit }) {
  //   try{
  //     const { info: { appName } } = await getAppName()
  //     commit('SET_APP_NAME', appName)
  //   } catch (err){
  //       console.log(err)
  //   }
  // }
}
export default actions
