<template>
    <div>
      <header>
        <div class="search">
          <input type="text" :value="searchKeyword" @input="updateSearch" placeholder="Search for vintage images">
        </div>
      </header>
    </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: ['searchKeyword'],
  methods: {
    updateSearch(event) {
        const value = event.target.value;
        this.$emit('update:searchKeyword', value);
        this.$emit('search', value);
    }
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

img {
  border : 3px solid #000000;
  cursor: pointer;
}

input[type=text]{
  width: 70%;
  height: 3rem;
  border: 2px solid #000000;
  background-color: #E3622E;
  box-shadow: 7px 7px #000000;
}

.search {
  display: flex;
  justify-content: center;
  margin-top: 20px;
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

