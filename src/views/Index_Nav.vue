<!--导航栏-->
<template>
    <div>
        <!--导航栏开始-->
        <nav class="navbar navbar-expand-sm">
            <div class="container">
                <!--移动端导航栏按钮start-->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!--移动端导航栏按钮end-->
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <!--定位图标开始-->
                        <div id="positioning" data-toggle="dropdown">
                            <svg viewBox="0 0 16 16" class="bi bi-geo-alt-fill" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <span id="context">
                                <a href="#">
                                    {{ nowArea }}
                                </a>
                            </span>
                        </div>
                        <!--定位图标结束-->
                        <!--遍历所有省份开始-->
                        <div class="dropdown-menu" id="dropdown_Area">
                            <a class="dropdown-item" href="#">
                                <div style="display: inline" v-for="(item,index) in this.$store.state.allProvince"
                                     :key="index">
                                    <button type="button" id="btn" class="btn btn-light" @click="area(index)">{{ item }}
                                    </button>
                                </div>
                            </a>
                        </div>
                        <!--遍历所有省份结束-->
                        <li class="nav-item ">
                            <!--nav主子元素-->
                            <div class="d-flex justify-content-end" id="childLink">
                                <!--登录注册开始-->
                                <div class="user">
                                    <a class="nav-link" href="#">
                                        <em>
                                            <div v-if="2>1">
                                                <!--                                            <div v-if="2<1" class="user">-->
                                                <a href="/app" id="login">你好，请登录</a>
                                                <a href="/register" id="register">免费注册</a>
                                            </div>
                                            <!---------------------------------------------------------------------------------------------------------------------->
                                            <div v-else id="user">
                                                <button type="button" disabled class="ml-2">
                                                    <img src="../assets/background/1.jpg"/>
                                                    <a href="#">
                                                        你好，UserName
                                                    </a>
                                                </button>
                                            </div>
                                        </em>
                                    </a>
                                </div>
                                <!--登录注册结束-->
                                <!--我要点餐开始-->
                                <div>
                                    <a class="nav-link" href="#">
                                        <em>
                                            <a href="#">我要点餐</a>
                                        </em>
                                    </a>
                                </div>
                                <!------整合功能添加区域-------------------->

                                <!--我要点餐结束-->
                                <!--招商合作开始-->
                                <div>
                                    <a class="nav-link" href="#">
                                        <em>
                                            <a href="#">招商合作</a>
                                        </em>
                                    </a>
                                </div>
                                <!--招商合作结束-->
                                <!--客户服务开始-->
                                <div>
                                    <a class="nav-link" href="#">
                                        <em>
                                            <a href="#" id="contactUs" @mouseout="hideAll" @mousemove="showAll">客服中心</a>
                                        </em>
                                    </a>
                                </div>
                                <!--客户服务结束-->
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!--导航栏结束-->
    </div>
</template>
<script>
    import {mapState} from 'vuex'

    export default {
        name: "Index_Nav",
        data() {
            return {
                nowArea: '湖南省'
            }
        },
        methods: {
            /**切换地区**/
            area: function (i) {
                this.nowArea = this.allProvince[i];
            },
            /**联系我们**/
            showAll: function () {
                this.$store.state.showStatus = 'display: block'
            },
            hideAll: function () {
                this.$store.state.showStatus = 'display: none'
            }
        },
        computed: {
            ...mapState(['allProvince'])
        }
    }
</script>

<!--样式-->
<style scoped>
    /*****************导航栏样式控制****************/
    nav {
        max-height: 30px;
        line-height: 1px;
        background-color: rgba(200, 200, 200, 0.4);
    }

    /*****************移动端导航栏样式控制****************/
    .navbar-toggler {
        background-color: #CCCCFF;
        height: 20px;
        border: transparent;
        color: black;
    }

    .navbar-toggler:focus {
        outline: transparent;
    }

    /*****************定位样式控制****************/
    #dropdown_Area {
        position: absolute;
        margin-left: 21%;
        margin-top: 0;
        width: 400px;
        height: 500px;
    }

    #btn {
        font-size: 12px;
        width: 110px;
        height: 25px;
        text-align: center;
        float: left;
        margin-left: 4px;
        margin-top: 4px;
    }

    #btn:hover {
        color: #f30a6f;
    }

    svg {
        width: 16px;
        height: 15px;
        color: #f30a6f;
    }

    #positioning {
        width: 200px;
        height: 17px;
        margin-top: 5px;
    }

    #context {
        height: 22px;
        font-size: 13px;
        margin-top: 10px;
    }

    /*****************导航栏全体子组件样式控制****************/
    #childLink {
        width: 925px;
        height: 28px;
        margin-left: 1px;
        line-height: 10px;
        font-size: 14px;
    }

    #childLink > div {
        margin-left: 10px;
    }

    /*****************登陆注册样式控制****************/
    #user {
        margin-top: -7px;
    }

    img {
        width: 25px;
        height: 25px;
        border-radius: 12px;
    }

    #user > button {
        background-color: transparent;
        border: transparent;
    }

    #register {
        margin-left: 12px;
        color: #f30a6f;
    }

    #login {
        color: rgba(118, 118, 118, 0.43);
    }

    #login:hover {
        color: #f30a6f;
    }

    @media screen and (max-width: 995px) {
        #childLink {
            background-color: darkorange;
            width: 200px;
            height: 28px;
            margin-left: 1px;
            line-height: 10px;
            font-size: 14px;
        }
    }

    /*****************统一a标签样式控制****************/
    a {
        text-decoration: none;
        color: #747474;
    }

    /* 正常的未被访问过的链接*/
    a:link {
        text-decoration: none;
        color: darkorange;
    }

    /*指鼠标在链接*/
    a:hover {
        text-decoration: none;
        color: #f30a6f;
    }

    /* 正在点的链接*/
    a:active {
        text-decoration: none;
        color: #a304fa;
    }
</style>