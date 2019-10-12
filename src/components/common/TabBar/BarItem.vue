<template>
  <div class="tabbar-item" :class="{'item-back': isActive}" @click="setView">
    <div v-if="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="img-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  name: 'BarItem',
  data () {
    return {
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    setView () {
      if (this.path !== this.$route.path) {
        this.$router.replace(this.path)
      }
    }
  }
}
</script>

<style scoped>
.item-back{
  background-color: #ccc;
}
.tabbar-item{
  flex: 1;
  height: 49px;
  font-size: 14px;
  text-align: center;
}
.tabbar-item img{
  width: 24px;
  height: 24px;

  margin-top: 3px;
  vertical-align: middle;
}

</style>
