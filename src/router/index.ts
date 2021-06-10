import { createRouter, createWebHashHistory , RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path:"/",
    redirect: "/login",
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login/index.vue')
  },
  {
    path: '/homePage',
    name: 'HomePage',
    component: () => import(/* webpackChunkName: "HomePage" */ '@/views/HomePage/index.vue'),
    redirect: "/homePage/advertisement",
    children: [
      {
        path: 'advertisement',
        name: 'Advertisement',
        component: () => import(/* webpackChunkName: "Login" */ '@/views/HomePage/Advertisement.vue')
      },
      {
        path: 'shieldingPage',
        name: 'ShieldingPage',
        component: () => import(/* webpackChunkName: "Login" */ '@/views/HomePage/shieldingPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory (process.env.BASE_URL),
  routes
})
//登录权限
router.beforeEach((to, form, next) => {
  if (to.fullPath !== "/login") {
    if (sessionStorage.getItem("user")) {//判断是否有标题
      next()
    } else {
      next("/login")
    }
  }else{
    next()
  }
})

export default router
