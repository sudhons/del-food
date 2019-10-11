<template>
  <main>
    <div id="intro">
      <p>Have our delicious and nutritious meals delivered at your door step</p>
      <p>You can't get a better taste else where!</p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/variables";

main {
  background-color: rgba(0, 0, 0, 0.7) !important;
}

#intro {
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  padding-top: 5rem;
  height: 100%;
}

#intro::before {
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
  z-index: -1;
}

#intro {
  font-size: 1.8rem;
  color: #fff;
}
</style>
