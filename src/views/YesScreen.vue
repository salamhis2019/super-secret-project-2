<template>
  <div class="yes-screen">
    <h1>🎉 WONDERFUL ANSWER <span class="name">NINNIE</span>!! 🎉</h1>
    <div class="content-container">
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTRobmx2eWJmMTB6azQ5eWV2MHlvcGs2YmxscTN5MjVoNGFtNzRnZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jIXcTEmU5RCpO/giphy.gif"
        alt=""
      />
    </div>
    <router-link to="reward" class="reward-button">View your reward</router-link>
  </div>
</template>

<script>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style lang="scss">
.yes-screen {
  height: 100%;
  width: 100%;
  position: relative;
  padding: 4rem 0;

  h1 {
    text-align: center;
    font-size: 3rem;
    color: white;
    text-shadow: 5px 5px 5px black;

    .name {
      color: rgb(102, 102, 255);
    }
  }

  img {
    display: block;
    height: 500px;
    margin: 0 auto;
  }

  .reward-button {
    display: block;
    width: fit-content;
    background: white;
    text-align: center;
    margin: 2rem auto;
    padding: 0.5rem 1.5rem;
    border-radius: 9px;
    text-decoration: none;
    box-shadow: 5px 5px 5px grey;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
