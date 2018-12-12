export default [
  {
    path: '/',
    name:'index',
    component: () => import('views/index.vue')
  },
  // {
  //   path: '/index',
  //   name:'index',
  //   component: () => import('views/index.vue'),
  //   meta: { keepAlive: true }
  // },
  {
    path: '/odor',
    name:'odor',
    component: () => import('views/odor-warning.vue')
  },
  {
    path: '/moban',
    name:'moban',
    component: () => import('views/moban.vue')
  },
  {
    path: '/render',
    name: 'render-page',
    component:() => import('views/render-page.vue')
  },
  {
    path:'/errorinfo',
    component:() => import('views/404-error.vue')
  }
]
