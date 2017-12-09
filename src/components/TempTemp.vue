// Temporary component to test refactored react components

<template>
<div>
  <TypeLink :type="TypeLinkMocks.type" :onClick="handleClick" />
  <MarkdownContent :class="'Heeeeyyyyyaaa'" :markdown="markdown" />
</div>
</template>
<script>
import TypeLink from './DocExplorer/TypeLink'
import MarkdownContent from './DocExplorer/MarkdownContent'
export default {
  name: 'TempTemp',
  components: {
    TypeLink,
    MarkdownContent
  },
  data () {
    return {
      label: 'heyyy',
      markdown: '### I am marked downnn',
      TypeLinkMocks: {
        label: 'type link mocks label',
        type: {
          name: 'String'
        }
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
