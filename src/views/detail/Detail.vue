<template>
    <div class="detail">
      <detail-nav-bar :topArray="navMsg"/>
      <scroll class="content">
        <detail-swiper :topImg="topImg"/>
        <detail-base-info :good="good"/>
        <detail-shop-info :shopInfo="shopInfo"/>
        <detail-show-info :showInfo="showInfo"/>
        <detail-params :showParams="showParams"/>
        <detail-comment :commentInfo="commentInfo"/>
        <detail-recommend/>
      </scroll>
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

  import Scroll from 'components/common/scroll/Scroll'

  import {getDetailData, Good, ShopInfo, ShowInfo, ShowParams} from "network/detail";

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

      Scroll,
    },
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
        commentInfo: {}
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
    },

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
    bottom: 0;

    overflow: hidden;
  }
</style>
