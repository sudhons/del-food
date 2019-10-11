<template>
  <header>
    <div id="brand">
      <h1 id="brand-name">
        <router-link to="/">FooDDeL</router-link>
      </h1>
    </div>
    <div id="menu" v-if="user.userId">
      <router-link to="#">
        <i class="fas fa-bars"></i>
      </router-link>
    </div>
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
  background-color: #dedede;
  padding: 0.5rem 1.2rem;
  display: flex;
  justify-content: space-between;
  height: $header-height;

  a {
    text-decoration: none;
    color: rgb(8, 8, 126);
  }
}
</style>
