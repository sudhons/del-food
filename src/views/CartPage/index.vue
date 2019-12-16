<template>
  <!-- <div class="spinner" v-if="isLoading">
    <font-awesome-icon class="fas" icon="spinner" spin size="8x" />
  </div>-->
  <!-- <div class="meal-category" v-else> -->
  <div class="meal-category">
    <cart-item v-for="item in cartItems" :key="item.menu_id" :cartItem="item" />
  </div>
</template>

<script>
import CartItem from '@/components/CartItem'
import { mapState } from 'vuex'
export default {
  components: {
    'cart-item': CartItem
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      cartItems: state => state.cart.cartItems
    })
  }
}
</script>

<style lang="scss" scoped>
.meal-category {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-gap: 1rem !important;

  @media only screen and (max-width: 730px) {
    margin: 0 7%;
  }
}

.spinner {
  margin-top: 30vh;
}
</style>
