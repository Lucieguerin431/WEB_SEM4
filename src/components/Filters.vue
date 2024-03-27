<template>
    <div>
      <select v-model="orientation" @change="filterChanged">
        <option value="">Toutes les orientations</option>
        <option value="landscape">Landscape</option>
        <option value="portrait">Portrait</option>
        <option value="square">Square</option>
      </select>
      <select v-model="size" @change="filterChanged">
        <option value="">Toutes les tailles</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <div class="color-box">
        <div v-for="(color, index) in colors" :key="index" class="color-option" :style="{ backgroundColor: color.value }" @click="setColor(color.value)"></div>
      </div>
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
          { name: 'Rouge', value: '#FF0000' },
          { name: 'Vert', value: '#00FF00' },
          { name: 'Bleu', value: '#0000FF' },
          { name: 'Orange', value: '#FFA500' },
          { name: 'Jaune', value: '#FFFF00' }
        ]
      };
    },
    methods: {
      filterChanged() {
        this.$emit('filter-changed', {
          orientation: this.orientation,
          size: this.size,
          selectedColor: this.selectedColor
        });
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
    width: 30px;
    height: 30px;
    margin-right: 10px;
    cursor: pointer;
  }
  </style>
  