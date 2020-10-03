<!--热门推荐-->
<template>
    <div class="mt-1" id="d4">
        <div class="jumbotron">
            <div class="container">
                <em>美食鉴赏</em>
                <hr/>
                <div class="row">
                    <div class="card" v-for="(item,index) in this.group1" :key="index">
                        <a href="#">
                            <img :src="require('@/assets/group1/'+item.no+'.jpg')" class="card-img-top">
                            <span>{{ item.disc }}</span>
                            <p class="card-text" id="price">{{ item.price }}</p>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="card" v-for="(item,index) in this.group2" :key="index">
                        <a href="#">
                            <img :src="require('@/assets/group2/'+item.no+'.png')" class="card-img-top">
                            <span>{{ item.disc }}</span>
                            <p class="card-text" id="price2">{{ item.price }}</p>
                        </a>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="container" id="d1">
                <div class="row">
                    <div class="col-lg-2" v-for="(item,index) in this.statement" :key="index">
                        <p><strong>{{ item.title }}</strong></p>
                        <div v-for="(t,i) in item.contexts" :key="i">
                            <p>
                                <a href="#" id="d2">
                                    {{ t }}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Index_Main",
        computed:{
            ...mapState(['statement','group1','group2'])
        }
    }
</script>

<!--样式-->
<style scoped>
    #d4{
    }
    .jumbotron {
        height: auto;
    }

    a {
        outline: none;
        text-decoration: none;
    }

    #d2 {
        font-size: 12px;
        color: #f30a6f;
    }

    #d1 {
        text-align: start;

    }

    .card {
        width: 24%;
        margin: auto;
        background-color: transparent;
        border: 0px;
    }

    #price, #price2 {
        color: red;
        margin-top: 3px;
    }

    em {
        color: red;
        font-size: 20px;
    }

    .container {
        text-align: center;
    }
    span{
        color: black;
        font-size: 16px;
    }
</style>