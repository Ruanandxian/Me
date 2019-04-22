<template>
	<div class='header'>
		<h3 @click='goBack' class='back'><<<</h3>
		<h3 class='desc_title'>
			{{title}}
		</h3>
	</div>
</template>
<script>
	export default{
		name:'Navbar',
		props:['title'],
		data(){
			return{


			};
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			}
		}
	};

</script>
<style lang='css' scoped>
.header{
	width:100%;
	height:40px;
	line-height:40px;
	position:relative;
	background-color:#FD8008;
}
h3{
	float:left;
}
h3.back{
	margin-left:15px;
}
h3.desc_title{
	position:absolute;
	width:200px;
	height:40px;
	left:50%;
	margin-left:-100px;
	text-align:center;
}
	
</style>