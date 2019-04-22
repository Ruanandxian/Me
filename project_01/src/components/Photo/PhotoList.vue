<template>
	<div class='photoList'>
		<!-- {{List}} -->
		<!-- {{imgList}} -->
		<Navbar title='图文列表'/>
		<div class='category-list'>
			<ul>
				<li v-for='(ii,index) in List' :key='index' @click='categoryHandler(index)'>
					<a href="javascript:void(0);" :class='{active:index==currentIndex}'>{{ii.catalog}}</a>
				</li>
			</ul>
		</div>

<!-- v-lazy懒加载 -->
		<!-- 图片展示区域 -->
		<div class='photo-list'>
			<ul>
				<li v-for='it in imgList'>
					<router-link :to='{name:"photo.detail",query:{id:it.movieid}}'>
						<img v-lazy='it.pic_url'>
					</router-link>
					<p>
						<span>{{it.movieName}}</span>
						<br>
						<span>{{it.movidId}}</span>
					</p>
				</li>
			</ul>
		</div>
	</div>



</template>
<script type="text/javascript">
export default{
	name:'PhotoList',
	data(){
		return{
			List:[],
			imgList:[],
			currentIndex:0
		}
	},
	methods:{
		categoryHandler(index){
			// this.$router.push({name:'photo.list',params:{categoryId:id}})
			this.currentIndex=index;
		},
		loadImg(){
			this.$axios.get('app'+'?key=976e25bafe449975662da0230aadc1b7&cityid=3')
			.then(res=>{
				var om=JSON.parse(JSON.stringify(res.data.result));
			// var obj=res.data.data.auto;
			// console.log(ob);
			this.imgList=om;
			// console.log(this.imgList);
			})
			.catch(err=>{
				console.log('Tu');
			})
		}
	},
	// beforeRouterUpdate(to,form,next){
	// 	console.log(to);
	// 	this.loadImg(to.params.categoryId);
	// 	next();
	// },
	created(){
		this.loadImg();
		this.$axios('/apo'+'?key=c93dac0b4de847b220645bfca805c1a7&dtype=json')
		// this.$axios.get('apo'+'?key=976e25bafe449975662da0230aadc1b7&cityid=3')
		.then(res=>{
			var oo=JSON.parse(JSON.stringify(res.data.result));
			// var obj=res.data.data.auto;
			// console.log(ob);
			this.List=oo;
			// this.List.unshift({"id":0,"title":"全部"})
			// console.log(this.newsList);
		})
		.cathch(err=>{
			console.log('图文',err);
		})
	}

};
</script>
<style lang='css' scoped>
.category-list{
	width:100%;
	height:40px;
	overflow:hidden;
}
.category-list ul{
	width:100%;
	/*height:50px;*/
	overflow-y: hidden;
	overflow-x:scroll;
	white-space:nowrap;
}
.category-list ul li{
	display:inline-block;
	width:25%;
	height:100%;
	font-size:18px;
	line-height:40px;
	text-align:center;
}
.category-list ul li a{
	text-decoration: none;
	font-size:16px;
}
.category-list ul li a.active{
	color:#FC0280;
}
.photo-list ul li{
	width:100%;
	position:relative;
}
.photo-list ul li a{
	display:block;
	width:100%;
}
.photo-list ul li a img{
	width:100%;
}
.photo-list ul li p{
	position:absolute;
	bottom:0;
	width:100%;
	background-color: rgba(0,0,0,.2);
	padding:5px 0;
}
.photo-list ul li p span{
	color:#E6E6E6;
	font-size: 16px;
}
.photoList{
	padding-bottom: 100px;
}
image[lazy=loading]{
	width:40px;
	height:300px;
	margin:auto;
}
.icon-meiyoutupian{
	width:50px;
	heigth:50px;
}
</style>