<template>
    <swiper v-if="topImg.length" class="detail-swiper">
      <swiper-item v-for="(value, index) in topImg" :key="index"><img :src="value" alt=""></swiper-item>
    </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index'
  export default {
    name: "DetailSwiper",
    props: {
      topImg: {
        type: Array
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }


</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
