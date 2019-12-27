<template>
  <div class="cart-list-item">
    <div class="flag">
      <cart-flag @click.native="setFlag" :isFlag="listItem.isSelection"/>
    </div>
    <div class="img">
      <img :src="listItem.img" alt="">
    </div>
    <div class="text">
      <div class="title">{{listItem.title}}</div>
      <div class="desc">商品简介：{{listItem.desc}}</div>
      <div class="price">
        ￥{{listItem.price}}
        <div class="count">x{{listItem.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CartFlag from 'components/common/cartflag/CartFlag'

  export default {
    name: "CartListItem",
    props: {
      listItem: {
        type: Object,
        default: {}
      }
    },
    components: {
      CartFlag
    },
    methods: {
      setFlag () {
        this.listItem.isSelection = !this.listItem.isSelection
        console.log(this.listItem.isSelection);
      }
    }
  }
</script>

<style scoped>
.cart-list-item {
  width: 100%;
  height: 120px;
  display: flex;
  flex-wrap: nowrap;

  border-bottom: 1px solid #eee;
}

  /*.cart-list-item>div {*/
    /*flex: 1;*/
  /*}*/
.img {
  width: 30%;
  height: 100px;
  margin: 10px 5px;
  border-radius: 7px;

  overflow: hidden;
}

  .img img {
    height: 100%;
    border: 1px solid #eee;
  }

  .text {
    width: 65%;
    margin: 10px 5px;
  }

  .text>div {
    margin: 5px;

    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

  .title {
    font-size: 18px;
    font-weight: 700;
    color: black;
  }

  .desc {
    color: black;
    font-size: 15px;
  }

  .text .price {
    position: relative;
    top: 20px;
    color: var(--color-tint);
  }

  .count {
    display: inline-block;
    position: absolute;
    right: 5px;
    line-height: 21px;
  }
</style>
