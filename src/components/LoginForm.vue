<template>
  <form @submit.prevent="onSubmit">
    <h1 class="form-heading">Welcome Back!</h1>
    <div>
      <font-awesome-icon class="fas" icon="at" />
      <input class="form-input" type="email" v-model="email" placeholder="Email" required />
    </div>
    <div>
      <font-awesome-icon class="fas" icon="key" />
      <input class="form-input" type="password" v-model="password" placeholder="Password" required />
    </div>
    <button id="btn-login" type="submit">login</button>
    <p>
      Don't have an account?
      <a id="to-signup" href="#" @click.prevent="changeForm">signup</a>
    </p>
  </form>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    onSubmit () {},
    changeForm () {}
  }
}
</script>

<style lang="scss" scoped>
form {
  padding: 2rem;
  border-radius: 0.3rem;
  width: 30rem;
  box-shadow: 0 0 1rem #000;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  margin: 2rem 0;

  .form-heading {
    font-weight: 200;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    text-align: center;
  }

  div {
    display: flex;
    margin: 1rem 0;
    background-color: #ccc;
    border-bottom: 0.05rem solid #ccc;
    border-radius: 0.3rem;
    border: solid #333 0.08rem;
    height: 3rem;

    .fas {
      display: inline-block;
      font-size: 1.5rem;
      align-self: center;
      color: #333;
      background-color: #aaa;
      height: 100%;
      width: 3rem;
      padding: 0.6rem 0.8rem;
      border-radius: 0.3rem 0 0 0.3rem;
    }

    .form-input {
      display: inline-block;
      background-color: transparent;
      font-size: 1.2rem;
      padding: 0.4rem;
      border: none;
      outline: none;
      width: 100%;
      border-radius: 0 0.3rem 0.3rem 0;
    }
  }

  #btn-login {
    position: relative;
    width: 100%;
    height: 2.5rem;
    font-size: 1.3rem;
    border: none;
    background-color: rgb(34, 34, 104);
    border-radius: 0.3rem;
    color: #fff;
    cursor: pointer;
    box-sizing: border-box;
  }

  #btn-login:hover {
    background-color: rgb(32, 32, 124);
  }

  #to-signup {
    color: blue;
  }
}
</style>
