<script setup>
defineProps({
  
})
</script>


<template>
<div>
    <h1>EPICFOCUS</h1>
    <div class="search">
      <input type="text" v-model="searchKeyword" @input="searchPhotos" placeholder="Rechercher des photos...">
      <button class="searchButton" @click="searchPhotos">Rechercher</button>
    </div>
    <div class="photo-gallery">
      <div v-if="loading" class="loading">Chargement en cours...</div>
      <div v-else>
        <div v-for="(photo, index) in photos" :key="index" class="photo-card">
          <img :src="photo.src.medium" :alt="photo.photographer">
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
header{
    background-color:#FFF2EA;
}

.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 1px solid #000000;
  border-right: none;
  padding: 5px;
  height: 5rem;
  outline: none;
  background-color: #E3622E;
}

.searchButton {
  width: auto;
  height: 5rem;
  border: 1px solid #000000;
  background: #E3622E;
  text-align: center;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
}
</style>

<script>
export default {
  name: 'Search',
  data() {
    return {
      photos: [],
      searchKeyword: '',
      loading: false // Ajout d'une propriété pour afficher le chargement
    };
  },
  methods: {
    async searchPhotos() {
      try {
        this.loading = true; // Démarre le chargement
        const response = await fetch(`https://api.pexels.com/v1/search?query=35mm ${this.searchKeyword}`, {
          headers: {
            'Authorization': 'udjXtzs8O2CXWR2aBuB4yqbHj9RF7zXaAoGAxTXOiAD6U9DsOmhw6USB'
          }
        });
        const data = await response.json();
        this.photos = data.photos;
      } catch (error) {
        console.error('Erreur lors de la recherche des photos:', error);
      } finally {
        this.loading = false; // Arrête le chargement, que ce soit un succès ou une erreur
      }
    }
  }
}
</script>