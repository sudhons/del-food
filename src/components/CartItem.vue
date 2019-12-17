<template>
  <div class="cart-items">
    <div>
      <img :src="cartItem.image" alt="food item picture" />
      <font-awesome-icon class="fas delete delete-cart-item" icon="trash" @click="handleDelete" />
    </div>
    <div>
      <div class="my-cart-props">
        <label>Quantity:</label>
        <input
          class="qty"
          type="number"
          min="1"
          step="1"
          :value="cartItem.quantity"
          @input="handleInput"
        />
      </div>
      <div class="my-cart-props">
        <div>Unit Price:</div>
        <div class="price">₦{{cartItem.price}}</div>
      </div>
      <div class="my-cart-props">
        <div>Total:</div>
        <div class="price">₦{{cartItem.price * cartItem.quantity}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cartItem'],
  methods: {
    handleInput ({ target }) {
      this.$emit('update-cart-item', { id: this.cartItem.menu_id, quantity: target.value })
    },
    handleDelete () {
      this.$emit('delete-cart-item', this.cartItem.menu_id)
    }
  }
}
</script>

<style scoped>
.cart-items {
  position: relative;
  background-color: #efefef;
  border-radius: 0.2rem;
  height: 22.5rem;
  box-shadow: 0 0 4px 1px #cbcbcc;
  text-align: center;
  text-align: left;
  max-width: 20rem;
  overflow: hidden;
}

.cart-items img {
  width: 100%;
  height: 13rem;
  display: block;
  border-radius: 0.16rem 0.16rem 0 0;
}

.cart-items :nth-child(2) {
  margin-top: 1rem;
}

.cart-props,
.my-cart-props {
  min-height: 2rem;
  margin: 0.7rem;
  margin-right: 0;
}

.my-cart-props > div,
label {
  display: inline;
  font-weight: 500;
}

.qty {
  width: 3rem;
  font-size: 1rem;
  font-weight: 1000;
  padding-left: 0.5rem;
  border: 0.05rem solid #ccc;
  outline: none;
  border-radius: 0.3rem;
}

.qty::-webkit-inner-spin-button {
  opacity: 1;
}

.delete {
  color: rgb(201, 14, 14);
  font-size: 1.5rem;
  cursor: pointer;
}

.delete:hover {
  opacity: 0.75;
}

.delete-cart-item {
  position: absolute;
  bottom: 1rem;
  right: 0.7rem;
}
</style>
