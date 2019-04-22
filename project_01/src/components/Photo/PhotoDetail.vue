<template>
	<div>
		<!-- {{Thum.QFriend}} -->
		<Navbar title='图文详情'/>
		<div class="photo-title">
			<p>{{Thum.QFriend}}</p>
			<span>日期：{{Thum.datetime}}</span>
			<span>{{Thum.number}}次浏览</span>
			<span>color：{{Thum.color}}</span>
			<!-- <ul>
				<li v-for='im in Img'>
					<a href="javascript:void(0)">
						<img :src="im.src">
					</a>
				</li>
			</ul> -->
			<vue-preview :slides='Img'></vue-preview>

			
			<div class="photo-desc">
				<p v-html='Thum.summary'></p>
				
			</div>

			<div>
				
				<Comment/>
			</div>
		</div>
		<!-- 使用评论组件 -->
	</div>



</template>
<script type="text/javascript">
import src1 from '../../assets/1.jpg'
import src2 from '../../assets/2.jpg'
import src3 from '../../assets/3.jpg'
import src4 from '../../assets/4.jpg'
import src5 from '../../assets/5.jpg'
import src6 from '../../assets/6.jpg'
export default{
	name:'PhotoDetail',
	data(){
		return{
			Img:[
{
	src:src1,
	msrc:src1,
	h:600,
	w:600,
},
{
	src:src2,
	msrc:src2,
	h:600,
	w:600,
},
{
	src:src3,
	msrc:src3,
	h:600,
	w:600,
},
{
	src:src4,
	msrc:src4,
	h:600,
	w:600,
},
{
	src:src5,
	msrc:src5,
	h:600,
	w:600,
},
{
	src:src6,
	msrc:src6,
	h:600,
	w:600,
},

],
			Thum:[],
		}
	},
	created(){
		var getImage =() =>{
			// console.log(this);
			return this.$axios.get('apa'+'?gid=sh601009&key=68aaf6bd2fdafde84ecfd7adfe90f363');
		}
		var getThum =() =>{
			return this.$axios.get('aps'+'?consName=%E7%8B%AE%E5%AD%90%E5%BA%A7&type=today&key=a3a39548fb76c6afa59cea7d63fd5c13')
		}
		this.$axios.all([getImage(),getThum()])
		.then(this.$axios.spread((acct,perms)=>{
			// console.log(JSON.parse(JSON.stringify(acct.data.result[0].gopicture)));
			console.log(JSON.parse(JSON.stringify(perms.data)));
			// var qq=JSON.parse(JSON.stringify(acct.data.result));
			var ww=JSON.parse(JSON.stringify(perms.data));
			this.Thum=ww;
			// this.Img.forEach((item,index)=>{
			// 	item.msrc=item.src;
			// 	item.h=600;
			// 	item.w=600;
			// })

		}));
	},
};

</script>
<style lang="css" scoped>
.photo-title p{
	font-size:20px;
	font-weight:600;
	color:#0F80FF;
	margin:15px 0;
}
.photo-title span{
	padding:10px 5px;
}
.photo-desc p{
	font-size:18px;
	color:#333333;
}
/*.photo-title{
	width:100%;
	over-flow:hidden;
	margin-top:20px;
}
*/	
</style>