<template>
  <div class="cart-total">
    <div class="img">
      <img src="~assets/img/cart/tick.svg" alt="">
    </div>
    <div>全选</div>
    <div class="price">
      合计：￥{{}}
    </div>
    <div class="gun">滚去掏钱()</div>
  </div>
</template>

<script>
    export default {
        name: "CartTotal"
    }
</script>

<style scoped>
.cart-total {
  height: 40px;
  font-size: 15px;
  line-height: 40px;

  display: flex;

  flex-wrap: nowrap;

  background-color: #eee;
}

.img {
  padding: 5px 5px;
}

  .img img {
    border-radius: 50%;
    border: 1px solid #ccc;
    width: 20px;
    background-color: red;
  }

  .price {
    padding-left: 10px;
  }

  .gun {
    width: 100px;
    text-align: center;
    right: 10px;
    background: red;
    color: white;

    position: absolute;
    right: 0;
  }
</style>
