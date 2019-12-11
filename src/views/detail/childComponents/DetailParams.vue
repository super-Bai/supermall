<template>
  <div v-if="Object.keys(showParams).length" class="detail-params">
    <div class="rules">
      <div v-for="(table, index) in showParams.itemRule.tables" :key="index">
        <div v-for="(item, indey) in table" :key="indey" class="item">
          <div v-for="(itemInfo, indez) in item" :key="indez" class="item-info">{{itemInfo}}</div>
        </div>
      </div>
    </div>

    <div class="size">
      <div v-for="(set, index) in showParams.itemInfo.set" :key="index" class="set">
        <div class="set-key">{{set.key}}</div>
        <div class="set-value">{{set.value}}</div>
      </div>
    </div>

    <div class="img">
      <img :src="showParams.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParams",
    props: {
      showParams: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .detail-params {
    padding: 10px 20px;
    font-size: 14px;
    color: black;
    border-bottom: 2px solid #eee;
  }

  .rules {
    border-bottom: 1px solid #eee;
  }

.item {
  padding: 10px 0;
  display: flex;
  border-bottom: 1px solid #eee;
}

  .item-info {
    flex: 1;
  }

  .set {
    display: flex;
    padding: 10px 0px;
    border-bottom: 1px solid #eee;
  }

  .set-key {
    width: 25%;
  }

  .set-value {
    width: 70%;
    color: #ff5777;
  }

  .img img {
    width: 100%;
  }
</style>
