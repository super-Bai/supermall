<template>
  <div class="bottom-bar">
    <div class="left">
      <div>
        <i class="icon kf"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon dp"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon sc"></i>
        <span>收藏</span>
      </div>
    </div>

    <div class="right">
      <div class="jrgwc" @click="sendPayload">加入购物车</div>
      <div class="gm">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      sendPayload () {
        this.$emit('sendPayload')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    width: 100%;
    height: 58px;
    position: absolute;
    bottom: 0;
    z-index: 10;
    font-size: 13px;
  }

  .bottom-bar .left,.right {
    width: 50%;
    display: flex;

    text-align: center;
  }

  .left div {
    height: 58px;
    flex: 1;
  }

  .left span {
    display: inline-block;
    padding-top: 2px;
  }

  .right div {
    flex: 1;
  }

.icon {
  display: block;
  width: 22px;
  height: 22px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  margin-left: 20px;
  margin-top: 13px;
}

  .dp {
    background-position: 0 -98px;
  }

  .kf {
    background-position: 0 -54px;
  }

  .right {
    height: 58px;
    line-height: 58px;
    font-size: 15px;
  }

  .jrgwc {

    background: yellow;
  }

  .gm {
    background: #ff5777;
    color: white;
  }
</style>
