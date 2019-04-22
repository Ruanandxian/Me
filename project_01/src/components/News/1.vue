<template>
	<div class='news'>
		{{newsList}}

	</div>


</template>

<script>
export default{
	name:'NewsList',
	data(){
		return{
			newsList:[]
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
		this.$axios('https://www.apiopen.top/journalismApi')
		.then(res=>{
			var obj=JSON.parse(JSON.stringify(res.data.data.auto));
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
	/*.news{
		padding-top:40px;
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
		height:150px;
		color:#808080;
		display:flex;
		text-decoration: none;
	}
	.new_img{
		width:30%;
		text-align:center;
		display:flex;
		align-items:center;
		justify-content: center;
	}
	newList ul li a img{
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
	}*/
</style>