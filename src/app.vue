<template>
  <div id="app">
    <TempTemplate />
  </div>
</template>

<script>
import TempTemplate from './components/TempTemp'

export default {
  name: 'app',
  components: {
    TempTemplate
  },
  data () {
    return {
      label: 'heyyy',
      TypeLinkMocks: {
        label: 'type link mocks label',
        type: {
          name: 'travis'
        }
      }
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
