<template>
	<mt-swipe :auto="5000" :show-indicators="false" :style='{height:myHeight}' class='swiper'>
  <mt-swipe-item>

  		<img src="http://p4.so.qhmsg.com/t0112a593ccd2192209.jpg" alt=""/>

  </mt-swipe-item>
  <mt-swipe-item>
  	<img src="http://c.hiphotos.baidu.com/zhidao/pic/item/8644ebf81a4c510f3336b7aa6359252dd52aa594.jpg" alt=""/>
  </mt-swipe-item>
  <mt-swipe-item>
  	<img src="http://p5.so.qhimgs1.com/t01775bab461cfe3fcb.jpg" alt=""/>
  </mt-swipe-item>
</mt-swipe>
	
</template>
<script type="text/javascript">
	export default{
		name:'Myswiper',
		data(){
			return{

			};
		},
		props:['myHeight'],
		// create(){

		// }
	};
</script>
<style lang='css' scoped>
img{
	width:100%;
}
	
</style>