<template>
  <div class="landing-view">
    <div class="content">
      <h1>💌 Couples Compatibility Test 💌</h1>

      <p>Are you guys really compatible? Or do you just like the sex</p>

      <router-link class="start-button" to="question1">Get Started</router-link>
    </div>
    <footer>
      <span>© 2025 Couples Compatibility Test. All Rights Reserved.</span>
      <div>
        <a href="">Privacy Policy</a> | <a href="">Terms of Service</a> |
        <a href="">Contact Us</a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
.landing-view {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 0 auto;

  .content {
    width: 900px;
    margin: 16rem auto;
    text-align: center;

    h1 {
      margin: 0;
      font-family: 'Pacifico', serif;
      font-size: 4rem;
      color: white;
      text-shadow: 1px 1px 10px black;
    }

    p {
      font-weight: 500;
      margin-bottom: 3rem;
      font-weight: 600;
      font-size: 1.5rem;
    }

    .start-button {
      background: white;
      margin-top: 10rem;
      padding: 0.75rem 1.5rem;
      font-size: 18px;
      font-weight: 600;
      border-radius: 9px;
      border: 1px solid #d3d3d3;
      text-decoration: none;
      color: black;
      box-shadow: 10px 10px 10px grey;
      transition: 0.2s;

      &:hover {
        background: #dbdbdb;
      }
    }
  }

  footer {
    text-align: center;
    padding: 3rem 0;
    margin: 0 4rem;
    font-weight: 600;
    border-top: 1px solid black;

    span {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
