<template>
  <span>
    <span class="arg-default-value">
      =
      {{print(astFromValue(field.defaultValue, field.type))}}
    </span>
  </span>
</template>

<script>
import { astFromValue, print } from 'graphql'
export default {
  name: 'DefaultValue',
  props: {
    field: {
      required: true,
      type: Object
    }
  },
  methods: {
    print,
    astFromValue
  }
}
</script>
<style lang="stylus" scoped></style>
