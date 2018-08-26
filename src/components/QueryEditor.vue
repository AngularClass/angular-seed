<template>
  <div
    ref="_node"
    class="query-editor"/>
</template>
<script>
import vueTypes from 'vue-types'
import onHasCompletion from '@/utils/hasCompletion'
import { createEditor } from '@/utils/editor'
import { QUERY_EDITOR, AUTO_COMPLETE_AFTER_KEY } from '@/utils/constants'

export default {
  props: {
    editorOptions: vueTypes
      .shape({
        lineNumbers: vueTypes.bool.def(true),
        theme: vueTypes.string.def('graphiql'),
        readOnly: vueTypes.bool.def(false)
      })
      .def({}),
    liteMode: vueTypes.bool.def(false),
    schema: vueTypes.object.isRequired,
    value: vueTypes.string.def('')
  },
  data() {
    return {
      editor: null
    }
  },
  watch: {
    schema: function(newSchema, currentSchema) {
      if (newSchema !== currentSchema) {
        const CodeMirror = require('codemirror')

        this.editor.options.lint.schema = newSchema
        this.editor.options.hintOptions.schema = newSchema
        this.editor.options.info.schema = newSchema
        this.editor.options.jump.schema = newSchema

        CodeMirror.signal(this.editor, 'change', this.editor)
      }
    }
  },
  mounted() {
    this.editor = createEditor({
      editorType: QUERY_EDITOR,
      liteMode: this.liteMode,
      node: this.$refs._node,
      codeMirrorOptions: {
        ...this.editorOptions,
        value: this.value || '',
        extraKeys: {
          'Cmd-Enter': () => {
            this.runQuery()
          },
          'Ctrl-Enter': () => {
            this.runQuery()
          }
        }
      },
      schema: this.schema
    })

    if (this.autoFocus) {
      this.editor.focus()
    }

    this.editor.on('change', this.onEdit)
    this.editor.on('keyup', this.onKeyup.bind(this))
    this.editor.on('hasCompletion', this.onHasCompletion.bind(this))
  },

  beforeDestroy() {
    this.editor.off('change', this.onEdit)
    this.editor.off('keyup', this.onKeyUp)
    this.editor.off('hasCompletion', this.onHasCompletion)
    this.editor = null
  },

  methods: {
    onEdit() {
      this.$emit('change', this.editor.getValue())
    },

    onKeyup() {
      if (AUTO_COMPLETE_AFTER_KEY.test(event.key)) {
        this.editor.execCommand('autocomplete')
      }
    },

    onHasCompletion(cm, data) {
      onHasCompletion(cm, data)
    },

    runQuery() {
      this.$emit('runQuery', this.editor.getValue())
    }
  }
}
</script>
<style lang="stylus" scoped>
  .query-editor
    height 100%
    width 100%
    .CodeMirror
      height 100%
</style>
