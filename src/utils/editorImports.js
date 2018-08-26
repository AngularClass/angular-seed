export const importBaseAddons = () => {
  require('codemirror/lib/codemirror.css')
}

export const importQueryAddons = liteMode => {
  importBaseAddons()

  if (!liteMode) {
    require('codemirror/addon/fold/foldgutter.css')
    require('codemirror/addon/fold/foldgutter')
  }

  require('codemirror/addon/hint/show-hint.css')
  require('codemirror/addon/dialog/dialog.css')

  require('codemirror/addon/dialog/dialog')
  require('codemirror/addon/hint/show-hint')
  require('codemirror/addon/comment/comment')
  require('codemirror/addon/edit/matchbrackets')
  require('codemirror/addon/edit/closebrackets')
  require('codemirror/addon/fold/brace-fold')
  require('codemirror/addon/search/search')
  require('codemirror/addon/search/searchcursor')
  require('codemirror/addon/search/jump-to-line')
  require('codemirror/addon/dialog/dialog')
  require('codemirror/addon/lint/lint')
  require('codemirror/keymap/sublime')

  require('codemirror-graphql/hint')
  require('codemirror-graphql/lint')
  require('codemirror-graphql/info')
  require('codemirror-graphql/jump')
  require('codemirror-graphql/mode')
}

export const importResultAddons = liteMode => {
  importBaseAddons()

  if (!liteMode) {
    require('codemirror/addon/fold/foldgutter.css')
    require('codemirror/addon/fold/foldgutter')
  }

  require('codemirror/addon/fold/brace-fold')
  require('codemirror/addon/dialog/dialog')
  require('codemirror/addon/search/search')
  require('codemirror/addon/search/searchcursor')
  require('codemirror/addon/search/jump-to-line')
  require('codemirror/keymap/sublime')

  require('codemirror-graphql/results/mode')
}

export const importVariableAddons = liteMode => {
  importBaseAddons()

  if (!liteMode) {
    require('codemirror/addon/fold/foldgutter.css')
    require('codemirror/addon/fold/foldgutter')
  }

  require('codemirror/addon/hint/show-hint')
  require('codemirror/addon/edit/matchbrackets')
  require('codemirror/addon/edit/closebrackets')
  require('codemirror/addon/fold/brace-fold')
  require('codemirror/addon/lint/lint')
  require('codemirror/addon/search/searchcursor')
  require('codemirror/addon/search/jump-to-line')
  require('codemirror/addon/dialog/dialog')
  require('codemirror/keymap/sublime')

  require('codemirror-graphql/variables/hint')
  require('codemirror-graphql/variables/lint')
  require('codemirror-graphql/variables/mode')
}
