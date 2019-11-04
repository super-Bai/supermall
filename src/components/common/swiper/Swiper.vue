<template>
    <div class="swiper">
        <div class="banner">
            <ul class="clearfix">
                <li class="first"></li>
                <slot></slot>
                <li class="last"></li>
            </ul>
            <ul class="clearfix" :style="{display: ifclub ? 'block' : 'none'}">
                <li class="now"></li>
                <li v-for="item in itemNum"></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Swiper",
        props: {
            ifclub: {
                type: Boolean,
                default: true
            },
            switchTime: {
                type: Number,
                default: 3000
            }
        },
        data () {
          return {
              itemNum: 0,
            ifItemOk: false,
            kk: 0
          }
        },
        methods: {
            init () {
                let firstLi = document.getElementsByClassName('first')[0];
                let lastLi = document.getElementsByClassName('last')[0];
                let items = document.querySelectorAll('.swiper-item');
                console.log(items.length);
                firstLi.innerHTML = items[items.length-1].innerHTML;
                lastLi.innerHTML = items[0].innerHTML;
                this.itemNum=items.length-1;
                setTimeout(() => {
                  this.banner()
                },500)
            },
            /* 动态设置过渡 */
            addTransition (ele) {
                ele.style.transition = "all .6s";
                ele.style.webkitTransition = "all .6s";
            },
            /* 移除过渡效果 */
            removeTransition (ele) {
                ele.style.transition = "none";
                ele.style.webkitTransition = "none";
            },
            /* 设置容器平移 -- 也就是滑动动画
	        ele:当前元素
	        xwidth:平移的距离
            */
            setTranslateX (ele, xwidth) {
                ele.style.transform = "translateX(" + xwidth + "px)";
                ele.style.webkitTransform = "translateX(" + xwidth + "px)";
            },
            banner () {
              console.log('jdhfjshjd');
              var ban=this;
                /** 轮播图分析 */
                /** 1 自动轮播且无缝 [定时器、过渡动画]
                 *  2 点要随着图片的轮播而改变 [根据索引切换]
                 *  3 滑动效果 [touch事件]
                 *  4 图片随着点而变化
                 *  5 滑动结束的时候，如果滑动的距离不超过屏幕的1/3，就恢复回去 [过渡]
                 *  6 滑动结束的时候，如果滑动的距离超过屏幕的1/3，就切换 [滑动方向 + 过渡]]
                 */
                var timer = ''
                /* 封装定时器函数 */
                var startInterval = function () {
                    timer = setInterval(function () {
                        index++;// 基于索引 做位移
                        ban.addTransition(imgBox); // 为轮播图片组的ul设置过渡函数
                        ban.setTranslateX(imgBox, -index * width);// 根据当前索引值计算平移的距离
                    }, ban.switchTime);
                }
                var banner = document.querySelector(".banner");
                var width = banner.offsetWidth;  // 屏幕的宽度
                var imgBox = banner.querySelector("ul:first-child");  // 轮播图片ul
                var length = imgBox.querySelectorAll("li").length; // 图片的个数
                var pointBox = banner.querySelector("ul:last-child");// 分页器ul
                var points = pointBox.querySelectorAll("li");// 分页器集合
                var index = 1; // 初始化索引，由于要无缝衔接，索引从1开始,
              var isMoveTr = false;//判断是否动画中，防止快速滑动
                startInterval();

                /* transitionend事件：当元素过渡动画结束后执行
                    每次轮播动画结束后，判断当前索引值
                 */
                imgBox.addEventListener("transitionend", function () {
                    if (index >= length - 1) {
                        index = 1;
                        //  清过渡，瞬间定位imgBox
                        ban.removeTransition(imgBox);
                        ban.setTranslateX(imgBox, -index * width);
                    }
                    // 滑动的时候也需要无缝
                    else if (index <= 0) {
                        index = length-2;
                        ban.removeTransition(imgBox);
                        ban.setTranslateX(imgBox, -index * width);
                    }
                    showPoint(index - 1); // 改变分页器状态
                });

                var showPoint = function (index) {
                  for (var i = 0; i < points.length; i++) {
                        points[i].className = '';
                    }
                    points[index].className = "now";
                };
                /* 滑动切换 (touch事件) */
                var startX = 0; // 触摸起始点
                imgBox.addEventListener("touchstart", function (e) {
                    // 记录起始位置的X坐标
                    clearInterval(timer);
                    startX = e.touches[0].clientX;
                });
                var distanceX = 0;
                var translateX = 0;
                // **** 加一个标识，判断用户有没有滑动
                var isMove = false
                imgBox.addEventListener("touchmove", function (e) {
                    var moveX = e.touches[0].clientX;
                    // 计算位移,有正负方向
                    distanceX = moveX - startX;
                    // 计算目标元素的位移
                    // 元素将要的定位 = 当前定位 + 手指移动的距离
                    translateX = -index * width + distanceX;
                    // ********** 要想图片实时地跟着手指走，一定要把过渡清楚掉
                    ban.removeTransition(imgBox)
                    ban.setTranslateX(imgBox, translateX);
                    isMove = true;// 确定用户有滑动
                    e.preventDefault(); // 去除移动端浏览器默认的滑动事件
                });

                imgBox.addEventListener("touchend", function (e) {
                    if (isMove) {
                        if (Math.abs(distanceX) > width / 3) {
                            // 切换
                            if (distanceX > 0) {
                                // 上一张
                                index = index - 1;
                            } else {
                                // 下一张
                                index = index + 1;
                            }

                            ban.addTransition(imgBox); // 设置过渡动画
                            ban.setTranslateX(imgBox, -index * width);
                            var indexTemp;
                          console.log(index);
                          if (index >= length-1) {
                                indexTemp = 1;
                            }
                            if (index <= 0) {
                                indexTemp = length-2;
                            }
                            if (indexTemp) {
                                showPoint(indexTemp - 1);
                            } else {
                                showPoint(index - 1);
                            }


                        } else {
                            // 不满足滑动条件，回退到之前的状态
                            ban.addTransition(imgBox);
                            ban.setTranslateX(imgBox, -index * width);
                            showPoint(index - 1);
                        }
                    }
                    // **** 最好做一次参数的重置
                    startX = 0;
                    distanceX = 0;
                    isMove = false;
                    // ****** 为了严谨，再清一次定时器
                    clearInterval(timer)
                    // 加上定时器
                    startInterval();
                });
            }
        },
        mounted() {
          setTimeout(() => {
            this.init();
          },500)
        }
    }
