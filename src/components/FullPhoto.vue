<template>
  <div class="photo-container">
    <img :src="photoUrl" :alt="photo ? photo.photographer: 'Photo'">
  </div>
</template>

<script>
export default {
  name: 'FullPhoto',
  props: {
    id: String
  },
  data() {
    return {
      photo: null,
    };
  },
  computed: {
    photoUrl() {
      return this.photo ? this.photo.src.large : '';
    },
  },
  async mounted() {
    try {
      const response = await fetch(`https://api.pexels.com/v1/photos/${this.id}`, {
        headers: {
          'Authorization': 'udjXtzs8O2CXWR2aBuB4yqbHj9RF7zXaAoGAxTXOiAD6U9DsOmhw6USB'
        }
      });
      const data = await response.json();
      this.photo = data;
    } catch (error) {
      console.error('Erreur lors du chargement de la photo:', error);
    }
  },
};
</script>

<style scoped>
.photo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.photo-container img {
  max-width: 100%;
  max-height: 100%;
}
</style>
