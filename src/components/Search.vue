<template>
  <div>
    <header>
      <h1>EPICFOCUS</h1>
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
        <div class="color-box">
          <div v-for="(color, index) in colors" :key="index" class="color-option" :style="{ backgroundColor: color.value }" @click="setColor(color.value)"></div>
        </div>
      </div>
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
export default {
  name: 'Search',
  props: ['photos'],
  data() {
    return {
      photos: [],
      searchKeyword: '',
      orientation: '',
      size: '',
      loading: false,
      selectedColor: '',
      colors: [
        { name: 'Rouge', value: '#FF0000' },
        { name: 'Vert', value: '#00FF00' },
        { name: 'Bleu', value: '#0000FF' },
        { name: 'Orange', value: '#FFA500' },
        { name: 'Jaune', value: '#FFFF00' }
      ]
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
        if (this.selectedColor) {
          apiUrl += `&color=${this.selectedColor}`;
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
    setColor(color) {
      this.selectedColor = color;
      this.searchPhotos();
    },
    viewPhoto(photoId) {
      // Naviguer vers une nouvelle page avec l'ID de la photo
      this.$router.push({ name: 'FullPhoto', params: { id: photoId } });}
  },
  
  

  mounted() {
    this.searchPhotos(); // Appeler la fonction searchPhotos() lorsque le composant est monté pour afficher les photos par défaut à l'ouverture du site
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

