<template>
  <div id="app">
    <Tab ></Tab>
    <Main ></Main>
  </div>
</template>

<script>
import Tab from './components/Tab.vue'
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Tab,
    Main
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  box-sizing: border-box;
}
</style>
