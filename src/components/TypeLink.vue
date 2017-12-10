<template>
  <div>
    <span v-if="(type instanceof GraphQLNonNull)">
      <a class="type-name" :click="onClick(type.name)">
        {{type.name}}
      </a>
      !
    </span>

    <span v-else-if="(type instanceof GraphQLList)">
      [
      <a class="type-name" :click="onClick(type.name)">
        {{type.name}}
      </a>
      ]
    </span>
    <span v-else>
      <a class="type-name" @click="onClick(type.name)">
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
    },
    onClick: {
      required: true,
      type: Function
    }
  },
  data () {
    return {
      GraphQLList,
      GraphQLNonNull
    }
  }
}
</script>

<style lang="stylus" scoped></style>
