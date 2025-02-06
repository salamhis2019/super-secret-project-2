<template>
  <div class="reward-view">
    <h1>Here is your Reward!! 🤸‍♂️👹😤</h1>
    <img class="screenshot" src="../assets/screenshot.png" alt="" />
    <img class="fireworks" src="../assets/fireworks.gif" />
    <img class="fireworks2" src="../assets/fireworks2.gif" />
    <img class="fireworks3" src="../assets/fireworks.gif" />
  </div>
</template>

<style lang="scss">
.reward-view {
  height: 100%;
  width: 100%;
  position: relative;
  padding: 4rem 0;

  h1 {
    font-size: 3rem;
    text-align: center;
    color: white;
    text-shadow: 5px 5px 5px black;
  }

  .screenshot {
    display: block;
    margin: 0 auto;
    height: 750px;
    width: 750px;
  }

  .fireworks {
    position: absolute;
    top: 0;
    right: 50%;
    height: 600px;
    width: 600px;
  }

  .fireworks2 {
    position: absolute;
    top: 10%;
    right: 20%;
    height: 500px;
    width: 500px;
  }

  .fireworks3 {
    position: absolute;
    top: 50%;
    right: 25%;
    height: 500px;
    width: 500px;
  }
}
</style>
