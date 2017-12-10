// Temporary component to test refactored react components

<template>
  <div>
    <h1 :class="className">{{title}}</h1>
    <TypeLink :type="TypeLinkProps.type" :onClick="TypeLinkProps.onClick" />
  </div>
</template>
<script>
import TypeLink from './TypeLink'
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
    TypeLink
  },
  data () {
    return {
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
