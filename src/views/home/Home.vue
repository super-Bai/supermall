<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <tab-contral class="tab-contral" :title="['流行', '新款', '精选']" @tabClick="tabClick" v-show="isShowTabControl" ref="tabControl2"/>
      <scroll class="content"
              ref="scroll"
              :probeType="3"
              @scrollBackTop="scrollBackTop"
              :pullUpLoad="true"
              @pullingUp="pullingUp">
        <home-swiper :banners="bannerList"
                     ref="hSwiper"
                     @swiperImgLoad="geiTabControlTop"></home-swiper>
        <recommend-view :recommendList="recommendList"/>
        <feature-view/>
        <tab-contral :title="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl1"/>
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
  import {itemListenerMixin, backTopMixin} from "common/mixin";

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
    mixins:[itemListenerMixin, backTopMixin],
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
        isShowTabControl: false,
        tabControlTop: 0,
        saveY: 0
      }
    },
    created () {
      this.sendHomeData()

      this.sendHomeGoodsdata('pop')
      this.sendHomeGoodsdata('new')
      this.sendHomeGoodsdata('sell')
    },
    activated: function () {
      this.$refs.hSwiper.startTimer()
    },
    deactivated: function () {
      this.$refs.hSwiper.stopTimer()

      this.$bus.$off('imgLoad', this.loadImg)
    },
    methods: {
      /**
       *  监听事件方法
       */
      //获取tabControl高度
      geiTabControlTop () {
        this.tabControlTop = this.$refs.tabControl1.$el.offsetTop
      },
      pullingUp () {
        this.sendHomeGoodsdata(this.currentTab)
      },
      scrollBackTop (position) {
        //监听backTop显示
        this.isShowBackTop = (-position.y) > 1000
      //  监听tabControl2显示
        this.isShowTabControl = (-position.y) > this.tabControlTop
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
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
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
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .tab-contral {
    position: relative;
    z-index: 9;
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
