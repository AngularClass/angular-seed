// Temporary component to test refactored react components

<template>
  <div>
    <h1 :class="className">{{title}}</h1>
    <TypeLink :type="TypeLinkProps.type" :onClick="TypeLinkProps.onClick" />
    <MarkdownContent :class="MarkdownContentProps.className" :markdown="MarkdownContentProps.markdown" />
  </div>
</template>
<script>
import TypeLink from './TypeLink'
import MarkdownContent from './MarkdownContent'
export default {
  name: 'ComponentWrapper',
  props: {
    title: {
      type: String
    },
    className: {
      type: String
    },
  },
  components: {
    TypeLink,
    MarkdownContent
  },
  data () {
    return {
      MarkdownContentProps: {
        markdown: '### I am marked downnn',
        className: 'markdown-component'
      },
      TypeLinkProps: {
        type: {
          name: 'String'
        },
        onClick: this.handleClick
      }
    }
  },
  methods: {
    handleClick: (component) => {
      console.log('handleClick for', component)
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
