import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    alias:'/home_page',
    name: 'home',
    component: Home,
    beforeEnter:  (to, from,  next) => {
        if (from.name === 'about') alert('这是从About页来的')
        else alert('这不是从About页来的')
        next()
    }
  },
  {
    path: '/about',
    name:'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
  {
    //传参路由
    path:'/argu/:name',
    name:'argu',
    component: () => import('@/views/argu.vue')
  },
  {
    //嵌套路由
    path:'/parent',
    name:'parent',
    component: () => import('@/views/parent.vue'),
    children:[
      {
         path: 'child',
         component: () => import('@/views/child.vue')
      }
    ],
    //命名路由-name
  },
  {
    //命名视图
    path:'/named_view',
    name:'three',
    components:{
      default: () => import('@/views/child.vue'),
      email:() => import('@/views/email.vue'),
      tel:() => import('@/views/tel.vue'),
    } 
  },
  {
    //重定向
    path:'/main',
    // redirect:{
    //    name:'home'
    // }
    redirect: to =>{
      return{
        name:'three' 
      } 
    }
  },
  {
    path:'*',
    component:() => import('@/views/404-error.vue')
  }
]