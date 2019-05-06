<template>
	<div class='skeleton-wrapper'>
		<header class='skeleton-header'>
		</header><!-- /header -->
		<section class='skeleton-block'>
			<img src="../src/assets/1.jpg" height="1228" width="1843" alt="">
			<img src="../src/assets/2.jpg" height="1080" width="1440" alt="">
			
		</section>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'skeleton'
	};
</script>

<style scoped>
.skeleton-header{
	height:152px;
	background:grey;
	margin-top:60px;
	width:152px;
	margin:60px auto;
}
.skeleton-block{
	display:flex;
	flex-direction: column;
	padding-top: 8px;
}	
</style>