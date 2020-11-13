import Vue from 'vue'
import Router from 'vue-router'
// import Index from './views/Index.vue'
// import Console from './views/Console.vue'
// import Users from './views/Users.vue'
// import Articles from './views/Articles.vue'
// import Login from './views/Login.vue'

// import Panel from "./components/ef/panel.vue"
// import ab from "./components/ef/AB.vue"
// import note from "./components/ef/note.vue"
// import anniu from "./components/ef/anniu.vue"
Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/anniu',
      component: ()=>import('@/components/ef/anniu.vue')
    },
    {
      path: '/login',
      component: ()=>import('@/views/Login.vue')
     
    },
    {
      path: '/note',
      component: ()=>import('@/components/ef/note.vue')
    },
    {
      path: '/ab',
      component: ()=>import('@/components/ef/AB.vue')
    },
    {
      path: '/',
      component: ()=>import('@/views/Index.vue'),  
      children: [
        {
          path: '/console',
          name: 'console',
          component: ()=>import('@/views/Console.vue')
        },
        {
          path: '/users',
          name: 'users',
          component: ()=>import('@/views/Users.vue')
        },
        {
          path: '/articles',
          name: 'articles',
          component: ()=>import('@/views/Articles.vue')
        },
       
      ]
    },   {
      path: '/Panel',
      name: 'Panel',
      component: ()=>import('@/components/ef/panel.vue')
    },
    {
      path: '*',
      redirect: { path: '/404' }
    }
  ]
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  const LOGINURL = '/login'
  let url, user

  url = to.path
  user = sessionStorage.getItem('user')

  if (url === LOGINURL) {
    sessionStorage.removeItem('user')
  }

  // 判断是否登录
  if (!user && url !== LOGINURL) {
    next({ path: LOGINURL })
  } else {
    next()
  }
})

export default router
