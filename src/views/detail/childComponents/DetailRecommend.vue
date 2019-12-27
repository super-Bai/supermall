<template>
  <div class="detail-recommend" v-if="recommend.length">
    <div class="top">热门推荐</div>
    <goods-list :goods="recommend"/>
  </div>
</template>

<script>
  import GoodsList from 'components/content/goodsList/GoodsList'

  export default {
    name: "DetailRecommend",
    props: {
      recommend: {
        type: Array,
        default: []
      }
    },
    components: {
      GoodsList
    }
  }
</script>

<style scoped>
.top {
  padding: 15px 20px;
}
</style>
