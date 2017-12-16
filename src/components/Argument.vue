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
      onClickType: {
        required: true,
        type: Function
      },
      showDefaultValue: {
        required: true,
        type: Boolean
      }
    },
    components: {
      TypeLink,
      DefaultValue
<<<<<<< HEAD
=======
    },
    methods: {
      handleClick: (...args) => {
        this.$emit('argumentClick', args)
      }
>>>>>>> f824403... :construction: wip
    }
  }
</script>
<style lang="stylus" scoped></style>


