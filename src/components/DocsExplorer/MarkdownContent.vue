<template>
  <div :if="markdown">
    <VueMarkdown :class="className">{{markdown}}</VueMarkdown>
  </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'MarkdownContent',
  props: {
    markdown: {
      type: String
    },
    className: {
      type: String
    }
  },
  components: {
    VueMarkdown
  }
}
</script>
<style lang="stylus" scoped></style>
