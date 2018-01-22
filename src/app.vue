<template>
  <div id="app">
    <ComponentWrapper :title="componentWrapperProps.title" :className="componentWrapperProps.className"/>
  </div>
</template>

<script>
import ComponentWrapper from './components/DocsExplorer/ComponentWrapper'
export default {
  name: 'app',
  components: {
    ComponentWrapper
  },
  data: () => {
    return {
      componentWrapperProps: {
        title: 'wrapper title',
        className: 'wrapper'
      }
    }
  }
}
</script>

<style lang="stylus" scoped></style>
