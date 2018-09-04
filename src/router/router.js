import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
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
    //传参路由
    path:'/argu/:name',
    component: () => import('@/views/argu.vue')
  },
  {
    //嵌套路由
    path:'/parent',
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
  }
]