import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import film from '../views/film.vue'
import nowplaying from '../views/nowplaying.vue'
import comingsoon from '../views/comingsoon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // redirect: '/moban',
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/moban',
    name: 'moban',
    component: () => import('../views/moban.vue')
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('../views/user.vue'),
    children: [
      {
        path: 'add',
        name: 'add',
        component: () => import('../views/add.vue'),
      },
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/index.vue'),
      }
    ]
  },

  { path: '/film', redirect: '/nowplaying', component: film },
  { path: '/nowplaying', component: nowplaying },
  { path: '/comingsoon', component: comingsoon },
  { path: '/film/comingsoon', component: comingsoon },
]

const router = new VueRouter({
  routes
})


// router.beforeEach((to, from, next) => {
//   if (to.path == '/login' || to.path == '/moban') {
//     next();
//   } else {
//     alert('请立刻爬去登录');
//     next('/login');
//   }
// })


export default router
