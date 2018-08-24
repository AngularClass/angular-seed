<template>
  <div class="container">
    <div
      class="cm-container">
      <codemirror
        ref="codemirror" 
        :value="code"
        :options="options"/>
    </div>
  </div>
</template>
 
<script>
import { codemirror } from 'vue-codemirror-lite'
import { buildClientSchema, introspectionQuery } from 'graphql'
import gqlf from 'graphql-fetch'

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
import onHasCompletion from '@/utils/hasCompletion'

const AUTO_COMPLETE_AFTER_KEY = /^[a-zA-Z0-9_@(]$/
const gqlFetch = gqlf('https://graphql-pokemon.now.sh')

export default {
  components: {
    codemirror
  },
  data() {
    return {
      code: '',
      introResult: null,
      options: null
    }
  },
  computed: {
    editor() {
      // get current editor object
      return this.$refs.codemirror && this.$refs.codemirror.editor
    }
  },
  async mounted() {
    const introResult = await gqlFetch(introspectionQuery)
    this.introResult = introResult.data
    const schema = buildClientSchema(this.introResult)
    this.options = {
      lineNumbers: true,
      tabSize: 2,
      mode: 'graphql',
      theme: 'graphiql',
      keyMap: 'sublime',
      autoCloseBrackets: true,
      matchBrackets: true,
      showCursorWhenSelecting: true,
      readOnly: false,
      foldGutter: {
        minFoldSize: 4
      },
      lint: {
        schema: schema
      },
      hintOptions: {
        schema: schema,
        closeOnUnfocus: false,
        completeSingle: false
      },
      info: {
        schema: schema
        // renderDescription: text => md.render(text),
        // onClick: reference => this.props.onClickReference(reference),
      },
      jump: {
        schema: schema
        // onClick: reference => this.props.onClickReference(reference),
      },
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      extraKeys: {
        // 'Cmd-Space': () => this.editor.showHint({ completeSingle: true }),
        // 'Ctrl-Space': () => this.editor.showHint({ completeSingle: true }),
        // 'Alt-Space': () => this.editor.showHint({ completeSingle: true }),
        // 'Shift-Space': () => this.editor.showHint({ completeSingle: true }),

        // 'Cmd-Enter': () => {
        //   if (this.props.onRunQuery) {
        //     this.props.onRunQuery();
        //   }
        // },
        // 'Ctrl-Enter': () => {
        //   if (this.props.onRunQuery) {
        //     this.props.onRunQuery();
        //   }
        // },

        // 'Shift-Ctrl-P': () => {
        //   if (this.props.onPrettifyQuery) {
        //     this.props.onPrettifyQuery();
        //   }
        // },

        // Persistent search box in Query Editor
        'Cmd-F': 'findPersistent',
        'Ctrl-F': 'findPersistent',

        // Editor improvements
        'Ctrl-Left': 'goSubwordLeft',
        'Ctrl-Right': 'goSubwordRight',
        'Alt-Left': 'goGroupLeft',
        'Alt-Right': 'goGroupRight'
      }
    }
    this.editor.focus()
    // this.editor.on('change', this._onEdit)
    this.editor.on('keyup', this._onKeyUp.bind(this))
    this.editor.on('hasCompletion', this._onHasCompletion.bind(this))
  },
  methods: {
    _onKeyUp(cm, event) {
      if (AUTO_COMPLETE_AFTER_KEY.test(event.key)) {
        this.editor.execCommand('autocomplete')
      }
    },
    _onHasCompletion(cm, data) {
      onHasCompletion(cm, data)
    }
  }
}
</script> 

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

[v-cloak] {
  display: none;
}

body {
  padding: 30px;
  font-family: Helvetica, Arial, sans-serif;
}

h1,
h2 {
  font-weight: 300;
}

.CodeMirror {
  text-align: left !important;
  height: 100%;
}
.vue-codemirror-wrap {
  height: 100%;
}

.container {
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
}

.cm-container {
  border: #ddd solid 1px;
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
}

footer {
  margin-top: 20px;
  padding-top: 10px;
  border-top: #dedede solid 1px;
}
</style>
