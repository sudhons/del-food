<template>
  <header>
    <div id="brand">
      <h1 id="brand-name">
        <router-link to="/">Fooddel</router-link>
      </h1>
    </div>
    <font-awesome-icon class="menu" icon="bars" />
  </header>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({ userId: 8 })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/variables";

header {
  font-family: "Lobster", cursive;
  background-color: #dedede;
  padding: 0.5rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $header-height;

  a {
    text-decoration: none;
    color: #af1c0b;
  }

  .menu {
    font-size: 2rem;
  }
}
</style>
