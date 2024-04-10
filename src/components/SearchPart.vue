<template>
  <div>
    <header>
      <search-bar :search-keyword="searchKeyword" @update:search-Keyword="handleSearch" />
    </header>
    <body>
      <Filters @filter-changed="searchPhotos" />
      <photo-gallery :loading="loading" :sorted-photos="sortedPhotos" />
    </body>
  </div>
</template>

<script>
import Filters from './Filters.vue';
import SearchBar from './SearchBar.vue';
import PhotoGallery from './PhotoGallery.vue';

export default {
  name: 'SearchPart',
  components: {
    Filters,
    SearchBar,
    PhotoGallery
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
    
    let filters = {};

    if (sessionStorage.getItem("searchOrientation")) {
        filters.orientation = sessionStorage.getItem("searchOrientation");
    }
    if (sessionStorage.getItem("searchSize")) {
        filters.size = sessionStorage.getItem("searchSize");
    }
    if (sessionStorage.getItem("searchColor")) {
        filters.selectedColor = sessionStorage.getItem("searchColor");
    }

    if (Object.keys(filters).length > 0) {
        this.searchPhotos(filters);
    }
    else {
        this.searchPhotos();
    }
  },
  methods: {
    async handleSearch(value){
      this.searchKeyword = value;
      sessionStorage.setItem("searchKeyword", this.searchKeyword);

      await this.searchPhotos();
    },
    async searchPhotos(filters) {
      try {
        this.loading = true; 
        let apiUrl = `https://api.pexels.com/v1/search?query=35mm ${this.searchKeyword}&per_page=80`;
        
        if (filters) {
          if(filters?.orientation){
            apiUrl += `&orientation=${filters?.orientation}`;
          }
          if(filters?.size){
            apiUrl += `&size=${filters?.size}`;
          }
          if(filters?.selectedColor){
            apiUrl += `&color=${filters?.selectedColor.replace('#','')}`;
          }
          console.log(apiUrl);
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
        console.error('Error searching for photos:', error);
      } finally {
        this.loading = false; 
      }
    },
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
</style>
