<template>
  <div id="app">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  min-height: 100vh;
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

ul {
  list-style: none;
}

#app {
  display: flex;
  flex-direction: column;

  main {
    position: relative;
    background-color: #e5e5e5;
    flex-grow: 1;
  }
}
</style>
