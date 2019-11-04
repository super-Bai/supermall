<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <swiper>
        <swiper-item v-for="(value,key) in bannerList" :key="key">
          <a :href="value.link"><img :src="value.image" alt=""></a>
        </swiper-item>
      </swiper>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {sendHomeData} from "network/home"

  import {Swiper, SwiperItem} from 'components/common/swiper/index'

  export default {
    name: 'Home',
    components: {
      NavBar,
      Swiper,
      SwiperItem
    },
    data () {
      return {
        bannerList: ''
      }
    },
    created() {
      sendHomeData().then(res => {
        this.bannerList = res.data.banner.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
