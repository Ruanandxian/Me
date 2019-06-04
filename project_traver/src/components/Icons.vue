<template>
	<div class='icons'>
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page,index) of pages" :key="index">
				<div class='icon' v-for="item of page" :key='item.id'>
					<div class='icon-img'>
						<img class='icon-img-content' :src='item.url'>
					</div>
					<p class='icon-desc'>{{item.desc}}</p>
				</div>
			</swiper-slide>	
		</swiper>	
	</div>
</template>

<script>
import src1 from '../assets/dengpao-.png'
import src2 from '../assets/dianyuan-.png'
import src3 from '../assets/erji-.png'
import src4 from '../assets/fuzhi-.png'
import src5 from '../assets/guanli-.png'
import src6 from '../assets/huaban-.png'
import src7 from '../assets/huishouzhan-.png'
import src8 from '../assets/jishibu-.png'
import src9 from '../assets/lianxiren-.png'
import src10 from '../assets/NFC-.png'
import src11 from '../assets/suo-.png'
import src12 from '../assets/weizhi-.png'

export default{
	name:"HomeIcons",
	data () {
		return{
			swiperOption: {
        		autoplay: false
      		},
			iconList:[
			{
				id:1,
				url:src1,
				desc:'灯泡'
			},
			{
				id:2,
				url:src2,
				desc:'电源'
			},
			{
				id:3,
				url:src3,
				desc:'耳机'
			},
			{
				id:4,
				url:src4,
				desc:'斧子'
			},
			{
				id:5,
				url:src5,
				desc:'管理'
			},
			{
				id:6,
				url:src6,
				desc:'滑板'
			},
			{
				id:7,
				url:src7,
				desc:'回收站'
			},
			{
				id:8,
				url:src8,
				desc:'记事本'
			},
			{
				id:9,
				url:src9,
				desc:'联系人'
			},
			{
				id:10,
				url:src10,
				desc:'支付'
			},
			{
				id:11,
				url:src11,
				desc:'小锁'
			},
			{
				id:12,
				url:src12,
				desc:'位置'
			},


			]

		}
	},
	computed:{
		pages () {
			const pages=[]
			this.iconList.forEach((item,index)=>{
				const page=Math.floor(index/8)
				if(!pages[page]){
					pages[page]=[]
				}
				pages[page].push(item)
			})
			return pages
		}
	}
};
	
</script>


<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.icons >>> .swiper-container
	width:100%
	overflow:hidden
	height:0
	padding-bottom:50%
.icons
	margin-top:.1rem
	.icon
		position:relative//自适应，允许叠加
		overflow:hidden
		float:left
		width:25%
		height:0
		padding-bottom:25%
		.icon-img
			position:absolute//不允许叠加
			top:0
			left:0
			right:0
			bottom:.44rem
			box-sizing:border-box
			padding:.2rem
			.icon-img-content
				display:block//块元素
				margin:0 auto
				height:100%
		.icon-desc
			position:absolute
			left:0
			right:0
			bottom:0
			height:.44rem
			line-height:.44rem
			text-align:center
			color:$darkTextColor
			ellipsis()


	
</style>