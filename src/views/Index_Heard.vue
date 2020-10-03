<!--头部组件-->
<template>
    <div>
        <div class="container mt-4">
            <!--logo start-->
            <a class="navbar-brand" href="#">
                <a class="navbar-brand" href="/" id="welcome">
                    <em class="lead">Welcome</em>
                </a>
            </a>
            <!--logo end-->
            <!--搜索框开始-->
            <input type="text" autocomplete="off" class="text ml-5" id="find">
            <button class="button" id="btn1">
                <strong>
                    <svg id="svg" width="18px" height="18px" viewBox="0 0 16 16" class="bi bi-search"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                        <path fill-rule="evenodd"
                              d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                    </svg>
                </strong>
            </button>
            <!--搜索框结束-->
            <!--我的订单开始-->
            <button type="button" id="myOrder" class="btn btn-outline-light">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg>
                <span class="badge badge-danger" id="count">0</span>
                <span class="ml-3">我的订单</span>
            </button>
            <!--我的订单结束-->
            <!--我的二维码结束-->
            <div id="contactUs" @mousemove="showAll">
                <a>
                    <img src="../assets/contactUs/me.jpg">
                </a>
            </div>
            <div id="show" :style="this.$store.state.showStatus" @mouseleave="hideAll">
                <span>当前在线客服</span>
                <div class="d-flex justify-content-between" v-for="(item,index) in this.manualCustomerService"
                     :key="index">
                    <img src="../assets/contactUs/1.png" class="card-img-top" alt="...">
                    <div class="d-flex flex-column bd-highlight">
                        <span>{{ item.desc }}</span>
                        <span>
                            QQ：
                            <a href="#">
                                {{ item.QQ }}
                            </a>
                        </span>
                        <span>
                            TEL：
                            <a href="#">
                            {{ item.TEL }}
                        </a>
                        </span>
                    </div>
                </div>
            </div>
            <!--我的二维码结束-->
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "Index_Heard",
        methods: {
            showAll: function () {
                this.$store.state.showStatus = 'display: block'
            },
            hideAll: function () {
                this.$store.state.showStatus = 'display: none'
            }
        },
        computed: {
            ...mapState(['manualCustomerService'])
        }
    }
</script>

<!--样式-->
<style scoped>
    /*****************二维码样式控制****************/
    #show {
        z-index: 201;
        width: 200px;
        height: 350px;
        background-color: lightgrey;
        position: absolute;
        margin-top: -88px;
        margin-left: 920px;
    }

    #show > span {
        margin-left: 40px;
    }

    #show > div > img {
        width: 60px;
        height: 60px;
        margin-top: 0;
        border-radius: 30px;
    }

    #show > div > div {
        font-size: 12px;
        color: #CC00FF;
    }

    #show > span {
        font-size: 12px;
        color: #fa075c;
        text-align: center;
    }

    #show > div {
        margin-top: 10px;
    }

    #contactUs {
        width: 70px;
        height: 70px;
        float: right;
    }

    #contactUs > a > img {
        width: 68px;
        height: 68px;
    }

    /*****************搜索框样式控制****************/
    #svg {
        color: white;
        width: 20px;
        height: 20px;
        font-size: 15px;
    }

    #find {
        width: 490px;
        height: 40px;
        border: 2px solid red;

    }

    #find:focus {
        outline: none;
    }

    #btn1:focus {
        outline: none;
    }

    #btn1:hover {
        outline: none;
        background-color: #25cc00;
    }

    #btn1 {
        width: 80px;
        height: 40px;
        margin-top: 1px;
        border: 2px solid red;
        background-color: red;
    }

    /*****************我的订单样式控制****************/
    #count {
        width: 15px;
        height: 10px;
        line-height: 5px;
        position: relative;
        margin-top: -20px;
    }

    #myOrder {
        margin-left: 30px;
        height: 40px;
        margin-top: -5px;
        color: #f30a6f;
        width: 150px;
    }

    #myOrder:hover {
        border: 1px solid red;
    }

    #myOrder > svg {
        font-size: 18px;
        margin-top: -5px;
    }

    /*****************艺术字样式控制****************/
    .lead {
        background-image: -webkit-linear-gradient(left, #f30a6f, #66ffff 10%, #ff8c00 20%, #25cc00 30%, #CCCCFF 40%, #00FFFF 50%, #CCCCFF 60%, #CC00CC 70%, #CC00FF 80%, #66FFFF 90%, blue 100%);
        -webkit-text-fill-color: transparent; /* 将字体设置成透明色 */
        -webkit-background-clip: text; /* 裁剪背景图，使文字作为裁剪区域向外裁剪 */
        -webkit-background-size: 200% 100%;
        -webkit-animation: masked-animation 4s linear infinite;
        font-size: 30px;

    }

    @keyframes masked-animation {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: -100% 0;
        }
    }
</style>