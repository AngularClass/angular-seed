export const liteModeOptions = {
  lineNumbers: false,
  info: {},
  jump: {},
  gutters: []
}

export const options = schema => ({
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
    schema
  },
  hintOptions: {
    schema,
    closeOnUnfocus: false,
    completeSingle: false
  },
  info: {
    schema
    // renderDescription: text => md.render(text),
    // onClick: reference => this.props.onClickReference(reference),
  },
  jump: {
    schema
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
})
