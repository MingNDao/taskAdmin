import Vue from 'vue'
import Router from 'vue-router'
// 引入页面
import Index from '../layouts/index.vue'
// 其他路由页面
import admin from './admin.js'

Vue.use(Router)

const routes = [
  { path:'', component:Index }
]
routes.push(admin)

const router = new Router({
  routes
})

export default router