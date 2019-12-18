<template>
  <form id="recipient" action class="form" @submit.prevent="handleSubmit">
    <h1 class="form-heading">Delivery Details</h1>
    <div>
      <font-awesome-icon class="fas" icon="user" />
      <input
        class="form-input"
        name="recipientName"
        id="name"
        type="text"
        placeholder="Recipient Name"
        v-model="recipientName"
        required
      />
    </div>
    <div>
      <font-awesome-icon class="fas" icon="address-card" />
      <input
        class="form-input"
        name="recipientAddress"
        id="address"
        type="text"
        placeholder="Recipient Address"
        v-model="recipientAddress"
        required
      />
    </div>
    <div>
      <font-awesome-icon class="fas" icon="phone" />
      <input
        class="form-input"
        name="recipientPhone"
        id="phone"
        type="number"
        placeholder="Recipient Phone Number"
        v-model="recipientPhone"
        required
      />
    </div>
    <button id="btn-order" type="submit">Place Order</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      recipientName: '',
      recipientAddress: '',
      recipientPhone: ''
    }
  },

  methods: {
    handleSubmit () {}
  }
}
</script>

<style lang="scss" scoped>
  #recipient {
    margin: 3rem auto;
    max-width: 36rem;
    text-align: center;
  }

  .form-heading {
    font-weight: 200;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-align: center;
  }

  .form div {
    display: flex;
    margin: 1rem 0;
    background-color: #ccc;
    border-bottom: .05rem solid #ccc;
    border-radius: .3rem;
    border: solid #333 0.08rem;
    height: 3rem;
  }

  .form .fas {
    display: inline-block;
    font-size: 1.5rem;
    align-self: center;
    color: #333;
    background-color: #aaa;
    height: 100%;
    width: 3rem;
    padding:  0.6rem 0.8rem;
    border-radius: .3rem 0 0 .3rem;
  }

  input.form-input {
    display: inline-block;
    background-color: transparent;
    font-size: 1.2rem;
    padding: 0.4rem;
    border: none;
    outline: none;
    width: 100%;
    border-radius: 0 .3rem .3rem 0;
  }

  input[type="number"]::-webkit-inner-spin-button {
    opacity: 1;
    display: none;
  }

  #btn-order {
    position: relative;
    width: 100%;
    height: 2.5rem;
    font-size: 1.3rem;
    border: none;
    background-color: rgb(34, 34, 104);
    border-radius: .3rem;
    color: #fff;
    cursor: pointer;
    box-sizing: border-box;
  }

  #btn-order:hover {
    background-color: rgb(32, 32, 124);
  }

</style>
