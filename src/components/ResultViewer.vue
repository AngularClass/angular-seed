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
        theme: vueTypes.string.def('graphiql')
      })
      .def({}),
    liteMode: vueTypes.bool.def(false),
    value: vueTypes.string.def('')
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
    console.log(this.viewer)
  },

  beforeDestroy() {
    this.viewer = null
  }
}
</script>
<style lang="stylus">
  .result-viewer
    height 100%
    width 100%
    .CodeMirror
      height 100%
</style>
