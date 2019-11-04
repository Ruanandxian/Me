<template>
<div>
    <div class='banner' @click='handleclickgallary'>
        <img class='banner-img' src="http://img8.zol.com.cn/bbs/upload/23052/23051483.jpg">
        <div class='banner-info'>
            <div class='banner-title'>
                开封水系之-七盛角
            </div>
            <div class='banner-number'>
                <span class="iconfont banner-icon">&#xe694;</span>
                39
            </div>
        </div>
    </div>
    <fade-animation>
    <common-gallary :imgs='imgs' v-show='showgallary' @close="handlergallaryclose"></common-gallary>
    </fade-animation>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
    name:'DetailBanner',
    props:{
        sightName:String,
        bannerImg:String,
        bannerImgs:Array
    },
    data () {
        return{
            showgallary:false,
            imgs:["http://img8.zol.com.cn/bbs/upload/18665/18664135.JPG",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571378568&di=e04438c9db1d48ab354d909dc9a3cdd9&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1311%2F02%2Fc3%2F28247745_28247745_1383380512843.jpg",
            ]
        }
    },
    methods:{
       handleclickgallary () {
           this.showgallary=true
       },
       handlergallaryclose(){
           this.showgallary=false
       }
    },
    components:{
        CommonGallary,
        FadeAnimation
    }
}
</script>


<style lang='stylus' scoped>
    .banner
        position:relative
        overflow: hidden
        height:0
        padding-bottom:45%
        .banner-img
            width:100%
        .banner-info
            display:flex
            position:absolute
            left:0
            right:0
            bottom:0
            line-height:0.5rem
            color:#fff
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            实现一个渐变
            .banner-title
                flex: 1
                font-size:.24rem
                padding:0 .2rem
            .banner-number
                height:.24rem
                line-height:.24rem
                margin-top:0.18rem
                padding:0 .45rem
                border-radius:.2rem
                background:rgba(0,0,0,.8)
                font-size:.24rem
                .banner-icon
                    font-size.24rem
</style>