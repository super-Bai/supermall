<template>
  <swiper>
    <swiper-item v-for="(value,key) in bannerList" :key="key">
      <a :href="value.link"><img :src="value.image" alt=""></a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'

  export default {
    name: "HomeSwiper",
    props: {
      bannerList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
