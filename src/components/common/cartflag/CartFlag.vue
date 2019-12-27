<template>
    <div :class="{flag : true, isflag : isFlag}">
      <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "CartFlag",
      props: {
          isFlag: {
            type: Boolean,
            default: false
          }
      }
    }
</script>

<style scoped>
  .flag {
    padding: 50px 5px 0px;
  }

  .isflag img{
    background: red;
  }

.flag img {
  width: 20px;
  border-radius: 50%;
  border: 1px solid #ccc;
}
</style>
