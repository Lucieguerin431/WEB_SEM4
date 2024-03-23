<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="photo-card" @click="viewPhoto">
    <img :src="photo.src.medium" :alt="photo.photographer">
  </div>
</template>

<script>
export default {
  props: {
    photo: Object // Propriété pour passer la photo à partir du composant parent
  },
  methods: {
    viewPhoto() {
      // Émettre un événement pour informer le composant parent qu'une photo a été sélectionnée
      this.$emit('photo-selected', this.photo);
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

img {
  border : 3px solid #000000;
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
