<template>
	<div id='home'>
<!-- 		<mt-swipe :auto="4000" style='height:200px;background:red'>
	  <mt-swipe-item v-for='(item,index)in imgs' :key='index'>
		<img src="item.img" alt="" />
	  </mt-swipe-item>
</mt-swipe> -->

<!-- <mt-swipe :auto="5000" :show-indicators="false" style='height:250px;' class='swiper'>
  <mt-swipe-item>

  		<img src="https://api.dujin.org/pic/" alt=""/>

  </mt-swipe-item>
  <mt-swipe-item>
  	<img src="https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture" alt=""/>
  </mt-swipe-item>
  <mt-swipe-item>
  	<img src="http://lorempixel.com/1600/900" alt=""/>
  </mt-swipe-item>
</mt-swipe> -->


<!-- <mt-swipe :auto="5000" :show-indicators="false" style='height:250px;' class='swiper'>
  <mt-swipe-item>

  		<img src="../../assets/320011_300.jpg" alt=""/>

  </mt-swipe-item>
  <mt-swipe-item>
  	<img src="../../assets/322072_300.jpg" alt=""/>
  </mt-swipe-item>
  <mt-swipe-item>
  	<img src="https://api.dujin.org/pic/" alt=""/>
  </mt-swipe-item>
</mt-swipe> -->

<Myswiper myHeight='250px'/>


<!-- 
<mt-swipe :auto="5000" :show-indicators="false" style='height:250px;' class='swiper'>
  <mt-swipe-item v-for='(im,index)in imgs':key='im.id'>

  		<a href="javascript:void(0);" title="">
  			<img :src="im.src" alt="">
  		</a>

  </mt-swipe-item>
</mt-swipe> -->



<!-- 九宫格 -->
<div class='list'>
	<ul>
		<li v-for='(grid,index) in grids':key='grid.id'>
			<router-link :to="grid.router">
				<img :src="grid.src" alt="">
			</router-link>
			<p>{{grid.title}}</p>
		</li>
	</ul>

</div>




	</div>
	
</template>
<script>
import src1 from '../../assets/xinwenzixun.png'
import src2 from '../../assets/tuwenfenxiang.png'
import src3 from '../../assets/shangpinzhanshi.png'
import src4 from '../../assets/zixun.png'
import src5 from '../../assets/liuyanfankui.png'
import src6 from '../../assets/lianxiwomen.png'
// import tu1 from '../../assets/320011_300.jpg'
// import tu2 from '../../assets/322072_300.jpg'
// import tu3 from '../../assets/360wallpaper.jpg'


// var imgs=[
// {
// 	id:1,src:tu1
// },
// {
// 	id:2,src:tu2
// },
// {
// 	id:3,src:tu3
// },

// ];
var grids=[
{
	id:1,src:src1,title:'新闻资讯',router:{name:'news.list'}
},
{
	id:2,src:src2,title:'图文分享',
	router:
	{
		name:'photo.list',
		params:{categoryId:0}
	}
},
{
	id:3,src:src3,title:'商品展示',router:
	{
		name:'good.list',
		params:{page:1}
	}
},
{
	id:4,src:src4,title:'咨询',router:{name:'news.list'}
},
{
	id:5,src:src5,title:'留言反馈',router:{name:'news.list'}
},
{
	id:6,src:src6,title:'联系我们',router:{name:'news.list'}
},


];




export default{
	name:'Home',
	data(){
	return{
		// imgs:imgs,
		imgs:[],
		grids:grids
	};
	},
	// created(){
	// 	this.$axios.get('')
	// 	.then(res=>{
	// 		console.log(res);
	// 		// this.imgs=res.data.message;
	// 	})
	// 	.catch(err=>{
	// 		console.log('轮播图数据异常',err);
	// 	})
	// }

};
</script>
<style lang="css" scoped>
.swiper img{
	width:100%;
	height:250px;
}
.list{
	width:100%;
}
.list ul{
	display:flex;
	flex-wrap:wrap;

}
.list ul li{
	width:33%;
	height:100px;
	text-align:center;
	font-size:14px;
	margin-top:15px;
}
.list ul li a{
	display:inline-block;
	width:50px;
	height:50px;
	margin:0 auto;

}
.list ul li a img{
	width:50px;
}
</style>