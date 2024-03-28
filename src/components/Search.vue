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
          <div v-for="(photo, index) in sortedPhotos" :key="index" class="photo-card" @click="viewPhoto(photo.id)">
              <img :src="photo.src.medium" :alt="photo.photographer" @mouseover="showPhotographer(photo)" @mouseleave="hidePhotographer(photo)" @mousemove="updatePosition($event, photo)">
              <div class="photographer-name" v-if="photo.showPhotographer" :style="{ top: photo.mouseY + 'px', left: photo.mouseX + 'px'}">{{ photo.photographer }}</div>
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
      sortedPhotos: [],
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
          apiUrl += `&color=${filters.selectedColor.replace('#', '')}`;
        }
        const response = await fetch(apiUrl, {
          headers: {
            'Authorization': 'udjXtzs8O2CXWR2aBuB4yqbHj9RF7zXaAoGAxTXOiAD6U9DsOmhw6USB'
          }
        });
        const data = await response.json();
        this.photos = data.photos.map(photo => ({ ...photo, showPhotographer: false, mouseX: 0, mouseY: 0 }));
        this.sortedPhotos = [...this.photos].sort((a, b) => a.photographer.localeCompare(b.photographer));
      } catch (error) {
        console.error('Erreur lors de la recherche des photos:', error);
      } finally {
        this.loading = false; 
      }
    },
    viewPhoto(photoId) {
      // Naviguer vers une nouvelle page avec l'ID de la photo
      this.$router.push({ name: 'FullPhoto', params: { id: photoId } });
    },
    showPhotographer(photo) {
      photo.showPhotographer = true;
    },
    hidePhotographer(photo) {
      photo.showPhotographer = false;
    },
    updatePosition(event, photo) {
    const rect = event.target.getBoundingClientRect();
    const mouseX = event.clientX + 10; //+ 10 pour que le texte ne soit pas cacher par la souris
    const mouseY = event.clientY + 10; 
    photo.mouseX = mouseX + window.scrollX; 
    photo.mouseY = mouseY + window.scrollY; 
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

.photographer-name {
  position: absolute;
  left: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1;
  display: none;
}

.photo-card:hover .photographer-name {
  display: block;
}


</style>
