import Index from '../layouts/admin/index.vue'
import Add from '../layouts/admin/taskAdd.vue'

export default { 
  path: '/admin',
  component: Index,
  children: [
    {
      path: 'add',
      component: Add
    }
  ]
}