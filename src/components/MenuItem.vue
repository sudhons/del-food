<template>
  <div :class="['items', {'in-cart':menuItem.isInCart}]">
    <img :src="menuItem.image" alt="meal picture" />
    <div class="item-details">
      <h3>{{menuItem.title}}</h3>
      <h3>₦{{menuItem.price}}</h3>
    </div>
    <button
      :class="['item-btn', {'disabled':menuItem.isInCart }]"
      @click="$emit('add-to-cart', menuItem.menu_id)"
    >{{ menuItem.isInCart? "added to cart" : "add to cart" }}</button>
  </div>
</template>

<script>
export default {
  props: ['menuItem'],
  data () {
    return {
      menuItemDetails: {
        title: 'Spagetti',
        price: 5000,
        image: 'fine',
        isInCart: Math.trunc(Math.random() * 10) < 5
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.items {
  background-color: #f6f6f6;
  border-radius: 0.2rem;
  width: 100%;
  height: 22.5rem;
  color: #4e4e4e;
  box-shadow: 0 0 4px 1px #cbcbcc;
  text-align: center;
  margin: auto;
  overflow: hidden;
}

.item-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.8rem 0;
}

h3 {
  font-size: 1.3rem;
  font-weight: normal;
}

.items:not(.in-cart):hover {
  box-shadow: 0 0 0.5rem #000;
}

.items img {
  display: block;
  width: 100%;
  height: 60%;
  border-radius: 0.16rem 0.16rem 0 0;
  margin-bottom: 0.7rem;
}

.item-btn {
  display: block;
  background-color: rgb(28, 67, 125);
  color: #fff;
  font-size: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.85rem 1.2rem;
  // margin-top: 2rem;
  width: 100%;
}

.disabled {
  pointer-events: none;
  opacity: 0.7;
}

.item-btn:hover {
  background-color: rgb(29, 50, 125);
}
</style>
