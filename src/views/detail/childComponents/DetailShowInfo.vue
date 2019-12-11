<template>
  <div class="detail-show-info" v-if="Object.keys(showInfo).length">
    <div class="desc">
      <div class="start"></div>
      <div class="desc-info">
        {{showInfo.showDesc}}
      </div>
      <div class="end"></div>
    </div>
    <div class="key">{{showInfo.detailImage[0].key}}</div>
    <div class="image-info">
      <div v-for="(value, index) in showInfo.detailImage[0].list" :key="index">
        <img :src="value" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShowInfo",
    props: {
      showInfo: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .detail-show-info {
    border-bottom: 2px solid #eee;
  }

  .desc{
    padding: 15px 0;
    color: black;
    font-size: 14px;
  }

  .desc .start, .desc .end {
    width: 90px;
    height: 1px;
    background: black;
    position: relative;
  }

  .desc .start{
    float: left;
  }

  .desc .end {
    float: right;
  }

  .desc .start::before, .desc .end::after{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .desc .start::before{
    top: 0;
  }

  .desc .end::after{
    right: 0;
  }


  .desc-info {
    padding: 20px 15px;
  }

  .key{
    color: black;
    padding: 10px 10px;
  }

  .image-info {
    padding-bottom: 15px;
  }

  .image-info div {
    margin-top: -2px;
  }

  .image-info img {
    width: 100%;
  }
</style>
