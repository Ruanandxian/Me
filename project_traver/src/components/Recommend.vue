<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag='li' class="item border-bottom" v-for="item of RecommendList" :key="item.id" :to="'/detail/'+item.id">
        <img class="item-img" :src="item.pictureurl" alt>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array
  },
  data() {
    return {
      RecommendList: [
        {
          id: 1,
          title: "不如去大理",
          desc: "彷徨无际、心无所依的时候，不如去大理。",
          pictureurl:
            "https://imgs.qunarzz.com/p/p51/201302/28/08cb6aa6da5c6e1d93835fbb.jpg_256x160_695c6ff2.jpg"
        },
        {
          id: 2,
          title: "夏日物语，到西递做一场水墨田园梦",
          desc:
            "一袭长发，清澈的眸子闪烁着纯真，十指曼妙的轻捏着一尾鲫鱼，旁边的泥土中摇曳着稚嫩的秧苗，风光旖旎。轻轻地走过夏日的西递，徽韵、田野、童趣，交织成画，让人瞬间迷失在这水光漪涟的刹那里。",
          pictureurl:
            "https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/7239fdae01b8c316c63ac5d7fd36e727.jpg_r_680x453x95_4ab1cee8.jpg"
        },
        {
          id: 3,
          title: "冲绳——一座安静又美丽的小城",
          desc:
            "2019年3月30日至4月3日，我和麻麻一起去冲绳玩儿了一圈。我们之前去过北海道、大阪、京都还有奈良，冲绳和它们比起来，不像典型的日本城市，它有一种独特的风格。从饮食到建筑再到当地人的长相，冲绳好比中国的少数民族一样，带给人一种新鲜的异域风情。",
          pictureurl:
            "https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/89f7b2859d1ebd564a3421a7e9411e97.jpg_r_680x510x95_994b969e.jpg"
        },
        {
          id: 4,
          title: "在香港的旅途中，谱写一支属于我们的欢歌",
          desc:
            "在一家复古杂货店里穿越时空，回到70-80年代的香港。而整个旅途，最精彩的部分当然还是因为跟你们在一起，因为有你们，旅途中变得更加充满乐趣，因为有你们，一路上的风光更加旖旎多姿，因为有你们，就连食物吃起来也更好吃的样子",
          pictureurl:
            "https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/d27425f76774eb049c85326a14e31ade.jpg_r_680x509x95_ad748808.jpg"
        },
        {
          id: 5,
          title: "自驾黔南青山绿水，一路遇见别样好花红",
          desc:
            "从都匀市区出发沿高速向北自驾约60公里，即可抵达历史悠久的小城——福泉，前几年福泉好几个景区被评为4A级景区，所以这次来福泉主要是想看看太极大师张三丰修仙的福泉山，以及始建于明代的古城垣。",
          pictureurl:
            "https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/781e0f1cb25ab059a29a17030298454e.jpg_r_680x453x95_bc3a8071.jpg"
        }
      ]
    };
  }
};
</script>


<style lang='stylus' scoped>
@import '~styles/mixin.styl';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }

    .item-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #3bb1ff;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>