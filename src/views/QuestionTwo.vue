<template>
  <div class="question-one">
    <div class="question-container">
      <h2>Question 2:</h2>
      <h1>Would you rather only be able to be on the bottom during sex, or only on the top?</h1>

      <div class="input-box">
        <input type="radio" id="html" name="fav_language" value="HTML" v-model="selectedOption" />
        <label for="html">Top</label><br />
        <input type="radio" id="css" name="fav_language" value="CSS" v-model="selectedOption" />
        <label for="css">Bottom</label><br />
      </div>
    </div>

    <div class="main-container">
      <!-- TODO: make sure user cannot press on the button twice -->
      <router-link class="next-button" to="question3" :class="{ disabled: !selectedOption }">
        Next
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectedOption = ref()
</script>

<style lang="scss">
.question-one {
  height: 100%;
  width: 100%;
  position: relative;
  padding: 4rem 0;

  h1,
  h2 {
    text-align: center;
  }

  h2 {
    font-weight: 400;
  }

  .question-container {
    width: 900px;
    margin: 0 auto;
    padding: 5rem;
    background: white;
    border-radius: 12px;
    box-shadow: 10px 10px 10px rgb(185, 185, 185);
  }

  .input-box {
    width: fit-content;
    margin: 0 auto;
    font-size: 1.25rem;
  }

  .main-container {
    margin-top: 2rem;
    text-align: center;

    .next-button {
      text-decoration: none;
      background: rgb(33, 111, 255);
      color: white;
      font-weight: 600;
      font-size: 1.25rem;
      padding: 0.5rem 1.5rem;
      border-radius: 9px;
      border: 1px solid rgb(241, 241, 241);
      box-shadow: 5px 5px 5px rgb(156, 156, 156);

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
