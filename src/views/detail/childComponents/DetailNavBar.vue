<template>
    <div>
      <nav-bar>
        <div class="nav-bar-left" slot="left" @click="leftClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div class="detail-nav-bar" slot="center" >
          <div class="detail-nav-item" v-for="(value, index) in topArray" :key="index" @click="navClick(index)" :class="{active : index == currentIndex}">{{value}}</div>
        </div>
      </nav-bar>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

    export default {
      name: "DetailNavBar",
      props: {
        topArray: {
          type: Array,
          default: []
        }
      },
      data () {
        return {
          currentIndex: 0
        }
      },
      components: {
        NavBar
      },
      methods: {
        leftClick () {
          this.$router.back()
        },
        navClick (index) {
          this.currentIndex = index
        }
      }
    }
</script>

<style scoped>
  .nav-bar-left img{
    margin-top: 11px;
  }

  .detail-nav-bar {
    display: flex;

    font-size: 13px;
  }

  .detail-nav-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }
</style>
