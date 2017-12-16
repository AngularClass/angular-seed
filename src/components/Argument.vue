<template>
  <span className="arg">
    <span className="arg-name">{{arg.name}}</span>
    :
    <TypeLink :type="arg.type" v-on:typeLinkClick="handleClick"/>
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
      handleClick: (...args) => {
        this.$emit('argumentClick', args)
      }
    }
  }
</script>
<style lang="stylus" scoped>
</style>


