<template>
  <div class="treeview">
    <h1>hello</h1>
  </div>  
</template>
<script>
import VueTypes from 'vue-types'
export default {
  props: {
    leaves: {
      type: VueTypes.arrayOf(
        VueTypes.shape({
          name: String,
          type: VueTypes.oneOf(['mutation', 'query', 'schema']),
          active: Boolean
        }).default([])
      )
    }
  }
}
</script>
<style lang="stylus">
    
</style>
