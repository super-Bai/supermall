<template>
  <div class="cart-main-list">
    <cart-list-item v-for="(item, index) in cartList" :listItem="item" :key="index"/>
  </div>
</template>

<script>
  import CartListItem from './CartListItem'
  export default {
    name: "CartMainList",
    props: {
      cartList: {
        type: Array,
        default: []
      }
    },
    components: {
      CartListItem
    }
  }
</script>

<style scoped>

</style>
