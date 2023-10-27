import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Perfil from '../views/Perfil.vue'
import Crud from '../views/Crud.vue'
import { firebase} from '../firebase'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import(/* webpackChunkName: "about" */ '../views/Perfil.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/crud',
    name: 'crud',
    component: () => import(/* webpackChunkName: "about" */ '../views/Crud.vue'),
    meta: {
      requiresAuth: true
    }

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async(to, from, next) => {
  const requiresAuth=to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !(await firebase.getCurrentUser())){
    next('/')
  }else {
    next()
  }
})

export default router
