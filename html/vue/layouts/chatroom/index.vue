<template>
  <div><router-link to="/"><i class="fa fa-windows" aria-hidden="true"></i></router-link>
  <div>
  </div>
    <item :node = root></item>
    <div @click="add">添加节点</div>
  </div>
</template>
<script>
import item from "../../components/item.vue"

export default {
  data () {
    return {
      root:{
        name:"根目录",
        nodes: [
          {
            name: "b",
            nodes:[
              {name: 'b-1'},
              {name: 'b-2'}
            ]
          }
        ]
      }
    }
  },
  methods: {
    add () {
      let n = {name:"新节点"}
      this.root.nodes.push(n)
    }
  },
  components: {
    item
  }
}
</script>