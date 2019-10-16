<template>
  <transition-group name="list" tag="form" :class="active">
    <div :key="1">
      <h1 class="form-heading" v-if="isSignup">Create an Account</h1>
      <h1 class="form-heading" v-else>Welcome Back!</h1>
    </div>
    <div class="inputs" v-if="isSignup" :key="3">
      <font-awesome-icon class="fas" icon="user" />
      <input class="form-input" type="text" v-model="firstName" placeholder="First Name" required />
    </div>
    <div class="inputs" v-if="isSignup" :key="4">
      <font-awesome-icon class="fas" icon="user" />
      <input class="form-input" type="text" v-model="lastName" placeholder="Last Name" required />
    </div>
    <div class="inputs" :key="5">
      <font-awesome-icon class="fas" icon="at" />
      <input class="form-input" type="email" v-model="email" placeholder="Email" required />
    </div>
    <div class="inputs" :key="6">
      <font-awesome-icon class="fas" icon="lock" />
      <input class="form-input" type="password" v-model="password" placeholder="Password" required />
    </div>
    <div class="inputs" v-if="isSignup" :key="7">
      <font-awesome-icon class="fas" icon="lock" />
      <input
        class="form-input"
        type="password"
        v-model="password2"
        placeholder="Confirm Password"
        required
      />
    </div>
    <div :key="8">
      <button id="btn" type="submit" @click.prevent="onSubmit" v-if="isSignup">signup</button>
      <button id="btn" type="submit" @click.prevent="onSubmit" v-else>login</button>
      <p v-if="isSignup">
        Already have an account?
        <a id="to" href="#" @click.prevent="active='login'">login</a>
      </p>
      <p v-else>
        Don't have an account?
        <a id="to" href="#" @click.prevent="active='signup'">signup</a>
      </p>
    </div>
  </transition-group>
</template>

<script>
export default {
  data () {
    return {
      active: 'signup',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: ''
    }
  },

  computed: {
    isSignup () {
      return this.active === 'signup'
    }
  },

  methods: {
    onSubmit () {
      alert('hi')
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 20.5rem;
  transition: height 0.6s cubic-bezier(0.76, 0.09, 0, 1.21) 0.85s;
}

.signup {
  height: 33rem;
  transition: height 1s;
}

form {
  padding: 2rem;
  border-radius: 0.3rem;
  box-shadow: 0 0 1rem #000;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  overflow: hidden;
  position: relative;

  div {
    transition: all 1s;

    .form-heading {
      font-weight: 200;
      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      text-align: center;
      line-height: 1.2;
      font-size: 1.6rem;

      @media screen and (min-width: 60rem) {
        font-size: 1.9rem;
      }
    }

    #btn {
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

    #btn:hover {
      background-color: rgb(32, 32, 124);
    }

    #to {
      color: blue;
    }

    p {
      margin-top: 1rem;
    }
  }

  div.inputs {
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
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