</script>

<style scoped>
    *,
    ::before,
    ::after{
        padding: 0;
        margin: 0;
        /*兼容移动端主流浏览器*/
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        /*清除移动端点击高亮效果*/
        -webkit-tap-highlight-color: transparent;
    }
    body{
        /*移动端默认的字体*/
        font-family:Microsoft YaHei,sans-serif;
        font-size: 14px;
        color: #333;
    }
    ol,ul{
        list-style: none;
    }
    /*清除浮动*/
    .clearfix::before,
    .clearfix::after{
        content: "";
        display: block;
        height: 0;
        line-height: 0;
        visibility: hidden;
        clear: both;
    }

    .layout{
        width: 100%;
        max-width: 750px;
        min-width: 320px;
        margin: 0 auto;
        position: relative;
    }
    .banner{
        width: 100%;
        overflow: hidden;
        position: relative;
    }
    .banner ul:first-child{
        width: 1000%;
        -webkit-transform: translateX(-10%);
        transform: translateX(-10%);
    }
    .banner ul:first-child li{
        width: 10%;
        float: left;
    }
    .banner ul:last-child{
        position: absolute;
        bottom: 6px;
        width: 100%;
        text-align: center;
    }
    .banner ul:last-child li{
        width: 6px;
        height: 6px;
        border: 1px solid #fff;
        border-radius: 50%;
        display: inline-block;
        margin-left: 10px;
    }
    .banner ul:last-child li:first-child{
        margin-left: 0;
    }
    .banner ul:last-child li.now{
        background: #fff;
    }
</style>
