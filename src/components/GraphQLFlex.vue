<template>
  <div class="container">
    <div class="editors">
      <query-editor
        v-if="schema"
        :schema="schema"
        :lite-mode="true"
      />
    </div>
  </div>
</template>
 
<script>
import { buildClientSchema, introspectionQuery } from 'graphql'
import gqlf from 'graphql-fetch'
import QueryEditor from './QueryEditor'

import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/vue/vue'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/addon/dialog/dialog'
import 'codemirror/addon/dialog/dialog.css'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/comment-fold'
import 'codemirror/addon/fold/indent-fold'
import 'codemirror/addon/fold/xml-fold'
import 'codemirror/addon/comment/comment'
import 'codemirror/addon/search/search'
import 'codemirror/addon/search/searchcursor'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/search/matchesonscrollbar'
import 'codemirror/addon/search/matchesonscrollbar.css'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/selection/selection-pointer'
import 'codemirror/addon/display/placeholder'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/json-lint'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/keymap/vim'
import 'codemirror/keymap/emacs'
import 'codemirror/keymap/sublime'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/mode/overlay'
import 'codemirror-graphql/hint'
import 'codemirror-graphql/lint'
import 'codemirror-graphql/info'
import 'codemirror-graphql/jump'
import 'codemirror-graphql/mode'
import 'codemirror-graphql/variables/lint'
import 'codemirror-graphql/variables/mode'
import 'codemirror/addon/display/autorefresh'
import 'codemirror/addon/search/jump-to-line'

const gqlFetch = gqlf('https://graphql-pokemon.now.sh')

export default {
  components: {
    QueryEditor
  },
  data() {
    return {
      schema: null,
      queryEditorOptions: {}
    }
  },
  async mounted() {
    const introResult = await gqlFetch(introspectionQuery)
    const schema = buildClientSchema(introResult.data)
    this.schema = schema
  }
}
</script> 

<style lang="stylus">
.CodeMirror
  text-align left !important
  height 100%

.vue-codemirror-wrap
  height 100%

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

[v-cloak] {
  display: none
}

.container
  margin: 0 auto
  width: 100vw
  height: 50vh

.editors
  border: #ddd solid 1px
  margin-bottom: 10px
  width: 100%
  height: 100%

.CodeMirror-hints.graphiql
  padding 0px
  .CodeMirror-hint
    border-radius 0px
    padding 5px
    font-size 12px
    &.CodeMirror-hint-active
      background linear-gradient(136.87deg,#6743f3,#4017d6)
      font-weight bold
  .CodeMirror-hint-information
    padding 5px
    background #1be5b2
.CodeMirror-lint-tooltip
  background linear-gradient(136.87deg,#6743f3,#4017d6)
  color white
</style>
