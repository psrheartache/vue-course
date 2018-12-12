import vue from 'vue'

//静态改变值做处理

const mutations = {
    SET_APP_NAME (state, params)  {
        state.appName = params
    },
    SET_APP_VERSION (state) {
        vue.set(state, 'appVersion' , 'v2.0')
    },
    SET_JK (state, value) {
        state.jk = value
    }
}

export default mutations
