<template>
    <div class="base-info" v-if="Object.keys(good).length">
      <div class="title">{{good.title}}</div>
      <div class="price">
        <div class="n-price" :style="{color: good.discountBgColor}">{{good.price}}</div>
        <div class="o-price" v-if="good.oldPrice">{{good.oldPrice}}</div>
        <div class="discount" :style="{background: good.discountBgColor}" v-if="good.discountDesc">{{good.discountDesc}}</div>
      </div>
      <div class="columns">
        <div>{{good.columns[0]}}</div>
        <div>{{good.columns[1]}}</div>
        <div>{{good.services[good.services.length-1].name}}</div>
      </div>
      <div class="services">
        <div v-for="index in good.services.length-1"><img :src="good.services[index-1].icon" alt=""><span>{{good.services[index-1].name}}</span></div>
      </div>
    </div>
</template>

<script>

  export default {
    name: "DetailBaseInfo",
    props: {
      good: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
.base-info {
  font-size: 18px;
  color: black;
}
  .title {
    padding: 10px 5px;
  }
  .price{
    padding: 5px 5px;
    display: flex;
  }
  .price div {
    margin-left: 5px;
  }
  .n-price {
    font-size: 25px;
  }
  .o-price {
    padding-top: 9px;
    font-size: 15px;
    text-decoration: line-through;
    color: #ccc;
  }
  .discount {
    color: white;
    font-size: 13px;
    height: 15px;
    padding: 1px;
    line-height: 13px;
    border-radius: 5px;
  }
  .columns {
    padding: 5px;
    display: flex;
    color: #666666;
    font-size: 13px;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
  }
 .services {
   padding: 15px 5px;
   display: flex;
   justify-content: space-between;
   font-size: 13px;
   border-bottom: 2px solid #eee;
 }
  .services img {
    width: 13px;
    height: 13px;
    position: relative;
    top: 1px;
  }
  .services span {
    padding-left: 2px;
  }
</style>
