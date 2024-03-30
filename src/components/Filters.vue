<template>
    <div class="filters">
      <select v-model="orientation" @change="filterChanged">
        <option value="">All orientations</option>
        <option value="landscape">Landscape</option>
        <option value="portrait">Portrait</option>
        <option value="square">Square</option>
      </select>
      <select v-model="size" @change="filterChanged">
        <option value="">All sizes</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <select v-model="selectedColor" @change="filterChanged">
        <option value="">All colors</option>
        <option class="color-option" v-for="(color, index) in colors" :key="index" :value="color.value" :style="{ backgroundColor: color.value }">
          {{ color.name }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Filters',
    data() {
      return {
        orientation: '',
        size: '',
        selectedColor: '',
        colors: [
          { name: 'Red', value: '#FF0000' },
          { name: 'Green', value: '#00FF00' },
          { name: 'Blue', value: '#0000FF' },
          { name: 'Orange', value: '#FFA500' },
          { name: 'Yellow', value: '#FFFF00' }
        ]
      };
    },
    mounted() {
      if (sessionStorage.getItem("searchOrientation")) {
        this.orientation = sessionStorage.getItem("searchOrientation");
      }
      if (sessionStorage.getItem("searchSize")) {
        this.size = sessionStorage.getItem("searchSize");
      }
      if (sessionStorage.getItem("searchColor")) {
        this.selectedColor = sessionStorage.getItem("searchColor");
      }
    },
    methods: {
      filterChanged() {
        this.$emit('filter-changed', {
          orientation: this.orientation,
          size: this.size,
          selectedColor: this.selectedColor
        });
        sessionStorage.setItem("searchOrientation", this.orientation);
        sessionStorage.setItem("searchSize", this.size);
        sessionStorage.setItem("searchColor", this.selectedColor);
      },
      setColor(color) {
        this.selectedColor = color;
        this.filterChanged();
      }
    }
  };
  </script>
  
  <style scoped>
  .color-box {
    display: flex;
  }
  
  .color-option {
    font-weight: bold;
  }
  
  .filters {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px; 
  padding: 20px;
  }
  </style>
  