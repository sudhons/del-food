<template>
  <transition-group name="list" tag="form" :class="active">
    <div :key="1">
      <h1 class="form-heading" v-if="isSignup">Create an Account</h1>
      <h1 class="form-heading" v-else>Welcome Back!</h1>
      <p v-if="error" class="error-alert">{{error.msg}}</p>
    </div>
    <div :class="['inputs', {error:  error && error.prop==='firstName'}]" v-if="isSignup" :key="3">
      <font-awesome-icon class="fas" icon="user" />
      <input class="form-input" type="text" v-model="signup.firstName" placeholder="First Name" />
    </div>
    <div :class="['inputs', {error:  error && error.prop==='lastName'}]" v-if="isSignup" :key="4">
      <font-awesome-icon class="fas" icon="user" />
      <input class="form-input" type="text" v-model="signup.lastName" placeholder="Last Name" />
    </div>
    <div
      :class="['inputs', {error:  error && (error.prop==='email' || error.status===409 || error.status===401)}]"
      :key="5"
    >
      <font-awesome-icon class="fas" icon="at" />
      <input class="form-input" type="email" v-model="login.email" placeholder="Email" />
    </div>
    <div
      :class="['inputs', {error:  error && (error.prop==='password' || error.status===401)}]"
      :key="6"
    >
      <font-awesome-icon class="fas" icon="lock" />
      <input class="form-input" type="password" v-model="login.password" placeholder="Password" />
    </div>
    <div class="inputs" v-if="isSignup" :key="7">
      <font-awesome-icon class="fas" icon="lock" />
      <input class="form-input" type="password" v-model="password2" placeholder="Confirm Password" />
    </div>
    <div :key="8">
      <button id="btn" type="submit" v-if="isLoading" disabled>
        <font-awesome-icon class="fas" icon="spinner" spin />
      </button>
      <button id="btn" type="submit" @click.prevent="onSubmit" v-else-if="isSignup">signup</button>
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
import { validateLogin, validateSignup } from '@/utils/validator'

export default {
  data () {
    return {
      login: {
        email: '',
        password: ''
      },
      signup: {
        firstName: '',
        lastName: ''
      },
      password2: '',
      active: 'signup',
      loginError: this.authLoginError,
      signupError: this.authSignupError
    }
  },

  props: ['authSignupError', 'authLoginError', 'isLoading'],

  computed: {
    isSignup () {
      return this.active === 'signup'
    },

    error () {
      return this.isSignup ? this.signupError : this.loginError
    }
  },

  watch: {
    authLoginError (newValue) {
      this.loginError = newValue
    },

    authSignupError (newValue) {
      this.signupError = newValue
    }
  },

  methods: {
    onSubmit () {
      let payload = { ...this.login }

      if (this.isSignup) {
        payload = { ...payload, ...this.signup }
        const { error } = validateSignup(payload)
        this.signupError = error
      } else {
        const { error } = validateLogin(payload)
        this.loginError = error
      }

      if (!this.error) {
        this.$emit(`${this.active}`, payload)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./loginSignupForm.scss";
</style>
