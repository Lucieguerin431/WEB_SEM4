<script setup>
import PhotoCard from './components/PhotoCard.vue'
import Search from './components/Search.vue';
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
    <Search :photos="photos"/>
  </header>
  <body>
    <div class="wrapper">
    </div>
  </body>
</template>

<style scoped>
header {
  background: #fff6f1;
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


</style>

<script>
import Search from './components/Search.vue';

export default {
  name: 'App',
  data() {
    return {
      photos: [] // Ajout d'une liste d'images pour passer à Search
    };
  },
  // Vous pouvez continuer à appeler fetchFilmPhotos() ici si vous le souhaitez
}
</script>