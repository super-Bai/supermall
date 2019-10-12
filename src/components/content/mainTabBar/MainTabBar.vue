<template>
  <tab-bar>
    <bar-item path="/home">
      <img slot="item-img" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="img-active" src="~assets/img/tabbar/home-active.svg" alt="">
      <div class="item-text" slot="item-text">首页</div>
    </bar-item>
    <bar-item path="/category">
      <img slot="item-img" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="img-active" src="~assets/img/tabbar/category-active.svg" alt="">
      <div slot="item-text" class="item-text">分类</div>
    </bar-item>
    <bar-item path="/cart">
      <img slot="item-img" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="img-active" src="~assets/img/tabbar/shopcart-active.svg" alt="">
      <div slot="item-text" class="item-text">购物车</div>
    </bar-item>
    <bar-item path="/profile">
      <img slot="item-img" src="~assets/img/tabbar/Profile.svg" alt="">
      <img slot="img-active" src="~assets/img/tabbar/Profile-active.svg" alt="">
      <div slot="item-text" class="item-text">我的</div>
    </bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/TabBar/TabBar'
import BarItem from 'components/common/TabBar/BarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    BarItem
  }
}
</script>

<style scoped>
  .item-text{
    margin-top: -1px;
  }
</style>
