<!--轮播图-->
<template>
    <div id="d3" class="mt-5">
        <div class="container">
            <div id="carouselExampleInterval" class=" carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-interval="10000">
                        <img src="../assets/carousel/1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item" data-interval="2000">
                        <img src="../assets/carousel/3.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index_Carousel",
        created() {

        }
    }
</script>

<!--样式-->
<style scoped>
    #d3{
        z-index: 100;
        width: 100%;
        background-color: transparent;
        background-image: url("../assets/background/0.png");
    }
    img {
        vertical-align: middle;
    }

    .carousel {
        border: 1px solid white;
    }
</style>