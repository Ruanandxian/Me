<template>
	<div>
<!-- <Comment/> -->
<!-- {{page}} -->
<Navbar title='商品列表'/>
		<div class='page-loadmore'>
		<div class='page-loadmore-wrapper'>
			<mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill='aufill'>
			<ul class='page-loadmore-list'>
				<li v-for='(good,index) in gooslist' :key='good.id'>
					<router-link :to="{name:'good.detail',params:{id:good.id}}">
						<img :src="good.src" alt="">
					<div class='title'>好东西</div>
					<div class='desc'>
						<div class='sell'>
							<span>💴80</span>
							<s>💴9000</s>
						</div>
						<div class='detail'>
							<div class='hot'>
								热卖中
							</div>
							<div class='count'>
								剩99🗡
							</div>
						</div>
					</div>
					</router-link>>
				</li>
<!-- 				<li>
					<a href="" title="">
						<img src="http://i1.whymtj.com/uploads/tu/201904/9999/7ba0b2ba25.jpg" alt="">
					<div class='title'>好东西</div>
					<div class='desc'>
						<div class='sell'>
							<span>💴80</span>
							<s>💴9000</s>
						</div>
						<div class='detail'>
							<div class='hot'>
								热卖中
							</div>
							<div class='count'>
								剩99🗡
							</div>
						</div>
					</div>
					</a>
				</li>
				<li>
					<a href="" title="">
						<img src="http://i1.whymtj.com/uploads/tu/201904/9999/9e19f99c75.jpg" alt="">
					<div class='title'>好东西</div>
					<div class='desc'>
						<div class='sell'>
							<span>💴80</span>
							<s>💴9000</s>
						</div>
						<div class='detail'>
							<div class='hot'>
								热卖中
							</div>
							<div class='count'>
								剩99🗡
							</div>
						</div>
					</div>
					</a>
				</li> -->
			</ul>
		</mt-loadmore>
			
		</div>			
		</div>
	</div>


	<!-- <div>
		<Comment/>
	</div> -->
</template>

