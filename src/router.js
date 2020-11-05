import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Console from './views/Console.vue'
import Users from './views/Users.vue'
import Articles from './views/Articles.vue'
import Login from './views/Login.vue'

import Panel from "./components/ef/panel.vue"
import ab from "./components/ef/AB.vue"
import note from "./components/ef/note.vue"
import anniu from "./components/ef/anniu.vue"
Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/anniu',
      component: anniu
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/note',
      component: note
    },
    {
      path: '/ab',
      component: ab
    },
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/console',
          name: 'console',
          component: Console
        },
        {
          path: '/users',
          name: 'users',
          component: Users
        },
        {
          path: '/articles',
          name: 'articles',
          component: Articles
        },
       
      ]
    },   {
      path: '/Panel',
      name: 'Panel',
      component: Panel
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
