// Temporary component to test refactored react components

<template>
  <div>
    <h1 :class="className">{{title}}</h1>
  </div>
</template>
<script>
export default {
  name: 'ComponentWrapper',
  props: {
    title: {
      type: String
    },
    className: {
      type: String
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
