<template>
  <main>
    <nav id="menu-bar" :style="{width}">
      <ul>
        <router-link
          is="li"
          @click="$router.push('/menu/meals')"
          :class="['menu-category', {active:'meals'===active}]"
          attr="Meals"
        >Meals</router-link>
        <router-link
          is="li"
          to="/menu/drinks"
          @click="$router.push('/menu/drinks')"
          :class="['menu-category', {active:'drinks'===active}]"
          attr="Drinks"
        >Drinks</router-link>
        <router-link
          is="li"
          :class="['menu-category', {active:'desserts'===active}]"
          attr="Desserts"
        >Desserts</router-link>
      </ul>
    </nav>

    <div class="wrapper">
      <router-view />
    </div>
    <font-awesome-icon
      class="fas"
      @click="showSideBar=!showSideBar"
      icon="caret-square-down"
      size="4x"
    />
  </main>
</template>

<script>
export default {
  mounted () {
    window.addEventListener('resize', this.handleWindowResize)
  },

  data () {
    return {
      showSideBar: true,
      size: null
    }
  },

  methods: {
    handleWindowResize () {
      this.size = window.visualViewport.width
    }
  },

  computed: {
    width () {
      return this.showSideBar || this.size >= 720 ? '15rem' : '0'
    },

    active () {
      return this.$route.path.match(/^\/menu\/(.+)$/i)[1]
    }
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.handleWindowResize)
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;

  .wrapper {
    margin-left: 15rem;
    padding: 1.5rem 1rem;
    width: 100%;
    @media only screen and (max-width: 730px) {
      margin-left: 0;
    }
  }

  nav {
    background: #811004;
    width: 15rem;
    height: 100vh;
    flex-shrink: 0;
    color: #fff;
    font-size: 1.5rem;
    padding-top: 3rem;
    text-align: left;
    position: fixed;
    overflow: hidden;
    transition: width 0.5s ease-in-out;
    z-index: 1;

    li {
      margin: 0.5rem 0 1rem 2rem;
      padding-left: 2.5rem;
      position: relative;
      line-height: 1.7;
      overflow: hidden;
    }

    li:not(.active) {
      cursor: pointer;
    }

    li::after {
      content: attr(attr);
      color: #811004;
      left: 100%;
      width: 100%;
      position: absolute;
      background-color: #fff7f7;
      border-top-left-radius: 5rem;
      border-bottom-left-radius: 5rem;
    }

    li.active::after {
      padding-left: 2.5rem;
      left: 0;
      transition: left 1s ease-in-out;
    }
  }
}

.fas {
  position: fixed;
  bottom: 3.5rem;
  right: 1rem;
  display: none;
  cursor: pointer;

  @media only screen and (max-width: 730px) {
    display: block;
  }
}
</style>
