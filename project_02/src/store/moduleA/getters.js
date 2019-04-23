export default{
	count(state){
		return state.count
	},
	lists(state){
			return state.list;

		},
	item:(state)=>(i)=>{
			return state.list[i]
		},
	myProp(state){
		return state.myProp;
	}

}