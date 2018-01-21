<template>
  <div class="result-window-container">
    <div class="result-window" ref="node => this._node = node"/>
    <div v-if="toolTip" id="tool-tip-div"></div>
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/dialog/dialog'
import 'codemirror/addon/search/search'
import 'codemirror/addon/search/searchcursor'
import 'codemirror/addon/search/jump-to-line'
import 'codemirror/keymap/sublime'
import 'codemirror-graphql/results/mode'
import 'codemirror-graphql/utils/info-addon'
export default {
  name: 'ResultViewer',
  props: {
    value: {
      type: String
    },
    editorTheme: {
      type: String
    },
    ResultsTooltip: {}
  },
  data: function () {
    return {
      toolTip: false
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      if (this.ResultsTooltip) {
        this.toolTip = true;
        const tooltipDiv = document.getElementById('div');
        CodeMirror.registerHelper('info', 'graphql-results', (token, options, cm, pos) => {
          const Tooltip = this.ResultsTooltip;
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
