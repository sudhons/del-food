<template>
  <div class="spinner" v-if="isLoading">
    <font-awesome-icon class="fas" icon="spinner" spin size="8x" />
  </div>
  <div class="meal-category" v-else>
    <MenuItem v-for="meal in meals" :key="meal.menu_id" :menuItem="meal" />
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  components: {
    MenuItem
  },
  mounted () {
    this.menu.length === 0 && this.getMenu()
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      menu: state => state.menu
    }),
    ...mapGetters(['meals'])
  },
  methods: {
    ...mapActions(['getMenu'])
  }
}
</script>

<style scoped>
.meal-category {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11.5rem, 1fr));
  grid-gap: 1rem;
  justify-items: center;
}

.spinner {
  margin-top: 30vh;
}
</style>
