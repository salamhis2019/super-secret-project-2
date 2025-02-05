<template>
  <div class="home-view">
    <h2>Question 1:</h2>
    <h1><span class="name">Whitney Gilley</span>, will you be my valentine?</h1>

    <div class="darth-container">
      <img class="darth" src="../assets/darth.jpg" alt="" />
    </div>

    <div class="main-container">
      <button class="yes-button" @click="onYesButtonClick">Yes</button>
      <div class="no-button-container">
        <!-- TODO: make sure user cannot press on the button twice -->
        <button class="no-button" :disabled="showMaxOverlayCountText" @mouseover="onNoButtonHover">
          No
        </button>
        <img v-if="showMaxOverlayCountText" class="arrow-1" src="../assets/arrow.png" alt="" />
        <img v-if="showMaxOverlayCountText" class="arrow-2" src="../assets/arrow.png" alt="" />
        <img v-if="showMaxOverlayCountText" class="arrow-3" src="../assets/arrow.png" alt="" />
      </div>
    </div>

    <div v-if="showOverlay" class="overlay">
      <img :src="overlayImageUrl" class="no-image" />
      <p>{{ overlayText }}</p>
    </div>

    <div v-if="showMaxOverlayCountMessage" class="overlay">
      <p>Let me make it easier for you! 😊</p>
    </div>

    <div v-if="showClickOnNoButtonMessage" class="overlay">
      <p>
        Thank you saying yes right away, but click on no and pretend like you didn't click yes right
        away :)
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { NO_STATES_INFO } from '@/constants/landing.const'
import router from '@/router'

// state
const MAX_OVERLAY_COUNT = 4
const showOverlay = ref(false)
const showMaxOverlayCountMessage = ref(false)
const showMaxOverlayCountText = ref(false)
const showClickOnNoButtonMessage = ref(false)
const overlayImageUrl = ref('')
const overlayText = ref('')
const overlayCount = ref(1)

// methods
function onShowMaxOverlayCountMessage() {
  showMaxOverlayCountMessage.value = true

  setTimeout(() => {
    showMaxOverlayCountMessage.value = false
  }, 3000)
}

function onNoButtonHover() {
  if (overlayCount.value > MAX_OVERLAY_COUNT) {
    onShowMaxOverlayCountMessage()

    showMaxOverlayCountText.value = true
  }

  if (overlayCount.value <= MAX_OVERLAY_COUNT) {
    showOverlay.value = true

    overlayImageUrl.value = NO_STATES_INFO[overlayCount.value].imgUrl
    overlayText.value = NO_STATES_INFO[overlayCount.value].text

    overlayCount.value++
  }

  setTimeout(() => {
    showOverlay.value = false
  }, 1500)
}

function onYesButtonClick() {
  if (overlayCount.value <= MAX_OVERLAY_COUNT) {
    showClickOnNoButtonMessage.value = true

    setTimeout(() => {
      showClickOnNoButtonMessage.value = false
    }, 3000)

    return
  }

  router.push({ name: 'YesScreen' })
}
</script>

<style lang="scss" setup>
.home-view {
  height: 100%;
  width: 100%;
  position: relative;
  padding: 4rem 0;

  .overlay {
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    min-height: 100%;
    min-width: 100%;
    padding: 10rem 0;
    background: rgba(0, 0, 0, 0.882);
    position: absolute;

    .no-image {
      height: 500px;
      width: 500px;
    }

    p {
      font-size: 3rem;
      font-weight: bold;
      color: white;
    }
  }

  h1,
  h2 {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
  }

  h1 {
    margin-top: 1rem;
  }

  .name {
    font-family: 'Lilita One', serif;
    font-size: 5rem;
    text-shadow: 1px 1px 20px black;
    color: rgb(255, 255, 255);
  }

  .darth-container {
    display: flex;
    justify-content: center;
    margin: 4rem 0 2rem 0;

    .darth {
      height: 400px;
      width: 400px;
      border-radius: 9px;
      border: 12px solid hotpink;
    }
  }

  .main-container {
    display: flex;
    justify-content: center;
    gap: 6rem;
    width: 900px;
    margin: 2rem auto 0 auto;

    button {
      height: 150px;
      width: 150px;
      background: white;
      padding: 0.5rem 1.5rem;
      font-size: 32px;
      font-weight: 600;
      border-radius: 100%;
      border: 1px solid #d3d3d3;
      color: white;
      box-shadow: 10px 10px 10px grey;
      cursor: pointer;
      transition: 0.2s;
    }

    .yes-button {
      background: radial-gradient(#09b81a, #086e12);

      &:hover {
        filter: brightness(1.3);
        color: white;
      }
    }

    .no-button-container {
      position: relative;

      .no-button {
        background: red;
        cursor: not-allowed;

        &:disabled {
          height: 50px;
          width: 50px;
          background: red;
          color: #ffffff7e;
          border: 1px solid red;
          box-shadow: none;
          font-size: 10px;
          padding: 0 0.5rem;
        }
      }

      .arrow-1,
      .arrow-2,
      .arrow-3 {
        position: absolute;
        height: 100px;
        width: 150px;
      }

      .arrow-1 {
        right: 300px;
        top: 40px;
      }

      .arrow-2 {
        right: 0;
        top: 180px;
        right: 160px;
        transform: rotate(-70deg);
      }

      .arrow-3 {
        right: 130px;
        top: -120px;
        right: 180px;
        transform: rotate(70deg);
      }
    }
  }
}
</style>
