<template>
    <div>
      <img :src="photo.src.large" :alt="photo.photographer">
      <!-- D'autres éléments ou informations sur la photo peuvent être ajoutés ici -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      photo: Object // Propriété pour recevoir la photo à afficher en grand
    },
    // Vous pouvez ajouter d'autres fonctionnalités ici selon vos besoins
  }
  </script>
  
  <style scoped>
  /* Styles pour afficher la photo en grand */
  </style>
  