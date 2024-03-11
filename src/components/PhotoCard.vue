<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="photo-gallery">
    <div v-for="(photo, index) in photos" :key="index" class="photo-card">
      <img :src="photo.src.medium" :alt="photo.photographer">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoGallery',
  data() {
    return {
      photos: []
    };
  },
  mounted() {
    // Appel à l'API de Pexels pour récupérer les photos de film
    this.fetchFilmPhotos();
  },
  methods: {
    async fetchFilmPhotos() {
      try {
        const response = await fetch('https://api.pexels.com/v1/search?query=35mm&per_page=50', {
          headers: {
            'Authorization': 'udjXtzs8O2CXWR2aBuB4yqbHj9RF7zXaAoGAxTXOiAD6U9DsOmhw6USB'
          }
        });
        const data = await response.json();
        this.photos = data.photos;
      } catch (error) {
        console.error('Erreur lors de la récupération des photos de 35mm:', error);
      }
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}



h3 {
  font-size: 1.2rem;
}


.photo-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
</style>
