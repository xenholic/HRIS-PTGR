import { createRouter, createWebHistory } from 'vue-router'
import Dasboard from "../../pages/index.vue"
import Login from '../../pages/login.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dasboard
    },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: Register
    // },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // {
    //   path: '/movies',
    //   name: 'movies',
    //   component: Movies
    // },
    // {
    //   path: "/transaction",
    //   name: "Transaction",
    //   component: Transaction,
    // },
    // {
    //   path: "/movies/:id",
    //   name: "Detail",
    //   component: Detail,
    // },
    // {
    //   path: "/payment/:id",
    //   name: "Payment",
    //   component: Payment,
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: NotfoundPage
    // },
  ]
})

router.beforeEach((to, from, next) => {
  if (
    (to.name == "login" || to.name == "register") &&
    localStorage.getItem("access_token")
  )
    next({ name: "home" });
  // else if (to.name == "Detail" && !localStorage.getItem("access_token") && to.name == "Transaction")
  //   next({ name: "login" });
  // else next();
});
export default router