<template>
  <div>
    <header>
      <h1>EPICFOCUS</h1>
      <div class="search">
        <input type="text" v-model="searchKeyword" @input="handleSearch" placeholder="Search for vintage images">
      </div>
    </header>
    <body>
      <Filters @filter-changed="searchPhotos" />
      <div class="photo-gallery">
        <div v-if="loading" class="loading">Loading...</div>
        <div v-else class="flex-container">
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
      savedScrollPosition: 0
    };
  },
  
  mounted() {
    if (sessionStorage.getItem("searchKeyword")) {
      this.searchKeyword = sessionStorage.getItem("searchKeyword");
    } 

     const filters = {
       orientation: sessionStorage.getItem("searchOrientation"),
       size: sessionStorage.getItem("searchSize"),
       selectedColor: sessionStorage.getItem("searchColor")
     };   

    this.searchPhotos(filters);
    // Restaurer la position de défilement lorsque le composant est monté
    this.$nextTick(() => {
      window.scrollTo(0, this.savedScrollPosition);
    });
  },

  methods: {
    async handleSearch(){
console.log(this.searchKeyword);
      sessionStorage.setItem("searchKeyword", this.searchKeyword);

      await this.searchPhotos();

    },
    async searchPhotos(filters) {
      try {
        this.loading = true; 
        let apiUrl = `https://api.pexels.com/v1/search?query=35mm ${this.searchKeyword}&per_page=80`;
        if (filters?.orientation) {
          apiUrl += `&orientation=${filters.orientation}`;
        }
        if (filters?.size) {
          apiUrl += `&size=${filters.size}`;
        }
        if (filters?.selectedColor) {
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
  },
  beforeRouteLeave(to, from, next) {
    // Enregistrer la position de défilement avant de quitter le composant
    this.savedScrollPosition = window.scrollY;
    next();
  }
  }
}
</script>

<style scoped>
header{
    background-color:#fff6f1;
    text-align: center;
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
  box-shadow: 7px 7px #000000;
}

.search {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}


.photographer-name {
  position:absolute;
  left: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #000000;
  padding: 5px;
  font-size: 12px;
  display: none;
}

.photo-card:hover .photographer-name {
  display: block;
}

.photo-card {
  width:min-content;
  padding: 5px;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
