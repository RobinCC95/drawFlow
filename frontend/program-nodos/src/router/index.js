import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GraficarNodos from "../components/GraficarNodos.vue"
import ListarNodos from "../components/nodos/ListarNodos.vue"
const routes = [
  {
    path: '/graficar',
    name: 'graficar',
    component: GraficarNodos
  },
  {
    path: '/listar',
    name: 'listar',
    component: ListarNodos
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
