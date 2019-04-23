export default{
		//异步数据在actions操作
		addCountByasync({commit},payload){
			setTimeout(()=>{
				commit('addCountByasync2',payload.num)
			},1000)
		},
		changeState({commit},payload){
			commit('changeState',payload.name);
		}
}