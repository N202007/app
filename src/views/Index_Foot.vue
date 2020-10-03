<!--模板-->
<template>
    <div id="d1" class="container">
        <p>
            <a href="#" v-for="(item,index) in this.array1" :key="index">
                {{ item }}|
            </a>
        </p>
        <p>
            <a href="#" v-for="(item,index) in this.array2" :key="index">
                {{ item }}|
            </a>
        </p>
        <p>
            <a href="#" v-for="(item,index) in this.array3" :key="index">
                {{ item }}|
            </a>
        </p>
        <p>
            <a href="#" v-for="(item,index) in this.array4" :key="index">
                {{ item }}|
            </a>
        </p>
        <p>
            <a href="#" v-for="(item,index) in this.array5" :key="index">
                {{ item }}|
            </a>
        </p>
        <p>
            <a href="#">
                {{ this.array6[0] }}</a>
        </p>
        <hr/>
        <p>
            <a href="#">
                {{ this.array7[0] }}
            </a>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Index_Foot",
        data() {
            return {
                array1: ['互联中心', '金融投资', '支付管理', 'PP视频', '配送管理', '手机端', '线下云', '知识产权举报', '投资者关系', '智能处理', '云端产品'],
                array2: ['联系我们', '诚聘英才', '合作招商', '广告平台', '平台联盟', '平台招标', '隐私政策', '用户体验提升计划', '股东会员认证'],
                array3: ['Copyright© 2002-2020，Aurora集团股份有限公司版权所有', '湘公网安备 32010202010078号', '湘ICP备10207551号-4'],
                array4: ['合字B2-20180025', '合字A1.B1.B2-20180017', '出版物经营许可证新出发湘批字第A-243号', '互联网药品信息服务资格证书（湘）-非经营性-2016-0005'],
                array5: ['经营证照', '网络文化经营许可证：湘网文〔2018〕10580-203号', '互联网违法和不良信息举报邮箱：kfpt-yy@cnsuning.com', '举报电话：02566996699-865948'],
                array6: ['医疗器械网络交易服务第三方平台备案凭证-（湘）网械平台备字（2018）第00052'],
                array7: ['号本网站直接或间接向消费者推销商品或者服务的商业宣传均属于“广告”（包装及参数、售后保障等商品信息除外）'],
            }
        }
    }
</script>

<!--样式-->
<style scoped>
    #d1 {
        height: 200px;
        color: darkgray;
        text-align: center;
    }

    a{
        margin: 3px;
        color: slategrey;
    }

    p {
        font-size: 12px;
    }
</style>