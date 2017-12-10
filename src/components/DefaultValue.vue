<template :if="defaultValue !== undefined">
  <span>
    <span class="arg-default-value">
      =
      {print(astFromValue(defaultValue, type))}
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
  computed: {
    defaultValue: () => {
      const { defaultValue } = this.field
      return defaultValue
    },
    type: () => {
      const { type } = this.field
      return type
    }
  },
  methods: {
    print,
    astFromValue
  }
}
</script>
<style lang="stylus" scoped></style>
