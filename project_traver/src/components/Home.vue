<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./Header.vue";
import HomeSwiper from "./Swiper.vue";
import HomeIcons from "./Icons.vue";
import HomeRecommend from "./Recommend.vue";
import HomeWeekend from "./Weekend.vue";
import axios from "axios";
import { mapState } from 'vuex'

export default {
  name: "Home",
  components: {
    // HomeHeader:()=> import("./Header.vue"),
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  computed:{
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json?city="+this.city).then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    }
  },
  mounted() {
    this.lastCity=this.city
    this.getHomeInfo();
  },

  // 从内存拿数据，mounted不会执行，activated每次执行
  activated(){
    if(this.lastCity!==this.city){
      this.lastCity=this.city
      this.getHomeInfo()
    }

  }
};
</script>


<style scoped>
</style>
