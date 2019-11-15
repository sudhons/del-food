<template>
  <div class="spinner" v-if="isLoading">
    <font-awesome-icon class="fas" icon="spinner" spin size="8x" />
  </div>
  <div class="meal-category" v-else>
    <MenuItem v-for="dessert in desserts" :key="dessert.menu_id" :menuItem="dessert" />
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
    if (!this.menuExist) this.getMenu()
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
    }),
    ...mapGetters(['menuExist', 'desserts'])
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
