<template>
  <div
    ref="_node"
    class="query-editor"/>
</template>
<script>
import vueTypes from 'vue-types'
import merge from 'lodash.merge'
import { codemirror } from 'vue-codemirror-lite'
import { options, liteModeOptions } from '@/utils/defaultOptions'
import onHasCompletion from '@/utils/hasCompletion'
import { importQueryAddons } from '@/utils/editorImports'

const AUTO_COMPLETE_AFTER_KEY = /^[a-zA-Z0-9_@(]$/

export default {
  components: {
    codemirror
  },
  props: {
    editorOptions: vueTypes
      .shape({
        lineNumbers: vueTypes.bool.def(true),
        theme: vueTypes.string.def('graphql'),
        readOnly: vueTypes.bool.def(false)
      })
      .def({}),
    liteMode: vueTypes.bool.def(false),
    schema: vueTypes.object.isRequired,
    query: vueTypes.string.def('')
  },
  data() {
    return {
      editor: null
    }
  },
  computed: {
    options() {
      const base = options(this.schema)

      if (this.liteMode) {
        return { ...merge(base, this.editorOptions), ...liteModeOptions }
      }

      return merge(base, options, this.editorOptions)
    }
    // editor() {
    //   return this.$refs.editor && this.$refs.editor.editor
    // }
  },
  mounted() {
    const CodeMirror = require('codemirror')
    importQueryAddons()

    this.editor = CodeMirror(this.$refs._node, this.options)

    if (this.autoFocus) {
      this.editor.focus()
    }

    this.editor.on('keyup', this.onKeyup.bind(this))

    this.editor.on('hasCompletion', this.onHasCompletion.bind(this))
    if (!this.liteMode) {
    }
  },
  methods: {
    onKeyup() {
      if (AUTO_COMPLETE_AFTER_KEY.test(event.key)) {
        this.editor.execCommand('autocomplete')
      }
    },
    onHasCompletion(cm, data) {
      onHasCompletion(cm, data)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .query-editor
    height 100%
    width 100%
</style>
