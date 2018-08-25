<template>
  <div
    ref="_node"
    class="result-viewer"/>
</template>
<script>
import vueTypes from 'vue-types'
import { createEditor } from '@/utils/editor'
import { RESULT_VIEWER } from '@/utils/constants'

export default {
  props: {
    editorOptions: vueTypes
      .shape({
        lineNumbers: vueTypes.bool.def(true),
        theme: vueTypes.string.def('graphql')
      })
      .def({}),
    liteMode: vueTypes.bool.def(false)
  },

  data() {
    return {
      viewer: null
    }
  },

  watch: {
    value(newVal) {
      this.viewer.setValue(newVal || '')
    }
  },

  mounted() {
    this.viewer = createEditor({
      editorType: RESULT_VIEWER,
      liteMode: this.liteMode,
      node: this.$refs._node,
      codeMirrorOptions: { ...this.editorOptions, value: this.value || '' }
    })
  },

  beforeDestroy() {
    this.viewer = null
  }
}
</script>
<style lang="stylus" scoped>
  .query-editor
    height 100%
    width 100%
</style>
