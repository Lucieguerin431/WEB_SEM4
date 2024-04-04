<template>
    <HeaderPart/>
    <Search />
    <Filters/>
    <FooterPart />
</template>
  
    <script>
    import HeaderPart from '../components/HeaderPart.vue';
    import Search from '../components/Search.vue';
    import Filters from '../components/Filters.vue';
    import FooterPart from '../components/FooterPart.vue';
    
    
    export default {
        name: "HomePage",
        components: {
        HeaderPart,
        Search,
        Filters,
        FooterPart
        }
    }
    </script>
