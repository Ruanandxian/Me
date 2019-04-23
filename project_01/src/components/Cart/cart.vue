<template>
	<div>
<!-- {{list}} -->
<Navbar title='购物车'/>
		<div class='pay-detail'>
			<ul>
				<li class='p-list' v-for='(shop,index) in list' :keys='shop.id'>
					<mt-switch v-model='shop.isSelectd'></mt-switch>
					<img :src="shop.src" alt="">
					<div class='pay-calc'>
						<p>🚌</p>
						<div class='calc'>
							<span>💴{{shop.price}}</span>
							<span @click='substract(shop)'>-</span>
							<span>{{shop.num}}</span>
							<span @click='addnum(shop)'>+</span>
							<a href="javascript:;" @click='del(shop,index)' title="">删除</a>	
						</div>	
					</div>
				</li>
			</ul>
		</div>
		<div class='show-price'>
			<div class='show-1'>
				<p>总计（不含运费）：</p>
				<span>已经选择商品件{{payment.count}}，总价💴{{payment.total}}元</span>
			</div>
			<div class='show-2'>
				<mt-button type='danger' size='large'>去结算</mt-button>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import GoodsTool from  '../../GoodsTool.js'
	export default{
		name:'Cart',
		data(){
			return{
				list:[],
				// ids:[],
				gooslist:[
			{
				id:0,
				price:100,
				src:'http://p0.so.qhmsg.com/t017d478b5ab2f639ff.jpg'
			},
			{
				id:1,
				price:120,
				src:'http://p2.so.qhimgs1.com/t010ff03123d1f0206e.jpg'
			},
			{
				id:2,
				price:115,
				src:'http://p1.so.qhmsg.com/t012c60eb0fe0720396.jpg'
			},
			{
				id:3,
				price:103,
				src:'http://p1.so.qhmsg.com/t01cf9c1f5418f40266.jpg'
			},
			{
				id:4,
				price:150,
				src:'http://p1.so.qhimgs1.com/t013b75ed7c0474f4fd.jpg'
			},
			{
				id:5,
				price:185,
				src:'http://p1.so.qhimgs1.com/t01cce990ae3fa09ed1.jpg'
			},
			{
				id:6,
				price:195,
				src:'http://p0.so.qhmsg.com/t017abc1de09c20ca55.jpg'
			},
			{
				id:7,
				price:122,
				src:'http://p0.so.qhimgs1.com/t0140291295363c3da0.jpg'
			},
			{
				id:8,
				price:136,
				src:'http://p4.so.qhmsg.com/t01ad1434f8b879c959.jpg'
			},
			{
				id:9,
				price:142,
				src:'http://p2.so.qhimgs1.com/t019116cc5f40220542.jpg'
			},
			{
				id:10,
				price:121,
				src:'http://p1.so.qhimgs1.com/t01c186aa68a9bf0701.jpg'
			},
			{
				id:11,
				price:180,
				src:'http://p2.so.qhmsg.com/t01f1dcd1d4ab3cb4b7.jpg'
			},
],

			}
		},
		beforeRouteLeave(to,from,next){
			let res=confirm('确定要离开嘛');
			
			if(res){
				//保存用户的编辑数据
				let obj={};
				this.list.forEach((shop)=>{
					obj[shop.id]=shop.num;
				})
				GoodsTool.saveGoods(obj);
				next();
			}else{
				next(false);//取消导航
			}
		},
		//计算多个属性
		computed:{
			payment(){
				//默认之友getter方法
				let total=0;//总钱数
				let count=0;//总个数
				this.list.forEach((shop)=>{
					//如果勾选，计算
					if(shop.isSelectd){
						count+=shop.num;
						total+=shop.num*shop.price;
					}
				})
				return{
					total,count
				}
			}
		},
		methods:{
			substract(shop){
				if(shop.num==0){
					return
				}else{
					shop.num--;
					this.$store.dispatch('addShopNumByAction',-1)
				}
			},
			addnum(shop){
				shop.num++;
				this.$store.dispatch('addShopNumByAction',1)
			},
			del(shop,index){
				//删除元素
				this.list.splice(index,1);
				// console.log(this.list.splice(index,1));
				//删除shop
				// delete GoodsTool[shop.id];
				// console.log(delete GoodsTool[shop.id]);

				GoodsTool.removeGoods(shop.id);

				let num=shop.num;
				this.$store.dispatch('addShopNumByAction',-num);

			}
		},
		created(){
			// console.log(GoodsTool.getGoodsList());
			// let goodsList=GoodsTool.getGoodsList();
			// let ids=Object.keys(goodsList).join(',');
			// console.log(ids);
			// if(ids){
			// 	this.$axios.get('goods/getshopcarlist/${ids}')
			// 	.then(res=>{
			// 	})
			// }

			// console.log(GoodsTool.getTotalNum());
			let goodsList=GoodsTool.getGoodsList();
			let ids=Object.keys(goodsList).join('');
			// console.log(ids);
			// console.log(ids.length);
			// console.log(ids);
			let min=0;
			while(min<ids.length){
				this.list=this.list.concat(this.gooslist[ids[min]-1]);
				min++;
			}
			for(var i=0;i<this.list.length;i++){
				let shop=this.list[i];
				console.log(shop);
				let num=goodsList[shop.id+1];
				// console.log(num);
				if(num){
					//如果数据不完整要添加属性，就需要手动通知vue完成响应式，双向数据绑定
					this.$set(shop,'num',num);
					this.$set(shop,'isSelectd',true);
					// shop.num=num;
					// shop.isSelectd=true;
				}


			}

		}
	};
</script>
<style scoped>
.pay-detail ul li{
	list-style:none;
	border-bottom: 1px solid rgba(0,0,0,0.2);
	margin-bottom:3px;
}
.pay-detail ul{
	padding-left:5px;
	margin-top:5px;
}
.pay-detail ul li img{
	wid:80px;
	height:80px;
	dispaly:inline-block;
	vertical-align: top;
	margin-top:10px;
}
.pay-detail ul li>:nth-child(1),
.pay-detail ul li>:nth-child(3){
	display:inline-block;
}

.pay-calc p{
	display:inline-block;
	width:250px;
	overflow:hidden;
	color:blue;
	font-size: 15px;
	margin-bottom: 10px;
}
.pay-detail ul li>:nth-child(1){
	line-height:80px;
}
.calc:nth-child(1){
	color:red;
	font-size: 20px;

}
.calc span:not(:nth-child(1)){
	border:1px solid rgba(0,0,0,0.3);
	dispaly:inline-block;
	width:20px;
	text-align:center;

}
.calc a{
	margin-left:20px;

}

.show-1,
.show-2{
	display:inline-block;
}

.show-1,
.show-2{
	margin-left:30px;

}

.show-price{
	background-color: rgba(0,0,0,0.2);
}
</style>