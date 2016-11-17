import Vue from 'vue'
import Router from 'vue-router'
// 引入页面
import Index from '../layouts/index.vue'
import Chat from '../layouts/chatroom/index.vue'
import Test from '../layouts/test/index.vue'
import Memo from '../layouts/memo/index.vue'

// 其他路由页面
import admin from './admin.js'

Vue.use(Router)

const routes = [
  { path:'', component:Index },
  { path:'/chatroom', component:Chat },
  { path:'/test', component:Test },
  {path:'/memo', component:Memo}
]
routes.push(admin)

const router = new Router({
  routes
})

export default router