<script setup>
defineProps({
  
})
</script>


<template>
    <header>
        <h1>EPICFOCUS</h1>
        <div class="search-container">
        <input type="text" placeholder="Search.." name="search">
        <button type="submit"><i class="fa fa-search">SEARCH</i></button>
        </div>
    </header>
        <div>
        </div>
</template>


<style>
header{
    background-color:#FFF2EA;
}
</style>

<script>
import { createClient } from 'pexels';

const client = createClient('udjXtzs8O2CXWR2aBuB4yqbHj9RF7zXaAoGAxTXOiAD6U9DsOmhw6USB');

client.photos.show({ id: 3225517 }).then(photo => 
    console.log(photo))


</script>