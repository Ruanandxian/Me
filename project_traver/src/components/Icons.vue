<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.url">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import src1 from "../assets/biaoqing.png";
import src2 from "../assets/dianshiji.png";
import src3 from "../assets/diqiuyi.png";
import src4 from "../assets/gaoreliang.png";
import src5 from "../assets/jishiben.png";
import src6 from "../assets/lipin.png";
import src7 from "../assets/naozhong.png";
import src8 from "../assets/qiche.png";
import src9 from "../assets/reqiqiu.png";
import src10 from "../assets/shuiguo.png";
import src11 from "../assets/zhiwu.png";
import src12 from "../assets/zhunshida.png";

export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      },
      swiperOption: {
        autoplay: false
      },
      iconList: [
        {
          id: 1,
          url: src1,
          desc: "表情"
        },
        {
          id: 2,
          url: src2,
          desc: "电视机"
        },
        {
          id: 3,
          url: src3,
          desc: "地球仪"
        },
        {
          id: 4,
          url: src4,
          desc: "高热量"
        },
        {
          id: 5,
          url: src5,
          desc: "记事本"
        },
        {
          id: 6,
          url: src6,
          desc: "礼品"
        },
        {
          id: 7,
          url: src7,
          desc: "闹钟"
        },
        {
          id: 8,
          url: src8,
          desc: "汽车"
        },
        {
          id: 9,
          url: src9,
          desc: "热气球"
        },
        {
          id: 10,
          url: src10,
          desc: "水果"
        },
        {
          id: 11,
          url: src11,
          desc: "植物"
        },
        {
          id: 12,
          url: src12,
          desc: "准时达"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>


<style lang='stylus' scoped>
@import '~styles/varibles.styl';
@import '~styles/mixin.styl';

.icons >>> .swiper-container {
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
}

.icons {
  margin-top: 0.1rem;

  .icon {
    position: relative; // 自适应，允许叠加
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img {
      position: absolute; // 不允许叠加
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.2rem;

      .icon-img-content {
        display: block; // 块元素
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $darkTextColor;
      ellipsis();
    }
  }
}
</style>