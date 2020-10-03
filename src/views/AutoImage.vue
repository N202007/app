<!--模板-->
<template>
    <div class="container mt-3">
        <img src="../assets/autoImage/main.png"/>
        <div id="sm" class="container">    <!--滚动div-->
            <table>        <!--外表格1x2,且第2单元格是空的-->
                <td id="pic1">
                    <table>    <!--内表格1x9,存放9张图片-->
                        <tr>
                            <td class="desc" v-for="(item,index) in this.autoImage" :key="index"
                                @mouseenter="stopScroll(this)" @mouseleave="startScroll(this)">
                                <p v-if="index%2===0" :style="up">{{ item.desc }}</p>
                                <img :src="require('@/assets/autoImage/'+item.no+'.webp')" id="img"/>
                                <p v-if="index%2!==0" :style="up">{{ item.desc }}</p>
                            </td>
                        </tr>
                    </table>
                </td>
                <td id="pic2"></td>
            </table>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "AutoImage",
        data() {
            return {
                /**定时器**/
                myMar: null,
                /**字体风格**/
                up:'color:darkorange'
            }
        },
        mounted() {
           this.startScroll();
        },
        methods: {
            startScroll: function () {
                /**开始滚动**/
                let pic2 = document.querySelector("#pic2")
                let pic1 = document.querySelector("#pic1")
                let sm = document.querySelector("#sm")
                pic2.innerHTML = pic1.innerHTML;//复制一组图片，但被隐藏
                function scrolltoLeft() {//定义向左移动的方法
                    sm.scrollLeft++;//改变层的水平坐标，实现向左移动
                    if (sm.scrollLeft >= pic1.scrollWidth)//需要复位
                        sm.scrollLeft = 0;//层的位置复位，浏览器窗口的宽度有限的
                }
                this.myMar = setInterval(scrolltoLeft, 30); //定时器，方法名后不可加()
                this.up='color:darkorange'
            },
            stopScroll: function () {
                /**停止滚动**/
                clearInterval(this.myMar);//停止滚动
                this.up='color:red'
            },
        },
        computed: {
            ...mapState(['autoImage'])
        }
    }
</script>

<!--自动滚动图片样式-->
<style scoped>
    .desc {
        text-align: center;
    }

    .container {
        height: 261px;
    }

    #img {
        margin-left: 40px;
        height: 150px;
        margin-right: 40px;
    }

    #pic2 > table > tr > td > img {
        margin-left: 20px;
        margin-right: 20px;
        height: 150px;
    }

    #sm { /*滚动对象样式*/
        float: right;
        overflow: hidden; /*隐藏Div中多余的内容，增加图片会一起滚动*/
        width: 915px;
        height: 261px;
        line-height: 60px;
        margin-left: 3px;
    }
</style>