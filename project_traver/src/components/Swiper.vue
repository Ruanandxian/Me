<template>
	<div class='wrapper'>
	<swiper :options="swiperOption">
	    <swiper-slide v-for='item of Swiper' :key='item.id'>
	    	<img class= "swiper-img" :src="item.url" alt="">
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
	</div>
</template>
<script>
	export default{
		name:'HomeSwiper',
		data () {
			return{
				// 轮播图底部的小百圈,loop循环
				swiperOption:{pagination:'.swiper-pagination',loop:true},
				Swiper:[
				{
					id:1,
					url:'http://img1.qunarzz.com/sight/p0/201405/27/544cae2aeb173cb6533ce6926b68f153.jpg_710x360_4bf78ebd.jpg'
				},
				{
					id:2,
					url:'http://img1.qunarzz.com/sight/p0/1411/98/2fd45447f5f2d9317d67e2406625cd3e.water.jpg_710x360_22df34c7.jpg'
				},
				{
					id:3,
					url:'http://img1.qunarzz.com/sight/p0/201403/10/03b24acde057acb03c1b514bd2bf638c.jpg_710x360_9524de82.jpg'
				},
				{
					id:4,
					url:'http://img1.qunarzz.com/sight/p0/1609/e4/e45d9cb483478459a3.water.jpg_1000x520_cae9f74e.jpg'
				}]

			}
		}
	};
</script>
<style lang='stylus' scoped>
/*css穿透，wrapper中的swiper-pagination-bullet-active*/
.wrapper >>>.swiper-pagination-bullet-active
	background:#fff
.wrapper
		overflow:hidden
		width:100%
		height:0
		padding-bottom:50%
		background:#eee
		.swiper-img
			width:100%

</style>