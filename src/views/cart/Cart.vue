<template>
  <div class="cart">
    <nav-bar class="home-nav"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <scroll class="cart-scroll" ref="scroll">
      <cart-main-list :cartList="cartList"></cart-main-list>
    </scroll>
    <cart-total class="total"/>
  </div>
</template>

<script>
  import CartMainList from './childComponents/CartMainList'
  import CartTotal from './childComponents/CartTotal'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import {mapGetters} from 'vuex'

export default {
  name: 'Cart',
  components: {
    CartMainList,
    CartTotal,

    NavBar,
    Scroll
  },
  data () {
    return {
      cartList: []
    }
  },
  created () {
    this.cartList = this.storeCart
  },
  activated () {
    this.$refs.scroll.refresh()
  },
  computed: {
    ...mapGetters({
      storeCart: 'cartList',
      cartLength: 'cartLength'
    })
  }
}
</script>

<style scoped>
  .cart {
    position: relative;
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .cart-scroll {
    position: absolute;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 49px;

    overflow: hidden;
  }

  .total {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 49px;
  }
</style>
