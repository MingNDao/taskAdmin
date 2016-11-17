<template>
  <div class="item">
    <div @click = "test">
      {{node.name}}
    </div>
    <item v-for = "item in node.nodes" :node = "item"></item>
  </div>
</template>
<script>
export default {
  name:'item',
  props:[
    'node'
  ],
  methods: {
    test () {
      alert (this.node.name)
    }
  }
}
</script>
<style>
  .item{padding-left:15px;}
</style>