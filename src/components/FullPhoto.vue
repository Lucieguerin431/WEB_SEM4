<template>
  <div>
    <router-link to="/" class="back-arrow">&#8592;</router-link>
  </div>
  <div class="photo-container">
    <img :src="photoUrl" :alt="photo ? photo.photographer : 'Photo'">
  </div>
  <div class="photo-info">
    <h2>Photo details</h2>
    <table>
      <tr>
        <th>Photographer</th>
        <th>Width</th>
        <th>Height</th>
        <th>Average Color</th>
      </tr>
      <tr>
        <td><a :href="photo ? photo.photographer_url : '#'" target="_blank">{{ photo ? photo.photographer : '-' }}</a></td>
        <td>{{ photo ? photo.width : '-' }}</td>
        <td>{{ photo ? photo.height : '-' }}</td>
        <td><span class="color-sample" :style="{ backgroundColor: photo ? photo.avg_color : '#ffffff' }"></span></td>
      </tr>
    </table>
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
  beforeRouteLeave(to, from, next) {
    // Scroll jusqu'en haut de la page avant de quitter la route
    window.scrollTo(0, 0);
    next();
  }
};
</script>

<style scoped>
.photo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo-container img {
  max-width: 100%;
  max-height: 100%;
  height: auto;
}

.photo-info {
  margin-top: 15px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 15px;
  border: 2px solid #000000;
}
td {
  text-align: center;
}
th {
  font-weight: bold;
}

.color-sample {
  display: inline-block;
  width: 6rem;
  height: 1rem;
  border: 1px solid #000000;
  vertical-align: middle;
  margin-right: 5px;
}

img {
  border: 3px solid black;
}

.back-arrow {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  text-decoration: none;
}
</style>
