<template>
  <div class="photo-gallery">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else class="flex-container">
      <div v-for="(photo, index) in sortedPhotos" :key="index" class="photo-card" @click="viewPhoto(photo.id)">
        <img :src="photo.src.medium" :alt="photo.photographer" @mouseover="showPhotographer(photo)" @mouseleave="hidePhotographer(photo)" @mousemove="updatePosition($event, photo)">
        <div class="photographer-name" v-if="photo.showPhotographer" :style="{ top: photo.mouseY + 'px', left: photo.mouseX + 'px'}">{{ photo.photographer }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoGallery',
  props: ['loading', 'sortedPhotos'],
  methods: {
    viewPhoto(photoId) {
      // Naviguer vers une nouvelle page avec l'ID de la photo
      this.$router.push({ name: 'PhotoPage', params: { id: photoId } });
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
  }
}
</script>

<style scoped>
img {
  border : 3px solid #000000;
  cursor: pointer;
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


.loading {
  text-align: center;
  font-size: 6rem;
  margin-top: 40px;
}
</style>
