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
@import "@/variables";

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
    margin-top: $header-height;
    position: relative;
    flex-grow: 1;
  }
}

.fade-leave-to {
  transform: translateX(-70%);
  opacity: 0;
}

.fade-enter {
  opacity: 0;
  transform: translateX(90%);
}

.fade-leave-active,
.fade-enter-active {
  transition: all 0.4s cubic-bezier(0.47, 0, 0.745, 0.715);
}

.slide-fade-enter {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.8s ease-in-out;
}
</style>
