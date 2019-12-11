<template>
  <div class="comment" v-if="commentInfo.cRate > 0">
    <div class="top">
      <div class="com">用户评论</div>
      <div class="more">
        <span>更多</span>
        <img src="~assets/img/common/back.svg" alt="" class="c-img">
      </div>
    </div>

    <div class="user">
      <div class="u-info">
        <img :src="avatar" alt="">
        <span>{{uname}}</span>
      </div>
      <div class="u-msg">
        {{commentInfo.list[0].content}}
      </div>
      <div class="u-date">
        <span class="date">{{commentInfo.list[0].created | userDate}}</span>
        <span>{{commentInfo.list[0].style}}</span>
      </div>
      <div class="u-img" v-if="commentInfo.list[0].images">
        <img :src="commentInfo.list[0].images[0]" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils.js'

  export default {
    name: "DetailComment",
    props: {
      commentInfo: {
        type: Object,
        default: {}
      }
    },
    computed: {
      avatar () {
        return this.commentInfo.list[0].user.avatar
      },
      uname () {
        return this.commentInfo.list[0].user.uname
      }
    },
    filters: {
      userDate (val) {
        let date = new Date(val*1000)
        return formatDate(date, 'yyyy-MM-dd')
      }
    },
    updated () {
      console.log(this.commentInfo);
    }
  }
</script>

<style scoped>
  .comment {
    border-bottom: 2px solid #eee;
    padding: 0 20px;

    color: black;
    font-size: 14px;
  }

  .comment>div {
    padding: 15px 0px;
    border-bottom: 1px solid #eee;
  }

  .top {
    display: flex;
    position: relative;
  }

  .com {
    width: 20%;
  }

  .more {
    position: absolute;
    right: 5%;
    font-size: 12px;
  }

  .more span {
    position: relative;
    top: -3px;
    left: -10px;
  }

  .c-img {
    transform: rotate(180deg);
    width: 35%;
  }

  .u-info img {
    width: 42px;
    border-radius: 50%;
  }

  .u-info span {
    position: relative;
    bottom: 15px;
    left: 20px;
  }

  .u-msg {
    padding: 5px 0;
  }

  .u-date {
    font-size: 12px;
  }

  .date {
    padding-right: 10px;
  }

  .u-img {
    padding-top: 10px;
  }

  .u-img img {
    width: 100px;
  }
</style>
