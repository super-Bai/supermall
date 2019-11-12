<template>
  <div class="tab-contral">
    <div class="tab-contral-item" v-for="(item, key) in title" :class="{active : currentIndex ===key}" @click="setCurrent(key)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TabContral",
      props: {
          title: {
            type: Array,
            default() {
              return []
            }
          }
      },
      data() {
          return {
            currentIndex: 0
          }
      },
      methods: {
        setCurrent (index) {
          this.currentIndex = index;
          this.$emit('tabClick', index)
        }
      }
    }
</script>

<style scoped>
  .tab-contral {
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    background: #fff;
    z-index: 9;
  }

  .tab-contral-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    padding: 5px;
    border-bottom: 3px solid var(--color-tint);
  }
</style>
