<template>
  <main>
    <div id="intro">
      <p>Have our delicious and nutritious meals delivered at your door step</p>
      <p>You can't get a better taste else where!</p>
    </div>
    <LoginSignupForm />
  </main>
</template>

<script>
import LoginSignupForm from '@/components/LoginSignupForm'

export default {
  components: {
    LoginSignupForm
  },
}
</script>

<style lang="scss" scoped>
@import "@/variables";

main {
  display: block;
  background-color: rgba(0, 0, 0, 0.7) !important;
  padding: 0.3rem;
  padding-bottom: 3rem;

  > :first-child {
    overflow: hidden;
    padding: 2.5rem 10%;
    height: 100%;
    font-size: 1.5rem;
    color: #fff;

    ::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      height: 100%;
      width: 100%;
      background-image: url("../assets/home.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      z-index: -1;
    }
  }

  > :nth-child(2) {
    margin: 0 auto;
    max-width: 29rem;
  }

  @media screen and (min-width: 60rem) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5rem 5%;

    > :first-child {
      padding: 0;
      padding-right: 8%;
      font-size: 1.7rem;
    }

    > :nth-child(2) {
      flex-basis: 75%;
      flex-grow: 1;
      max-width: 29rem;
    }
  }
}
</style>
