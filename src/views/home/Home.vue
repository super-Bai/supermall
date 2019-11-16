<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <scroll class="content"
              ref="scroll"
              :probeType="3"
              @scrollBackTop="scrollBackTop"
              :pullUpLoad="true"
              @pullingUp="pullingUp">
        <home-swiper :bannerList="bannerList"/>
        <recommend-view :recommendList="recommendList"/>
        <feature-view/>
        <tab-contral class="tab-contral" :title="['流行', '新款', '精选']" @tabClick="tabClick"/>
        <goods-list :goods="goodsList"/>
      </scroll>
      <back-top @click.native="backTop" v-show="isShowBackTop"/>
    </div>
</template>

<script>
  import HomeSwiper from './childComponents/HomeSwiper'
  import RecommendView from './childComponents/RecommendView'
  import FeatureView from './childComponents/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabContral from 'components/content/tabContral/TabContral'
  import GoodsList from 'components/content/goodsList/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import {sendHomeData, sendHomeGoodsdata} from "network/home"
  import {debounce} from "common/utils";

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabContral,
      GoodsList,
      Scroll,
      BackTop
    },
    data () {
      return {
        bannerList: [],
        recommendList: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentTab: 'pop',
        isShowBackTop: false
      }
    },
    created () {
      this.sendHomeData()

      this.sendHomeGoodsdata('pop')
      this.sendHomeGoodsdata('new')
      this.sendHomeGoodsdata('sell')
    },
    mounted () {
      const refresh = debounce(this.$refs.scroll.refresh, 50)
      //事件总线监听图片加载（加防抖操作）
      this.$bus.$on('imgLoad', () => {
        refresh()
      })
    },
    methods: {
      /**
       *  监听事件方法
       */
      pullingUp () {
        this.sendHomeGoodsdata(this.currentTab)
      },
      scrollBackTop (position) {
        this.isShowBackTop = (-position.y) > 1000
      },
      tabClick (index) {
        switch (index) {
          case 0 : this.currentTab = 'pop'
                break
          case 1 : this.currentTab = 'new'
                break
          case 2 : this.currentTab = 'sell'
                break
        }
      },
      backTop () {
        this.$refs.scroll.scrollTo(0, 0)
      },

      /**
      * 请求数据方法
      */
      sendHomeData () {
        sendHomeData().then(res => {
          this.bannerList = res.data.banner.list;
          this.recommendList = res.data.recommend.list;
        })
      },
      sendHomeGoodsdata: function (type) {
        const page = this.goods[type].page + 1
        sendHomeGoodsdata(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      }
    },
    computed: {
      goodsList () {
        return this.goods[this.currentTab].list
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .tab-contral {
    position: sticky;
    top: 44px;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

    overflow: hidden;
  }
</style>
