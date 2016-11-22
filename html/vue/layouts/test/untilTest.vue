<template>
  <div>
    <div>随机数测试:{{random}}</div>
  </div>
</template>
<script>
import * as a from '../../utils/common.js'
export default {
  data () {
    return {
      random: null
    }
  },
  created () {
    console.log(a)
    this.random = a.getRandom()
  }
}
</script>