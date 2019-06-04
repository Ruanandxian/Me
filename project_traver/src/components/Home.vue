<template>
	<div>
		<home-header></home-header>
  		<home-swiper></home-swiper>
  		<home-icons></home-icons>
      <home-recommend></home-recommend>
      <home-weekend></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './Header.vue'
import HomeSwiper from './Swiper.vue'
import HomeIcons from './Icons.vue'
import HomeRecommend from './Recommend.vue'
import HomeWeekend from './Weekend.vue'


export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
  
};
</script>


<style scoped>
</style>
