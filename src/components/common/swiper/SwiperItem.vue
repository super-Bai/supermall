<template>
    <li class="swiper-item">
        <slot></slot>
    </li>
</template>

<script>
    export default {
        name: "SwiperItem"
    }
</script>

<style scoped>
    li a{
        display: block;
        width: 100%;
        height: 100%;
    }
    li a img{
        width: 100%;
        height: 100%;
        display: block;
    }
</style>
