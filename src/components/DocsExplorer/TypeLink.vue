<template>
  <div>
    <span v-if="(type instanceof GraphQLNonNull)">
      <a class="type-name" v-on:click="handleClick($event, type)">
        {{type.name}}
      </a>
      !
    </span>

    <span v-else-if="(type instanceof GraphQLList)">
      [
      <a class="type-name" v-on:click="handleClick($event, type)">
        {{type.name}}
      </a>
      ]
    </span>
    <span v-else>
      <a class="type-name" v-on:click="handleClick($event, type)">
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
<<<<<<< HEAD:src/components/TypeLink.vue
      e.preventDefault()
      this.$emit('TypeLinkClick', type)
=======
      this.$emit('typeLinkClick', e, type)
>>>>>>> dev:src/components/DocsExplorer/TypeLink.vue
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
