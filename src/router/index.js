import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   routes
// })

const router = new Router({
  mode: 'history',
  routes
})

const HAS_LOGINED = true

// router.beforeEach((to,  from, next) =>{
//   if  (to.name !== 'login') {
//     if(HAS_LOGINED) next()
//     else  next({  name: 'login'})
//   } else{
//     if  (HAS_LOGINED) next({  name: 'home'})
//     else next()
//   }
// })

// router.beforeResolve((to,  from, next) =>{
//    next();
// })
// 跳转之后执行
// router.afterEach((to,  from)  =>{
//     logining = false
// })

export default router