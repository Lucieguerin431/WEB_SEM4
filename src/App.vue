<script setup>
import PhotoCard from './components/PhotoCard.vue'
import ApiTest from './components/Header.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
    <ApiTest/>
  </header>
  <body>
    <div class="wrapper">
      <PhotoCard/>
    </div>
  </body>
</template>

<style scoped>
header {
  background: #FFF2EA;
  padding: 60px;
  text-align: center;
  color: black;
  font-size: 30px;
}

.wraper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

body {
  background-color: #FFF2EA;
}

</style>./components/Header.vue
