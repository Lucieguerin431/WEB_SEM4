<script setup>
defineProps({
  
})
</script>

<template>
    <div>
        coucou je suis lapi de lulu
    </div>
</template>


<style>
</style>

<script>
import { createClient } from 'pexels';

const client = createClient('udjXtzs8O2CXWR2aBuB4yqbHj9RF7zXaAoGAxTXOiAD6U9DsOmhw6USB');

client.photos.show({ id: 3225517 }).then(photo => 
    console.log(photo))


</script>