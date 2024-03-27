<template>
  <div>
    <header>
      <h1>EPICFOCUS</h1>
      <div class="search">
        <input type="text" v-model="searchKeyword" @input="searchPhotos" placeholder="Search for vintage images">
      </div>
    </header>
    <body>
      <Filters @filter-changed="searchPhotos" />
      <div class="photo-gallery">
        <div v-if="loading" class="loading">Chargement en cours...</div>
        <div v-else>
          <div v-for="(photo, index) in photos" :key="index" class="photo-card" @click="viewPhoto(photo.id)">
              <img :src="photo.src.medium" :alt="photo.photographer" >
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import Filters from './Filters.vue';
export default {
  name: 'Search',
  components: {
    Filters
  },
  props: ['photos'],
  data() {
    return {
      photos: [],
      searchKeyword: '',
      loading: false,
    };
  },
  
  mounted() {
    this.searchPhotos(); // Appeler la fonction searchPhotos() lorsque le composant est monté pour afficher les photos par défaut à l'ouverture du site
  },

  methods: {
    async searchPhotos(filters) {
      try {
        this.loading = true; 
        let apiUrl = `https://api.pexels.com/v1/search?query=35mm ${this.searchKeyword}&per_page=30`;
        if (filters.orientation) {
          apiUrl += `&orientation=${filters.orientation}`;
        }
        if (filters.size) {
          apiUrl += `&size=${filters.size}`;
        }
        if (filters.selectedColor) {
          apiUrl += `&color=${filters.selectedColor}`;
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
    },
    viewPhoto(photoId) {
      // Naviguer vers une nouvelle page avec l'ID de la photo
      this.$router.push({ name: 'FullPhoto', params: { id: photoId } });
    }
  }


}
</script>

<style scoped>
header{
    background-color:#fff6f1;
}

body{
    background-color:#fff6f1;
}

img {
  border : 3px solid #000000;
  cursor: pointer;
}

input[type=text]{
  width: 70%;
  height: 3rem;
  border: 2px solid #000000;
  background-color: #E3622E;
}

.color-box {
  display: flex;
}

.color-option {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;
}

</style>

