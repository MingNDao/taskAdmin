<template>
  <div class="node">
    <item :node = node></item>
  </div>
</template>
<script>
import item from './item.vue'
export default {
  data () {
    return {
      lists: 'a'
    }
  },
  props:[
    'node'
  ],
  components:{
    item
  }
}
</script>
<style>
  .node{padding:8px 15px;font-size:16px;color: inherit;}
</style>