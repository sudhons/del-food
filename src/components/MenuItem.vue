<template>
  <div class="items">
    <img :src="menuItem.image" alt="meal picture" />
    <h3>{{menuItem.title}}</h3>
    <h3>₦{{menuItem.price}}</h3>
    <button
      :class="['item-btn', {'disabled':menuItem.isInCart }]"
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
  height: 20rem;
  color: #4e4e4e;
  box-shadow: 0 0 4px 1px #cbcbcc;
  text-align: center;
  margin: auto;
  overflow: hidden;
}

.items:hover {
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
  cursor: pointer;
  padding: 0.85rem 1.2rem;
  margin-top: 1rem;
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
