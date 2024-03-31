<template>
    <HeaderPart/>
    <FullPhoto />
    <FooterPart />
</template>
  
    <script>
    import HeaderPart from '../components/HeaderPart.vue';
    import FullPhoto from '../components/FullPhoto.vue';
    //import Filters from '../components/Filters.vue';
    import FooterPart from '../components/FooterPart.vue';
    
    
    export default {
        name: "HomePage",
        components: {
        HeaderPart,
        FullPhoto,
        //Filters,
        FooterPart
        }
    }
    </script>