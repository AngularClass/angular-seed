<template>
  <div class="query-editor">
    <codemirror
      ref="editor" 
      :value="code"
      :options="options"/>
  </div>
</template>
<script>
import vueTypes from 'vue-types'
import options from '@/utils/defaultOptions'
import onHasCompletion from '@/utils/hasCompletion'
import merge from 'lodash.merge'
const AUTO_COMPLETE_AFTER_KEY = /^[a-zA-Z0-9_@(]$/

export default {
  props: {
    editorOptions: vueTypes
      .shape({
        lineNumbers: vueTypes.bool.def(true),
        theme: vueTypes.string.def('graphql'),
        readOnly: vueTypes.bool.def(false)
      })
      .def({}),
    liteMode: vueTypes.bool.def(false),
    schema: vueTypes.object.isRequired
  },
  computed: {
    options() {
      const base = options(this.schema)

      if (this.liteMode) {
        return merge(base, this.editorOptions, { lineNumbers: false })
      }

      return merge(base, options, this.editorOptions)
    }
  },
  mounted() {
    if (this.autoFocus) {
      this.editor.focus()
    }

    this.editor.on('keyup', this.onKeyup.bind(this))

    if (!this.liteMode) {
      this.editor.on('hasCompletion', this.onHasCompletition.bind(this))
    }
  },
  methods: {
    onKeyup() {
      if (AUTO_COMPLETE_AFTER_KEY.test(event.key)) {
        this.editor.execCommand('autocomplete')
      }
    },
    onHasCompletition(cm, data) {
      onHasCompletion(cm, data)
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
