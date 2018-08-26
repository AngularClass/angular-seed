import { createQueryOptions, createResultOptions } from './defaultOptions'
import { importQueryAddons, importResultAddons } from './editorImports'
import merge from 'lodash.merge'
import * as names from './constants'

export const createEditor = config => {
  const CodeMirror = require('codemirror')
  const { editorType, liteMode, node, codeMirrorOptions, schema } = config

  if (editorType === names.QUERY_EDITOR) {
    importQueryAddons(liteMode)
    const finalOptions = merge(
      createQueryOptions(schema, liteMode),
      codeMirrorOptions
    )

    return CodeMirror(node, finalOptions)
  }

  if (editorType === names.RESULT_VIEWER) {
    importResultAddons(liteMode)
    const finalOptions = merge(createResultOptions(liteMode), codeMirrorOptions)

    return CodeMirror(node, finalOptions)
  }
}
