import {debounce} from './utils'

export const itemListenerMixin = {
  data () {
    return {
      loadImg: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    //事件总线监听图片加载（加防抖操作）

    this.loadImg = () => {
      refresh()
    }

    this.$bus.$on('imgLoad', this.loadImg)
  }
}

export const backTopMixin = {
  data () {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    //backTop回到顶部
    backTop () {
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}
