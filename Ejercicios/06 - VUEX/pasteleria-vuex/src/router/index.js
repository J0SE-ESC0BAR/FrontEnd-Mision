import { createRouter, createWebHashHistory } from 'vue-router'
import PanaderiaView from '../views/PanaderiaView.vue'

const routes = [
  {
    path: '/',
    name: 'pasteleria',
    component: PanaderiaView
  },
  {
    path: '/contacto',
    name: 'contacoto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactoView.vue')
  },
  {
    path: '/nuevo-pedido',
    name: 'nuevo pedido',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NuevoView.vue')
  },
  {
    path: '/panadero',
    name: 'panadero',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PanaderoView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
