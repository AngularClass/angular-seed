<template>
  <span className="arg">
    <span className="arg-name">{{arg.name}}</span>
    :
    <TypeLink :type="arg.type" v-on:typeLinkClick="handleTypeLinkClick"/>
    <DefaultValue :if="showDefaultValue" :field="arg" />
  </span>
</template>

<script>
  import TypeLink from './TypeLink'
  import DefaultValue from './DefaultValue'
  export default {
    name: 'Argument',
    props: {
      arg: {
        required: true,
        type: Object
      },
      showDefaultValue: {
        required: true,
        type: Boolean
      }
    },
    components: {
      TypeLink,
      DefaultValue
    },
    methods: {
<<<<<<< HEAD:src/components/Argument.vue
      handleClick: (...args) => {
        console.log('Argument handleClick', args)
=======
      handleTypeLinkClick: function (e, ...args) {
        this.$emit('argumentClick', e, args)
>>>>>>> dev:src/components/DocsExplorer/Argument.vue
      }
    }
  }
</script>
<style lang="stylus" scoped>
</style>


