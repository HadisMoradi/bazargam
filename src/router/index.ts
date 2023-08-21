import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import News from '../components/News.vue'
import Blog from '../components/Blog.vue'
import Buy from '../components/Buy.vue'
import Link from '../components/Link.vue'
import Call from '../components/Call.vue'
import Login from '../components/Login.vue'
import Products from '../components/Products.vue'

import Fehrest from '../components/rahnema/Fehrest.vue'
import Mahsol from '../components/rahnema/Mahsol.vue'
import Zargam from '../components/rahnema/Zargam.vue'
import Porsesh from '../components/rahnema/Porsesh.vue'
import Harim from '../components/rahnema/Harim.vue'

import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy
    },
    {
      path: '/link',
      name: 'link',
      component: Link
    },
    {
      path: '/call',
      name: 'call',
      component: Call
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/products',
      name: '/products',
      component: Products
    },
    {
      path: '/fehrest',
      name: '/fehrest',
      component: Fehrest
    },
    {
      path: '/mahsol',
      name: '/mahsol',
      component: Mahsol
    },
    {
      path: '/harim',
      name: '/harim',
      component: Harim
    },
    {
      path: '/zargam',
      name: '/zargam',
      component: Zargam
    },
    {
      path: '/porsesh',
      name: '/porsesh',
      component: Porsesh
    },
    //not found
    {
      path:'/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
