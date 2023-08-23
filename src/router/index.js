import Vue from 'vue'
import VueRouter from 'vue-router'
// import Table from '../views/Table.vue'

import d3Routes from './modules/d3.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Table',
    component: () => import('@/views/Table.vue')
  },
  {
    path: '/bar',
    name: 'Bar',
    component: () => import('@/views/Bar1.vue')
  },
  {
    path: '/line',
    name: 'Line',
    component: () => import('@/views/Line1.vue')
  },
  {
    path: '/pie',
    name: 'Pie',
    component: () => import('@/views/Pie1.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('@/views/Form.vue')
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: () => import('@/views/Swiper.vue')
  },
  {
    path: '/tinymce',
    name: 'tinymce',
    component: () => import('@/views/tinymce.vue')
  },
  {
    path: '/es6',
    name: 'es6',
    component: () => import('@/views/es6.vue')
  },
  {
    path: '/aispeech',
    name: 'aispeech',
    component: () =>  import("@/views/aispeech/speech.vue")
  },
  ...d3Routes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
