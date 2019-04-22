<template>
	<div class='news'>
		<!-- {{newsList}} -->
		<Navbar title='新闻列表'/>
		<div class='newList'>
			<ul>
				<li v-for='(nm,index) in newsList' :key='index'>
					<router-link :to="{name:'detail',query:{id:index}}">
						<div class='new_img'>
							<img :src="nm.thumbnail_pic_s" alt="">
							<!-- {{uu.id}} -->
						</div>
						<div class='content'>
							<p class='title'>{{nm.author_name}}</p>
							<div class='news-desc'>
								<p class='summary'>{{nm.title}}</p>
								<p>
									<span class='praise'>{{nm.category}}</span>	
									<span class='time'>发表时间：{{nm.date|converTime('YYYY-MM-DD')}}</span>
								</p>
								
							</div>
							
						</div>
					</a>
				</router-link>
				</li>
			</ul>
			
		</div>


	</div>


</template>

<script>
let uuu=[
{id:1,imgg:'../../assets/1.jpg'},
{id:2,imgg:'../../assets/2.jpg'},
{id:3,imgg:'../../assets/3.jpg'},
{id:4,imgg:'../../assets/4.jpg'},
{id:5,imgg:'../../assets/5.jpg'},
{id:6,imgg:'../../assets/6.jpg'},
{id:7,imgg:'../../assets/7.jpg'},
{id:8,imgg:'../../assets/8.jpg'},
];
export default{
	name:'NewsList',
	data(){
		return{
			newsList:[],
			uuu:uuu
		};
	},

	// created() {
 //    let url = "https:/api.douban.com/v2/movie/in_theaters";
 //    this.$jsonp(url, {
 //      params: {
 //        count: 20,
 //        start: 0
 //      }
 //    })
 //      .then(res => {
 //        console.log(res);
 //        // this.hotMovie = res.subjects
 //      })
 //      .catch(error => {
 //        console.log(error);
 //      })
 //  }
	
	created(){
		this.$axios('/api'+'?type=top&key=60902e4207be00f0fdc3be9fa9b74006')
		.then(res=>{
			var obj=JSON.parse(JSON.stringify(res.data.result.data));
			// var obj=res.data.data.auto;
			console.log(obj);
			this.newsList=obj;
			// console.log(this.newsList);
		})
		.cathch(err=>{
			console.log('新闻列表',err);
		})
	}

	
	// created(){
	// 	axios
	// 	.get('https://api.coindesk.com/v1/bpi/currentprice.json')
	// 	.then(function(response){
	// 		console.log(response);
	// 	})
	// 	.cathch(function(err){
	// 		console.lgo('新闻列表',err);
	// 	})
	// }

};	
</script>

<style lang='css' scoped>
	.news{
		/*padding-top:40px;*/
		padding-bottom:55px;
	}
	.newList{
		width:100%;
		border-bottom:1px solid #CCCCCC;
		font-size:12px;
	}
	.newList ul li{
		position:relative;
	}
	.newList ul li a{
		display:block;
		width:100%;
		height:185px;
		color:#0d1819;
		display:flex;
		text-decoration: none;
	}
	.new_img{
		width:30%;
		text-align:center;
		display:flex;
		align-items:space-around;
		justify-content: center;
	}
	.newList ul li a img{
		margin-left:30px;
		padding:0 10px;
	}
	.content.title{
		font-size: 15px;
		display:inline-block;
		color:#131f3c;
		letter-spacing:0;
		padding-bottom:7px;
		font-family:PingFangSC-Regular;
		margin-top:10px;
	}
	.news-desc span{
		color:#ff6700;
	}
	.summary{
		padding:5px 0;
	}
	.time{
		margin-left:30px;
	}
</style>