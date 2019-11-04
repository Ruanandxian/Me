<template>
    <div>
        <detail-banner :sightName='sightName'
        :bannerImg='bannerImg'
        :bannerImgs='gallaryImgs'></detail-banner>
        <detail-header></detail-header>
        <div class='content'>
            <detai-list :list='list'></detai-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetaiList from './components/List'
import axios from 'axios'

export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetaiList
    },
    data () {
        return {
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            list:[]
        }
    },
    methods:{
        getDetailInfo () {
            // axios.get('/api/detail.json?id='+this.$route.params.id)
            axios.get('/static/mock/detail.json',{
                params:{
                    id:this.$route.params.id
                }
            }).then(this.handleGetSucc)
        },
        handleGetSucc(res){
            res=res.data
            if(res.ret&&res.data){
                const data=res.data
                this.sightName=data.sightName
                this.bannerImg=data.bannerImg
                this.gallaryImgs=data.gallaryImgs
                this.list=data.categoryList
                // console.log(data)
            }
        }
    },
    mounted () {
        this.getDetailInfo()
    }
    
}
</script>


<style lang='stylus' scoped>
    .content
        height:50rem

</style>