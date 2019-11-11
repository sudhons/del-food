<template>
  <header>
    <div id="brand">
      <h1 id="brand-name">
        <router-link to="/">Fooddel</router-link>
      </h1>
    </div>
    <font-awesome-icon class="menu" icon="bars" v-if="isLoggedIn" />
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    user: {
      type: Object,
      default: () => ({ userId: 8 })
    }
  },

  computed: mapState({
    isLoggedIn: state => state.auth.isLoggedIn
  })
}
</script>

<style lang="scss" scoped>
@import "@/variables";

header {
  font-family: "Lobster", cursive;
  background-color: #dedede;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $header-height;
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;

  a {
    text-decoration: none;
    color: #af1c0b;
  }

  .menu {
    font-size: 2rem;
    cursor: pointer;
  }
}
</style>
