<template>
  <header>
    <h1>EPICFOCUS</h1>
  </header>
</template>

<script>
export default {
  name: "HeaderPart",
}
</script>

<style scoped>
header {
  background: #fff6f1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1%;
}

h1 {
  font-family: "Titan One", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 70px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 40px;
  }
}

@media (max-width: 300px) {
  h1 {
    font-size: 30px;
  }
}
</style>