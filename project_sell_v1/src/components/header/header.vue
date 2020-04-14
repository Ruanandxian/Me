<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64" height="64" :src="seller.avatar">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div v-if="seller.supports" class="support-count" @click="showDetail">
                <span class="count">{{seller.supports.length}}个</span>               
            </div>
        </div>
        <div class="bulletin-wrapper" @click="showDetail">
            <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="back">
            <img :src="seller.avatar" width="100%" height="100%">
        </div>
        <div v-show="detailShow" class="detail">
            <!-- clearfix清除浮动 -->
            <div class="detail-wrapper clearfix">
                <div class="detail-main">
                </div>
            </div>
            <div class="detail-close">
                <i class="icon-close"></i>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:'Header',
    data(){
        return{
            detailShow:false
        }
    },
    props:{
        seller:Object
    },
    methods:{
        showDetail(){
            this.detailShow=true;
        }
    },
    created(){
        this.classMap=["decrease","discount","guarantee","invoice","special"]
    }
    
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
.header
    position: relative
    color:#fff
    background:rgba(7,17,27,0.5)
    .content-wrapper
    // 第一个父元素进行定位
        position:relative
        padding:24px 12px 18px 24px
        //font-size消除缝隙
        font-size:0
        .avatar
            display:inline-block
            // 根据最后一行块级元素对齐
            vertical-align :top
            img
                border-radius :2px
        .content
            display:inline-block
            margin-left:16px
            .title
                margin:2px 0 8px 0
                .brand
                // span元素不生效，设施成行内块级元素才可以,依靠内容撑开，宽高起作用
                    display:inline-block
                    vertical-align :top
                    width:30px
                    height:18px
                    bg-image:('brand')
                    background-size:30px 18px
                    background-repeat:no-repeat
                .name
                    margin-left:6px
                    font-size:16px
                    font-weight:bold
                    line-height:18px
            .description
                margin-bottom :10px
                font-size:12px
                line-height:12px
            .support
                .icon
                    display:inline-block
                    vertical-align :top
                    width:12px
                    height:12px
                    margin-right:4px
                    background-size:12px 12px
                    background-repeat :no-repeat
                    // 子样式
                    &.decrease
                        bg-image('decrease_1')
                    &.discount
                        bg-image('discount_1')
                    &.guarantee
                        bg-image('guarantee_1')
                    &.invoice
                        bg-image('invoice_1')
                    &.special
                        bg-image('special_1')
                .text
                    font-size:10px
                    line-height:12px
        .support-count
            position:absolute
            right:12px
            bottom:14px
            padding:0 8px
            height:24px
            line-height:24px
            border-radius :14px
            background :rgba(0,0,0,0.2)
            text-align :center
            .count
                font-size:10px
            .icon-keyboard_arrow_right
                vertical-align :top
                line-height:24px
                font-size:10px
    .bulletin-wrapper
        position: relative
        height:28px
        line-height:28px
        padding:0 22px 0 12px
        white-space :nowrap//不允许换行
        overflow:hidden
        text-overflow :ellipsis//多出的部分用...表示
        // font-size:0//消除间隙
        background:rgba(7,17,27,0.2)
        .bulletin-title
            display:inline-block
            vertical-align :top
            margin-top:7px
            width:22px
            height:12px
            bg-image('bulletin')
            background-size:22px 12px
            background-repeat:no-repeat
        .bulletin-text
            vertical-align :top
            margin:0 4px
            font-size:10px
        .icon-keyboard_arrow_right
            position:absolute
            font-size:10px
            right:12px
            top:8px
    .back
        position:absolute
        top:0
        left:0
        width:100%
        height:100%
        z-index:-1
        filter:bulr(10px)
    .detail
        position:fixed
        // fixed相对于浏览器窗口定位
        z-index:100
        top:0
        left:0
        width:100%
        height:100%
        overflow:auto
        background:rgba(7,17,27,0.8)
        .detail-wrapper
            min-height:100%
            .detail-main
                margin-top:64px
                padding-bottom:64px
                // 在底边撑开一个64px的内容
        .detail-close
            position:relative
            width:32px
            height:32px
            // -64在padding-bottom撑开的地方显示
            margin:-64px auto 0 auto
            // 清除浮动
            clear:both
            font-size:32px

</style>