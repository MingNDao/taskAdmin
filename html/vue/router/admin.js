import Index from '../layouts/admin/index.vue'
import Add from '../layouts/admin/taskAdd.vue'
import List from '../layouts/admin/taskList.vue'

export default { 
  path: '/admin',
  component: Index,
  children: [
    {path: '/', component:List},
    {path: 'add', component: Add }
  ]
}