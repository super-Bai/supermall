<template>
  <div class="goods-list-item">
    <img :src="item.show.img" alt="" @load="imgLoad">
    <div class="item-message">
      <p>{{item.title}}</p>
      <span class="price">¥{{item.price}}</span>
      <span class="collect">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imgLoad () {
        this.$bus.$emit('imgLoad')
      }
    }
  }
</script>

<style scoped>
.goods-list-item {
  width: 48%;
  position: relative;
  padding-bottom: 40px;
}

  .goods-list-item img {
    width: 100%;
    border-radius: 5px;
  }

  .item-message {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .item-message p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .item-message .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

.item-message .collect {
  position: relative;
}

.item-message .collect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -15px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
