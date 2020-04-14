<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="item-tab">
          <router-link to="/goods"><a>商品</a></router-link>
      </div>
      <div class="item-tab">
          <router-link to='/ratings'><a>评价</a></router-link>
      </div>
      <div class="item-tab">
          <router-link to='/seller'><a>商家</a></router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header/header'
import axios from 'axios'
export default {
  name: 'App',
  data(){
    return{
      seller:{}
    }
  },
  components: {
    'v-header': Header
  },
  methods:{
    getSeller(){
      axios.get('/api/seller').then((res)=>{
        this.seller=res.data.data
      })
    }
  },
  mounted(){
    this.getSeller()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './common/stylus/mixin.styl'
  #app
    .tab
      display:flex
      width:100%
      height:40px
      line-height:40px
      border-1px(rgba(7,17,27,0.1))
      .item-tab
        flex:1
        text-align :center
        &>a
        // 块级元素，点元素内任意位置，router都可以跳转
          display:block
          font-size:14px
          color:rgb(0,0,0)
          &.active
            color:rgb(240,20,20)
        
</style>
