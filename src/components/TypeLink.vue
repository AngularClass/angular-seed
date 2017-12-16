<template>
  <div>
    <span v-if="(type instanceof GraphQLNonNull)">
      <a class="type-name" @click="handleClick($event, type)">
        {{type.name}}
      </a>
      !
    </span>

    <span v-else-if="(type instanceof GraphQLList)">
      [
      <a class="type-name" @click="handleClick($event, type)">
        {{type.name}}
      </a>
      ]
    </span>
    <span v-else>
      <a class="type-name" @click="handleClick($event, type)">
        {{type.name}}
      </a>
    </span>
  </div>
</template>

<script>
import { GraphQLList, GraphQLNonNull } from 'graphql'
export default {
  name: 'TypeLink',
  props: {
    type: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      GraphQLList,
      GraphQLNonNull
    }
  },
  methods: {
    handleClick: function (e, type) {
      e.preventDefault()
      this.$emit('typeLinkClick', type)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
