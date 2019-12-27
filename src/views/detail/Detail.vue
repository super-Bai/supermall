<template>
    <div class="detail">
      <detail-nav-bar :topArray="navMsg" :currentIndex="navBarCurrent" @detailScrollTo="detailScrollTo"/>
      <scroll class="content"
              ref="scroll"
              :probeType="3"
              @scrollBackTop="navBarLink">
        <ul>
          <li v-for="item in $store.state.cartList">{{item}}</li>
        </ul>
        <detail-swiper :topImg="topImg" ref="swiper"/>
        <detail-base-info :good="good"/>
        <detail-shop-info :shopInfo="shopInfo"/>
        <detail-show-info :showInfo="showInfo"/>
        <detail-params :showParams="showParams" ref="params"/>
        <detail-comment :commentInfo="commentInfo" ref="comment"/>
        <detail-recommend :recommend="recommend" ref="recommend"/>
      </scroll>
      <detail-bottom-bar @sendPayload="sendPayload"/>
      <back-top @click.native="backTop" v-show="isShowBackTop"/>
    </div>
</template>

<script>
  import DetailNavBar from './childComponents/DetailNavBar'
  import DetailSwiper from './childComponents/DetailSwiper'
  import DetailBaseInfo from './childComponents/DetailBaseInfo'
  import DetailShopInfo from './childComponents/DetailShopInfo'
  import DetailShowInfo from './childComponents/DetailShowInfo'
  import DetailParams from './childComponents/DetailParams'
  import DetailComment from './childComponents/DetailComment'
  import DetailRecommend from './childComponents/DetailRecommend'
  import DetailBottomBar from './childComponents/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'

  import BackTop from 'components/content/backTop/BackTop'

  import {getDetailData, Good, ShopInfo, ShowInfo, ShowParams, getRecommendData} from "network/detail";
  import {itemListenerMixin, backTopMixin} from "common/mixin";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailShowInfo,
      DetailParams,
      DetailComment,
      DetailRecommend,
      DetailBottomBar,

      Scroll,
      BackTop
    },
    mixins: [itemListenerMixin, backTopMixin],
    data () {
      return {
        iid: '',
        msg: null,
        navMsg: ['商品', '参数', '评论', '推荐'],
        topImg: [],
        good: {},
        shopInfo: {},
        showInfo: {},
        showParams: {},
        commentInfo: {},
        recommend: [],
        navBarEl: [],
        topArr: [],
        navBarCurrent: 0
      }
    },
    created () {
      this.iid = this.$route.params.iid
      getDetailData(this.iid).then(res => {
        this.msg = res
        this.good = new Good(res.result.itemInfo, res.result.columns, res.result.shopInfo)
        this.shopInfo = new ShopInfo(res.result.shopInfo)
        this.showInfo = new ShowInfo(res.result.detailInfo)
        this.showParams = new ShowParams(res.result.itemParams)
        this.commentInfo = res.result.rate
        console.log(res);
        this.topImg.push(...res.result.itemInfo.topImages)
      })

      getRecommendData().then(res => {
        this.recommend = res.data.list
      })
    },
    mounted () {
      this.navBarEl.push(this.$refs.swiper)
      this.navBarEl.push(this.$refs.params)
      this.navBarEl.push(this.$refs.comment)
      this.navBarEl.push(this.$refs.recommend)
    },
    updated () {
      this.setTopArr()
    },
    methods: {
      //添加商品
      sendPayload () {
        console.log('添加商品');
        const item = {
          title: this.msg.result.itemInfo.title,
          img: this.showInfo.detailImage[0].list[0],
          price: this.msg.result.itemInfo.lowNowPrice,
          desc: this.msg.result.itemInfo.desc,
          iid: this.iid
        }

        this.$store.dispatch('addCart', item)
      },
      //处理topArr
      setTopArr () {
        this.topArr = this.navBarEl.map(x => x.$el.offsetTop)
        this.topArr.push(Number.MAX_VALUE)
      },
      //navBar的相应事件
      detailScrollTo (index) {
        this.navBarCurrent = index
        this.$refs.scroll.scrollToElement(this.navBarEl[index].$el, 500)
      },
      //滚动监听事件，navBar
      navBarLink (position) {
        //监听backTop显示
        this.isShowBackTop = (-position.y) > 1000

        //监听navBar转换
        let nam = this.navBarEl.length
        for (let i = 0; i < nam; i++) {
          if (-position.y >= this.topArr[i] && -position.y < this.topArr[i + 1]) {
            this.navBarCurrent = i
            return
          }
        }
      }
    },
    destroyed() {
      this.$bus.$off('imgLoad', this.loadImg)
    }
  }
</script>

<style scoped>
  .detail {
    height: 100vh;
    position: relative;
    background: white;
    z-index: 9;
  }

  .content {
    background: white;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 58px;

    overflow: hidden;
  }
</style>
