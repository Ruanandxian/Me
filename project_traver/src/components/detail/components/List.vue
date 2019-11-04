<template>
    <div>
        <div class='item'
         v-for="(item,index) of list" 
         :key='index'>
         <!-- border-bottom下边框 -->
         <div class='item-title border-bottom'>
             <span class='item-title-icon'></span>
             {{item.title}}
         </div>

         
        <div v-if='item.children' class='item-children'>
            <!-- 组件递归 -->
            <!-- 注意同名问题
            detail-list 两个l的情况下，递归自身不成功-->
           <detai-list :list="item.children"></detai-list> 
        </div>


        </div>
    </div>

</template>


<script>
export default {
    name:'DetaiList',
    props:{
        list:Array,
    }
}

</script>

<style lang="stylus" scoped>
    .item-title-icon
        position: relative
        left: .06rem
        top: .06rem
        display: inline-block
        width:.36rem
        height:.36rem
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right:.1rem
        background-size:.4rem 3rem
    .item-title
        line-height:.8rem
        font-size:.32rem
        padding:0 .2rem
    .item-children
        padding:0 .2rem

</style>


