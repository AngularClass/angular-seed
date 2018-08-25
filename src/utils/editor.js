import { options, liteModeOptions } from './defaultOptions'
import { importQueryAddons } from './editorImports'
import merge from 'lodash.merge'
import * as names from './constants'

export const createEditor = config => {
  const CodeMirror = require('codemirror')
  const { editorType, liteMode, node, codeMirrorOptions, schema } = config

  if (editorType === names.QUERY_EDITOR) {
    importQueryAddons(liteMode)
  }

  let finalOptions = merge(options(schema), codeMirrorOptions)
  if (liteMode) {
    finalOptions = { ...finalOptions, ...liteModeOptions }
  }

  return CodeMirror(node, finalOptions)
}
