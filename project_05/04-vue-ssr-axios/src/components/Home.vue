<template>
	<div>
		我是首页
		<router-link to='/test'>去测试页面</router-link>
		<div>{{homeInfo}}</div>
	</div>

</template>


<script type="text/javascript">
	export default{
		name:'Home',
		data(){
			return{

			};
		},
		serverRequest(store){
			return store.dispatch('getHomeInfo')
		},
		computed:{
			homeInfo(){
				return this.$store.state.homeInfo
			}
		}
	};
</script>

<style lang='css' scoped>
	
</style>