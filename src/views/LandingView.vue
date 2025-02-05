<template>
  <div class="home-view">
    <div class="content">
      <h1>💌 Compatibility Test 💌</h1>

      <p>Are you guys really compatible? Or do you just like the sex</p>

      <router-link class="start-button" to="">Get Started</router-link>
    </div>
  </div>
</template>

<style lang="scss">
.home-view {
  height: 100%;
  margin: 0 auto;
  background: #ece2d0 .start-button {
    background: white;
    padding: 1rem 2rem;
    font-size: 24px;
    font-weight: 600;
    border-radius: 9px;
    border: 1px solid #d3d3d3;
    text-decoration: none;
    color: black;
    box-shadow: 10px 10px 10px grey;
  }

  .content {
    width: 900px;
    margin: 0 auto;
    padding: 4rem 0;
    text-align: center;

    h1 {
      margin: 0;
    }
  }
}
</style>
