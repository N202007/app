<!--模板-->
<template>
    <div>
        <Ad></Ad>
        <Index_Nav></Index_Nav>
        <Phiz></Phiz>
        <Index_Heard></Index_Heard>
        <Index_Carousel></Index_Carousel>
        <Hot></Hot>
        <AutoImage></AutoImage>
        <Index_Main></Index_Main>
        <Index_Foot></Index_Foot>
    </div>
</template>

<script>
    import Index_Nav from "@/views/Index_Nav";
    import Index_Heard from "@/views/Index_Heard";
    import Index_Carousel from "@/views/Index_Carousel";
    import Index_Main from "@/views/Index_Main";
    import Index_Foot from "@/views/Index_Foot";
    import Ad from '@/views/Ad';
    import Phiz from "@/views/Phiz";
    import AutoImage from "@/views/AutoImage";
    import Hot from "@/views/Hot";

    export default {
        data() {
            return {
                showAd: 'display: none'
            }
        },
        components: {
            Hot,
            Ad,
            Index_Nav,
            Index_Heard,
            Index_Carousel,
            AutoImage,
            Index_Main,
            Index_Foot,
            Phiz,
        }
    };
</script>

<!--样式-->
<style scoped>
    @media screen and (max-width: 800px) {
        div {
           display: none;
        }
    }
</style>