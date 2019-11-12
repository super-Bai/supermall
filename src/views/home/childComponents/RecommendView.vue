<template>
    <div class="recommend-view">
      <div v-for="item in recommendList" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
        <div>{{item.title}}</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendView",
      props: {
          recommendList: {
            type: Array,
            default() {
              return []
            }
          }
      }
    }
</script>

<style scoped>
  .recommend-view {
    display: flex;
    text-align: center;
    font-size: 15px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
