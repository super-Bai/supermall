<template>
  <div>
    <h3>{{text}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      arr: ['あ', 'い', 'う', 'え', 'お',
        'か', 'き', 'く', 'け', 'こ',
        'さ', 'し', 'す', 'せ', 'そ',
        'た', 'ち', 'つ', 'て', 'と',
        'な', 'に', 'ぬ', 'ね', 'の',
        'は', 'ひ', 'ふ', 'へ', 'ほ',
        'ま', 'み', 'む', 'め', 'も',
        'や', 'ゆ', 'よ', 'わ', 'を',
        'ら', 'り', 'る', 'れ', 'ろ',
        'ん'],
      text: ''
    }
  },
  created () {
    let a, b, tem
    for (let i = 0; i < 300; i++) {
      a = Math.round(Math.random() * 45)
      b = Math.round(Math.random() * 45)
      tem = this.arr[a]
      this.arr[a] = this.arr[b]
      this.arr[b] = tem
    }
    for (let i = 0; i < 46; i++) {
      if (i > 0 & (i + 1) % 5 === 0) {
        this.text += this.arr[i] + ''
      } else {
        this.text += this.arr[i] + ''
      }
    }
  }
}
</script>

<style scoped>

</style>
