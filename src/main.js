import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../src/components/LandingPage.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/my-work',
    name: 'MyWorkInside',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../src/components/MyWorkInside.vue')
  }
]
const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
