<template>
  <div class="result-window" ref="node => this._node = node"/>
</template>

<script>
import CodeMirror from 'codemirror'
export default {
  name: 'ResultViewer',
  props: {
    value: {
      type: String
    },
    editorTheme: {
      type: String
    },
    ResultsTooltip
  },
  mounted: function () {
    this.$nextTick(function () {
    // Lazily require to ensure requiring GraphiQL outside of a Browser context
    // does not produce an error.
    const CodeMirror = require('codemirror');
    require('codemirror/addon/fold/foldgutter');
    require('codemirror/addon/fold/brace-fold');
    require('codemirror/addon/dialog/dialog');
    require('codemirror/addon/search/search');
    require('codemirror/addon/search/searchcursor');
    require('codemirror/addon/search/jump-to-line');
    require('codemirror/keymap/sublime');
    require('codemirror-graphql/results/mode');

    if (this.props.ResultsTooltip) {
      require('codemirror-graphql/utils/info-addon');
      const tooltipDiv = document.createElement('div');
      CodeMirror.registerHelper(
        'info',
        'graphql-results',
        (token, options, cm, pos) => {
          const Tooltip = this.props.ResultsTooltip;
          ReactDOM.render(<Tooltip pos={pos} />, tooltipDiv);
          return tooltipDiv;
        },
      );
    }

    this.viewer = CodeMirror(this._node, {
      lineWrapping: true,
      value: this.props.value || '',
      readOnly: true,
      theme: this.props.editorTheme || 'graphiql',
      mode: 'graphql-results',
      keyMap: 'sublime',
      foldGutter: {
        minFoldSize: 4,
      },
      gutters: ['CodeMirror-foldgutter'],
      info: Boolean(this.props.ResultsTooltip),
      extraKeys: {
        // Persistent search box in Query Editor
        'Cmd-F': 'findPersistent',
        'Ctrl-F': 'findPersistent',

        // Editor improvements
        'Ctrl-Left': 'goSubwordLeft',
        'Ctrl-Right': 'goSubwordRight',
        'Alt-Left': 'goGroupLeft',
        'Alt-Right': 'goGroupRight',
      },
    });
    })
  },
  updated: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been re-rendered
    })
  },
  beforeMount: function () {
    this.$nextTick(function () {
    })
  },
  beforeDestroy: function () {
    this.$nextTick(function () {
      this.viewer = null
    })
  },
  getCodeMirror: function () {
    return this.viewer
  },
  /**
   * Public API for retrieving the DOM client height for this component.
   */
  getClientHeight: function() {
    return this._node && this._node.clientHeight
  }
}
</script>

<style lang="stylus" scoped>

</style>
