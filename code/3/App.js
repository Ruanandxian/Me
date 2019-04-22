import imgSrc from './my.jpg'
var app={
	data(){
		return{
			imgSrc:imgSrc
		}
	},
	template:`<div>
		<img :src="imgSrc" alt="beautiful" />
	</div>`
};
//声明并导出
export var num1=2;

//声明再导出
var num2=3;
export {num2};

export function add(x,y){
	return console.log(x+y);
}

export default app;