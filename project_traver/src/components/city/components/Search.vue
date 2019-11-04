<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="🔍输入城市名或拼音"/>
        </div>
        <div class='search-content' ref='search' v-show="keyword">
            <ul>
                <li class='search-item border-bottom' v-for="item of list" :key="item.id" @click='handlecityclick(item.name)'>
                    {{item.name}}
                </li>
                <li class='search-item border-bottom' v-show="Nodata">
                        没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>

</template>


<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
    name:'CitySearch',
    props:{
        cities:Object
    },
    data () {
        return {
            keyword:'',
            list:[],
            timer:null
        }
    },
    computed:{
        Nodata(){
            return !this.list.length
        }
    },
    methods:{
         handlecityclick(city){
            // this.$store.dispath('changecity',city)
            // this.$store.commit('changecity',city)
            this.changecity(city)
            this.$router.push('/')
        },
    },
    watch:{
        keyword () {
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list=[]
                return
            }
            this.timer=setTimeout(()=>{
                const result=[]
                for (let i in this.cities){
                    this.cities[i].forEach((value)=>{
                        if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
                            result.push(value)
                        }
                    })
                }
                this.list=result
            },100)
        }
    },
    mounted () {
        this.scroll=new Bscroll(this.$refs.search)
    }
}
</script>


<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .search
        height 0.72rem
        padding:0 .1rem
        background:$bgColor
        .search-input
            box-sizing :border-box
            width:100%
            height:.62rem
            padding:0 .1rem
            line-height:.62rem
            text-align:center
            border-radius :.06rem
            color:#666
    .search-content
        z-index:1
        overflow:hidden
        position:absolute
        top:1.58rem
        left:0
        right:0
        bottom:0
        background:#eee
        .search-item
            line-height:.62rem
            padding-left:.2rem
            background:#fff
            color:#666

</style>
