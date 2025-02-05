<template>
  <div class="landing-view">
    <div class="content">
      <h1>💌 Compatibility Test 💌</h1>

      <p>Are you guys really compatible? Or do you just like the sex</p>

      <router-link class="start-button" to="home">Get Started</router-link>
    </div>
  </div>
</template>

<style lang="scss">
.landing-view {
  height: 100%;
  margin: 0 auto;

  .content {
    width: 900px;
    margin: 16rem auto;
    text-align: center;

    h1 {
      margin: 0;
    }

    p {
      font-weight: 500;
      margin-bottom: 3rem;
    }

    .start-button {
      background: white;
      margin-top: 10rem;
      padding: 1rem 1.5rem;
      font-size: 18px;
      font-weight: 600;
      border-radius: 9px;
      border: 1px solid #d3d3d3;
      text-decoration: none;
      color: black;
      box-shadow: 10px 10px 10px grey;
    }
  }
}
</style>
