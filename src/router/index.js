import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '@/views/Recommend/index.vue'
import Singer from '@/views/Singer/index.vue'
import TopList from '@/views/TopList/index.vue'
import Search from '@/views/Search/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/top-list',
    component: TopList
  },
  {
    path: '/search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
