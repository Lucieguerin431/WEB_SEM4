<template>
    <HeaderPart/>
    <FullPhoto :id="photoId"/>
    <FooterPart />
</template>
  
<script>
import HeaderPart from '../components/HeaderPart.vue';
import FullPhoto from '../components/FullPhoto.vue';
import FooterPart from '../components/FooterPart.vue';
    
    
export default {
    name: "HomePage",
    props: {
    id: String
    },
    components: {
    HeaderPart,
    FullPhoto,
    FooterPart
    },
    data() {
    return {
        photoId: this.$route.params.id,
        };
    },
}
</script>