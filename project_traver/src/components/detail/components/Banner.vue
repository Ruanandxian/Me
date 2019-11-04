<template>
<div>
    <div class='banner' @click='handleclickgallary'>
        <img class='banner-img' :src='tu3'>
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
import tu1 from '../../../assets/tim.jpg'
import tu2 from '../../../assets/timg.jpg'
import tu3 from '../../../assets/tu3.jpg'
export default {
    name:'DetailBanner',
    props:{
        sightName:String,
        bannerImg:String,
        bannerImgs:Array
    },
    data () {
        return{
            tu3:tu3,
            showgallary:false,
            imgs:[tu1,
            tu2,
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