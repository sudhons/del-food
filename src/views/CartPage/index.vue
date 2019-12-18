<template>
  <div class="spinner" v-if="isLoading">
    <font-awesome-icon class="fas" icon="spinner" spin size="8x" />
  </div>
  <transition-group name="fade" class="meal-category" v-else>
    <cart-item
      v-for="item in cartItems"
      :key="item.menu_id"
      :cartItem="item"
      @update-cart-item="updateCartItem"
      @delete-cart-item="removeCartItem"
    />
  </transition-group>
</template>

<script>
import CartItem from '@/components/CartItem'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  components: {
    'cart-item': CartItem
  },
  mounted () {
    if (!this.menuExist) this.getMenu()
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading
    }),

    ...mapGetters(['menuExist', 'cartItems'])
  },
  methods: {
    ...mapActions(['getMenu']),
    ...mapMutations({
      updateCartItem: 'UPDATE_CART_ITEM',
      removeCartItem: 'REMOVE_CART_ITEM'
    })
  }
}
</script>

<style lang="scss" scoped>
.meal-category {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-gap: 1rem;

  @media only screen and (max-width: 730px) {
    margin: 0 7%;
  }
}

.spinner {
  margin-top: 30vh;
}
</style>
