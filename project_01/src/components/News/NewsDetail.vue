<template>
	<div class='detail'>
		<!-- {{ detail }} -->
		<Navbar :title='title'/>
		<div class='item'>
			<p>新闻标题</p>
			<div>
				<span>0次点击</span>
				<span>分类：民生经济</span>
				<span>添加时间：2016-12-31</span>
			</div>
		</div>
		<div class='divider'></div>
			<div class='detail-content'>新闻明细</div>

	</div>


</template>

<script type="text/javascript">
export default{
	neme:'NewsDetail',
	data(){
		return{
			detail:[]
		}
	},
	props:['title'],
	// created(){
	// 	let id=this.$route.query.id;
	// 	thid.$axios.get('api'+'?type=top&key=60902e4207be00f0fdc3be9fa9b74006')
	// 	.then(res=>{
	// 		var ob=JSON.parse(JSON.stringify(res.data.result.data));
	// 		// var obj=res.data.data.auto;
	// 		this.detail=ob;
	// 	})
	// 	.catch(err=>{
	// 		console.log('err:'+err);
	// 	})
		// }
};
	
</script>
<style lang='css' scoped>
.detail{
	padding-bottom: 100px;
}
.item p{
	color:#66CCFF;
	font-size: 24px;
	font-weight:600;
}
.item span{
	margin-rignt:20px;
	color:#999999;
}
.divider{
	width:100%;
	height:1px;
	background-color: #B3B3B3;
	margin:5px 0;
}
.detail-content{
	pardding:3px 3px;
}

</style>