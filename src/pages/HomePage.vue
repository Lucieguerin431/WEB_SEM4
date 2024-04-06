<template>
    <HeaderPart />
    <SearchPart />
    <FooterPart />
</template>

<script>
import HeaderPart from '../components/HeaderPart.vue';
import SearchPart from '../components/SearchPart.vue';
import FooterPart from '../components/FooterPart.vue';


export default {
    name: "HomePage",
    components: {
        HeaderPart,
        SearchPart,
        FooterPart
    }
}
</script>
