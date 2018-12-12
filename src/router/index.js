import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

//是否登录
const HAS_LOGINED = true
//缓存加载
//const LOAD_MAP = r => require.ensure([],  ()  =>  r(require('components/')), 'routerName')

// router.beforeEach((to, from, next) => {

// });

export default router
