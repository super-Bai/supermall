<template>
    <div v-if="Object.keys(shopInfo).length" class="shop-info">
      <div class="top">
        <img :src="shopInfo.shopLogo" alt="">
        <span>{{shopInfo.name}}</span>
      </div>
      <div class="center">
        <div class="left">
          <div class="left-item">{{cSells}}</div>
          <div class="left-item">{{shopInfo.cGoods}}</div>
          <div class="left-item">总销量</div>
          <div class="left-item">全部宝贝</div>
        </div>
        <div class="right">
          <div v-for="(value, key) in shopInfo.score" :key="key" class="right-item">
            <div>{{value.name}}</div>
            <div :style="{color: value.isBetter ? 'red' : 'green'}">{{score(key)}}</div>
            <div :style="{background: value.isBetter ? 'red' : 'green'}" class="isBetter">{{isBetter(value.isBetter)}}</div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <span @click="seeSee" class="bottom-item">进店逛逛</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shopInfo: {
        type: Object,
        default: {}
      }
    },
    methods: {
      seeSee () {
        console.log('进店康康')
      }
    },
    computed: {
      cSells () {
        let sell = this.shopInfo.cSells
        let param = {}
        let k = 10000,
          sizes = ['', '万', '亿', '万亿'],
          i
        if(sell < k){
          param.value =sell
          param.unit=''
        }else{
          i = Math.floor(Math.log(sell) / Math.log(k))

          param.value = ((sell / Math.pow(k, i))).toFixed(1)
          param.unit = sizes[i]
        }
        return param.value + param.unit
      },
      score () {
        return function (key) {
          return this.shopInfo.score[key].score.toFixed(1)
        }
      },
      isBetter () {
        return function (flag) {
          if (flag) {
            return '高'
          } else {
            return '低'

          }
        }
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    padding-bottom: 15px;
    border-bottom: 2px solid #eee;
  }
  .top {
    padding: 15px 5px;
    font-size: 16px;
    color: black;
  }
.top img{
  width: 50px;
  height: 50px;
}
  .top span {
    position: relative;
    top: -19px;
    left: 10px;
  }
  .center {
    width: 100%;
    padding: 0px 5px;
    font-size: 14px;
    color: black;
  }
  .left {
    position: relative;
    top: 20px;
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    text-align: center;
    border-right: 2px solid #eee;
  }
  .left-item {
    width: 50%;
  }
  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0px 15px;
  }
  .right-item {
    padding: 3px 0px;
    display: flex;
    justify-content: space-between;
  }
  .isBetter {
    color: white;
    border-radius: 5px;
  }
  .bottom {
    margin-top: 90px;
    color: #666666;
    text-align: center;
  }
  .bottom-item {
    padding: 3px 50px;
    border-radius: 3px;
    background: #eee;
  }
</style>
