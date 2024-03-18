<script setup>
defineProps({
  
})
</script>


<template>
<div>
  <header>
    <h1>EPICFOCUS</h1>
    <div class="rectangle"></div>
    <div class="search">
      <input type="text" v-model="searchKeyword" @input="searchPhotos" placeholder="Search for vintage images">
    </div>
  </header>
  <body>
    <div>
    <select v-model="orientation" @change="searchPhotos">
    <option value="">Toutes les orientations</option>
    <option value="landscape">Landscape</option>
    <option value="portrait">Portrait</option>
    <option value="square">Square</option>
</select>
<select v-model="size" @change="searchPhotos">
    <option value="">Toutes les tailles</option>
    <option value="small">Small</option>
    <option value="medium">Medium</option>
    <option value="large">Large</option>
</select>
<input type="text" v-model="color" value="00BCD4" @input="searchPhotos" placeholder="Code hexadécimal...">
</div>
    <div class="photo-gallery">
      <div v-if="loading" class="loading">Chargement en cours...</div>
      <div v-else>
        <div v-for="(photo, index) in photos" :key="index" class="photo-card">
          <img :src="photo.src.medium" :alt="photo.photographer">
        </div>
      </div>
    </div>
  </body>
  </div>
</template>


<style scoped>
header{
    background-color:#fff6f1;
}

body{
    background-color:#fff6f1;
}

.rectangle {
  width: 70%;
  height: 3rem; 
  background-color: #000000; 
  border: 2px solid #000;
  margin-left: 20%; 
}

input[type=text]{
  width: 70%;
  height: 3rem;
  border: 2px solid #000000;
  background-color: #E3622E;
}

</style>

<script>
export default {
  name: 'Search',
  props: ['photos'],
  data() {
    return {
      photos: [],
      searchKeyword: '',
      orientation: '',
      size: '',
      color: '',
      loading: false 
    };
  },
  
  methods: {
    async searchPhotos() {
      try {
        this.loading = true; 
        let apiUrl = `https://api.pexels.com/v1/search?query=35mm ${this.searchKeyword}&per_page=30`;
        if (this.orientation) {
          apiUrl += `&orientation=${this.orientation}`;
        }
        if (this.size) {
          apiUrl += `&size=${this.size}`;
        }
        if (this.color) {
          apiUrl += `&color=${this.color}`;
        }
        const response = await fetch(apiUrl, {
          headers: {
            'Authorization': 'udjXtzs8O2CXWR2aBuB4yqbHj9RF7zXaAoGAxTXOiAD6U9DsOmhw6USB'
          }
        });
        const data = await response.json();
        this.photos = data.photos;
      } catch (error) {
        console.error('Erreur lors de la recherche des photos:', error);
      } finally {
        this.loading = false; 
      }
    }
  }
}
</script>