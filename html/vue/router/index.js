import Vue from 'vue'
import Router from 'vue-router'
// 引入页面
import Index from '../layouts/index.vue'
import Chat from '../layouts/chatroom/index.vue'
import Memo from '../layouts/memo/index.vue'
import Test from '../layouts/test/untilTest.vue'
// 其他路由页面
import admin from './admin.js'

Vue.use(Router)

const routes = [
  { path:'', component:Index },
  { path:'/chatroom', component:Chat },
  {path:'/memo', component:Memo},
  {path:'/test', component:Test}  
]
routes.push(admin)

const router = new Router({
  routes
})

export default router