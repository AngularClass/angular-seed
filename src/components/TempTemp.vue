// Temporary component to test refactored react components

<template>
  <TypeLink :type="TypeLinkMocks.type" :onClick="handleClick" />
</template>
<script>
import TypeLink from './DocExplorer/TypeLink'
export default {
  name: 'TempTemp',
  components: {
    TypeLink
  },
  data () {
    return {
      label: 'heyyy',
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
