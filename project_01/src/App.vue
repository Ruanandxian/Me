<template>
  <div id="app">
<!--     {{min}} -->
    <!-- 顶部栏区域 -->
    <mt-header fixed title="信息管理系统">
    <router-link to="/" slot="left">
    <mt-button icon="back">back</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 路由组件的出口 -->
    <transition name='fade' mode='out-in'>
    <router-view/>
  </transition>


    <!-- 底部栏 -->
<!--     <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/汤.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="./assets/牛奶.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img slot="icon" src="./assets/茶杯.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/食物篮.png">
        查找
      </mt-tab-item>
    </mt-tabbar> -->

<div class='tabBar'>
  <ul>
    <li v-for='(tab,index) in tabs' :key='tab.id'>
      <router-link :to='tab.routerName' exact @click.native='changeHash(index)' :class='{"link-active" :index==currentIndex}'>
      <img :src="tab.imgSrc" alt="">
      <mt-badge size='small' color='#FC0107' v-if='index===2'>{{min}}</mt-badge>
      <p>{{tab.title}}</p>
      </router-link>

    </li>
  </ul>
</div>

  </div>
</template>
<script>
import GoodsTool from './GoodsTool.js'
import EventBus from './EventBus.js'
import soup from './assets/汤.png'
import milk from './assets/牛奶.png'
import cap from './assets/茶杯.png'
import food from './assets/食物篮.png'
let tabs=[
{
  id:1,title:'首页',imgSrc:soup,routerName:{name:'home'}
},
{
  id:2,title:'会员',imgSrc:milk,routerName:{name:'vip'}
},
{
  id:3,title:'购物车',imgSrc:cap,routerName:{name:'cart'}
},
{
  id:4,title:'查找',imgSrc:food,routerName:{name:'search'}
},
];
export default {
  name: 'App',
  data(){
    return{
      selected:'',
      tabs:tabs,
      currentIndex:0,
      // min:0//底部栏购物数量

    }
  },
  computed:{
    min(){
      return this.$store.getters.getShopNum;
    }
  },
  methods:{
    changeHash(index){
      this.currentIndex=index;
    }
  },
  watch:{
  selected:function(newV,oldV){
    // console.log(newV,oldV);
    // console.log(this.selected);
    this.$router.push({name:this.selected});
  }
  },
  created(){
    // // console.log('11123465');
    // this.$bus.$on('sendPickNum',(data)=>{
    //   // console.log(data);
    //   this.min+=data;
    // });
    //获取购物车的总数
  // this.min=GoodsTool.getTotalCount();
  this.$store.dispatch('changeShopNum',GoodsTool.getTotalCount());
}
};

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.tabBar{
  width:100%;
  height:55px;
  background-color: #CCCCCC;
  position:absolute;
  bottom:0;
  left:0;
  background-image:linear-gradient(180deg,#d9d9d9,#d9d9d9 50%,transparent 50%);
  background-size:100% 1px;
  background-repeat: no-repeat;
  background-position: top left;
  background-color: #fafafa;

}
.tabBar ul{
  width:100%;
  overflow:hidden;
}
.tabBar ul li{
  float:left;
  width:25%;
  height:55px;
  text-align:center;

}
.tabBar ul li a{
  display: inline-block;
  width: 100%;
  height:100%;
  padding-top: 10px;
  position:relative;

}
.tabBar ul li a.link-active{
  background-color: #CCFF66;
}
.tarBar ul li p{
  font-size:12px;
}
.tabBar ul li a img{
  width:25px;
  height:25px;

}
.mint-badge.is-size-small{
  position:absolute;
  top:0;
  right:10px;
}
</style>
