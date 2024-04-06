<script setup>
</script>

<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: #fff6f1;
  font-family: Arial, Helvetica, sans-serif;
  border: 2px black solid;
}
</style>

<script>
export default {
  name: 'App',
  data() {
    return {
      photos: []
    };
  },
}
</script>