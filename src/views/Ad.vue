<!--模板-->
<template>
    <div>
        <!-- 广告图片开始 -->
        <div :style="adImageStatus">
            <button id="btn" @click="closeAd">X</button>
            <img src="../assets/ad/3.png" @click="toDescShow" data-toggle="modal" data-target="#exampleModal"/>
        </div>
        <!-- 广告图片结束 -->

        <!--广告视频开始-->
        <!--广告音频开始-->
        <video id="video" :style="videoStatus" muted autoplay="autoplay" preload="auto" @ended="endPlay">
            <source src="../assets/video/1.mp4"/>
        </video>
        <audio id="audio">
            <source src="../assets/video/1.mp4"/>
        </audio>
        <!--广告视频结束-->
        <!--广告音频结束-->
    </div>
</template>

<script>
    export default {
        name: "Ad",
        data() {
            return {
                /**广告图初始状态标记**1：显示***0：隐藏**/
                adStatusFlag: 1,
                /**广告视频初始状态**1：显示***0：隐藏**/
                videoStatusFlag: 0
            }
        },
        methods: {
            /**关闭广告主体按钮事件**/
            closeAd: function () {
                this.adStatusFlag = 0
            },
            /**转跳广告详情按钮事件**/
            toDescShow: function () {
                this.videoStatusFlag = 1;
                /**播放声音**/
                this.startAudio();
            },
            /**视频播放结束事件：推出播放窗口**/
            endPlay: function () {
                this.videoStatusFlag = 0;
                this.adStatusFlag = 0;
               window.open('https://www.olay.com.cn/?utm_source=baidu&utm_medium=brandzone&utm_channel=OLAY');
            },
            startAudio: function () {
                document.querySelector('audio').play();
            }
        },
        computed: {
            /**更新广告图状态**/
            adImageStatus: function () {
                if (this.adStatusFlag === 0) {
                    return 'display:none';
                }
                return 'display:block';
            },
            /**更新广告视频状态**/
            videoStatus: function () {
                if (this.videoStatusFlag === 0) {
                    return 'display:none';
                }
                return 'display:block';
            }
        }
    }
</script>

<!--样式-->
<style scoped>
    #video {
        background-color: #25cc00;
        width: 860px;
        height: 480px;
        position: absolute;
        margin-top: 9.2%;
        margin-left: 27.5%;
        z-index: 200;
    }

    #btn {
        font-size: 20px;
        width: 30px;
        height: 20px;
        position: absolute;
        margin-left: 95%;
        outline: transparent;
        border: 0;
        background: transparent;
    }
</style>