<script>
// me-loadmore中的属性
// 1.bottomLoad函数
// 2.机制bottomLoad：bottom-all-loaded默认为false，可以上拉true禁止上拉
// 3.auto-fill默认为true，自动检测父容器，并调用bottomload直到撑满父容器 
// 4.pull拉动未满足70px，drop达到70px，loading加载中
// 5.loadmore组件对象的onBottomLoaded()通知救赎loading进入pull状态
// 6.在组件上写ref在js中通过this.$refs.xxx获取的组件对象
// 	通过在普通标签写ref在ji中通过this.$refs.xxx获取的dom对象
// 7.上拉加载更多公式
// 进入检测机制==》可视的高度+页面卷起的高度=设备的高度
export default{
	name:'GoodList',
	data(){
		return{
			aufill:false,
			allLoaded:false,
			min:1,
			page:this.$route.params.page,
			gooslist:[
			{
				id:1,src:'http://p0.so.qhmsg.com/t017d478b5ab2f639ff.jpg'
			},
			{
				id:2,src:'http://p2.so.qhimgs1.com/t010ff03123d1f0206e.jpg'
			},
			{
				id:3,src:'http://p1.so.qhmsg.com/t012c60eb0fe0720396.jpg'
			},
			{
				id:4,src:'http://p1.so.qhmsg.com/t01cf9c1f5418f40266.jpg'
			},
			{
				id:5,src:'http://p1.so.qhimgs1.com/t013b75ed7c0474f4fd.jpg'
			},
			{
				id:6,src:'http://p1.so.qhimgs1.com/t01cce990ae3fa09ed1.jpg'
			},
			{
				id:7,src:'http://p0.so.qhmsg.com/t017abc1de09c20ca55.jpg'
			},
			{
				id:8,src:'http://p0.so.qhimgs1.com/t0140291295363c3da0.jpg'
			},
			{
				id:9,src:'http://p4.so.qhmsg.com/t01ad1434f8b879c959.jpg'
			},
			{
				id:10,src:'http://p2.so.qhimgs1.com/t019116cc5f40220542.jpg'
			},
			{
				id:11,src:'http://p1.so.qhimgs1.com/t01c186aa68a9bf0701.jpg'
			},
			{
				id:12,src:'http://p2.so.qhmsg.com/t01f1dcd1d4ab3cb4b7.jpg'
			},
],
			list:[
						{
				id:1,src:'http://p4.so.qhmsg.com/t013862476b8fbf7969.jpg'
			},
			{
				id:2,src:'http://p2.so.qhimgs1.com/t010ff03123d1f0206e.jpg'
			},
			{
				id:3,src:'http://p1.so.qhmsg.com/t012c60eb0fe0720396.jpg'
			},
			{
				id:4,src:'http://p1.so.qhmsg.com/t01cf9c1f5418f40266.jpg'
			},
			{
				id:5,src:'http://p1.so.qhimgs1.com/t013b75ed7c0474f4fd.jpg'
			},
			{
				id:6,src:'http://p1.so.qhimgs1.com/t01cce990ae3fa09ed1.jpg'
			},
			{
				id:7,src:'http://p0.so.qhmsg.com/t017abc1de09c20ca55.jpg'
			},
			{
				id:8,src:'http://p0.so.qhimgs1.com/t0140291295363c3da0.jpg'
			},
			{
				id:9,src:'http://p4.so.qhmsg.com/t01ad1434f8b879c959.jpg'
			},
			{
				id:10,src:'http://p2.so.qhimgs1.com/t019116cc5f40220542.jpg'
			},
			{
				id:11,src:'http://p1.so.qhimgs1.com/t01c186aa68a9bf0701.jpg'
			},
			{
				id:12,src:'http://p2.so.qhmsg.com/t01f1dcd1d4ab3cb4b7.jpg'
			},



			]


		}
	},
	methods:{
		loadBottom(){
			console.log('diaoyong');
			//上拉加载数据
			this.loadGoodsByPage();
			this.$refs.loadmore.onBottomLoaded();
		},
		// handleBottomChange(status){
		// 	console.log(status);
		// },


		// loadGoodsByPage(){
		// 	this.$axios.get('getgoods/?pageindex=${this.page}')
		// 	.then(res=>{
		// 		if(this.page==1){
		// 			this.goodsList=res.data.message;
		// 		}else{
		// 			this.goodsList=this.goodsList.concat(res.data.message);
		// 		}
		// 		this.page++;
		// 	})
		// },
		loadGoodsByPage(){
			if(this.min<=10)
			{this.gooslist=this.gooslist.concat(this.list);
			this.min=20;}
		else{
			//禁止刷新加载数据
			this.allLoaded=true;
			}
		}
		// created(){
		// 	this.loadGoodsByPage();
		// }


	}
	// created(){
	// 	this.$axios.get('getgoods/?pageindex=${this.page}')

	// }
};
</script>

<style scoped>
.title{
	color:#000;
}
.page-loadmore{
	margin-bottom:100px;
}
.page-loadmore-list{
	overflow:hidden;
	height:100%;
}
.page-loadmore-list li{
	width:50%;
	float:left;
	/*padding:6px;
	box-sizing:border-box;*/
}
li>a:not(.mui-btn){
	margin:0px;
	padding:0px;
	border:1px solid #ccc;
	/*box-shadow:0 0 4px #666;*/
	width:100%;
	display:block;
}
li>a:not(.mui-btn)img{
	width:100%;
}
.sell>span{
	float:left;
	color:red;
	text-align:left;
}
.detail>.hot{
	float:left;
	text-align:left;
	font-size:15px;
}
.detail>.count{
	float:right;
	text-align:right;
	font-size:15px;
}
/*撑开，去除浮动没有的高度*/
.detail{
	overflow:hidden;
}
.desc{
	color:rgba(92,92,92,0.8);
	background-color:rgba(0,0,0,0.2);
}
img{
	height:200px;
}
.page-loadmore-listitem{
	border-bottom:1px solid #eee;
}
.page-loadmore-listitem{
	height:50px;
	line-height:50px;
	text-align:center
}
.page-loadmore-listitem:first-child{
	border-top:1px solid #eee
}
.page-loadmore-wrapper{
	overflow:scroll
}
.mint-loadmore-bottom span{
	display:inline-block;
	-webkit-transition:.2s linear;
	transition:.2s linear;
	vertical-align:middle
}
.mint-loadmore-bottom span.is-rotate{
	-webkit-transform:rotate(180deg);
	transform:rotate(180deg)
}
	
</style>