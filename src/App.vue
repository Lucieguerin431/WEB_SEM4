<script setup>
import PhotoCard from './components/PhotoCard.vue'
import Search from './components/Search.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <!-- <Search :photos="photos"/> -->
  </header>
  <body>
    <div class="wrapper">
    </div>
    <div>
    <router-view></router-view>
  </div>
  </body>
</template>

<style scoped>
header {
  background: #fff6f1;
  text-align: center;
  color: black;    
  font-size: 30px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

body {
  background-color: #fff6f1;
  font-family: Arial, Helvetica, sans-serif;
  border: 2px black solid;
}


</style>

<script>
import Search from './components/Search.vue';

export default {
  name: 'App',
  data() {
    return {
      photos: [] 
    };
  },
}
</script>