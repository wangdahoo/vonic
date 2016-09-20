<template>
  <div class="page-content" id="{{ pageId }}"
       @touchstart="touchStart($event)"
       @touchmove="touchMove($event)"
       @touchend="touchEnd($event)"
  >
    <div class="scroll-inner" id="{{ contentId }}">
      <div v-if="onRefresh" class="pull-to-refresh-layer"
           :class="{'active': state == 1, 'active refreshing': state == 2}">
        <span class="spinner-holder">
          <img class="arrow" v-if="state != 2" src="./assets/arrow.svg">
          <span class="text" v-if="state != 2">{{ refreshText }}</span>
          <img class="spinner" v-if="state == 2" src="./assets/spinner.svg">
        </span>
      </div>

      <slot></slot>

      <div v-if="onInfinite" class="loading-layer" :class="{'active': showLoading}">
        <span class="spinner-holder">
          <img class="spinner" src="./assets/spinner.svg">
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped>

  .page-content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .scroll-inner {
    width: 100%;

    -webkit-transform-origin: left top;
    -webkit-transform: translateZ(0);
    -moz-transform-origin: left top;
    -moz-transform: translateZ(0);
    -ms-transform-origin: left top;
    -ms-transform: translateZ(0);
    -o-transform-origin: left top;
    -o-transform: translateZ(0);
    transform-origin: left top;
    transform: translateZ(0);
  }

  .pull-to-refresh-layer {
    width: 100%;
    height: 60px;
    margin-top: -60px;
    text-align: center;
    font-size: 16px;
    color: #ccc;
  }

  .pull-to-refresh-layer.active {

  }

  .pull-to-refresh-layer.refreshing {

  }

  .loading-layer {
    width: 100%;
    height: 60px;
    text-align: center;
    font-size: 16px;
    line-height: 60px;
    color: #ccc;

    opacity: 0;
    transition: opacity .15s linear;
    -webkit-transition: opacity .15s linear;
  }

  .loading-layer.active {
    opacity: 1;
  }

  .spinner-holder {
    text-align: center;
    -webkit-font-smoothing: antialiased;
  }

  .spinner-holder .arrow {
    width: 20px;
    height: 20px;
    margin: 8px auto 0 auto;
  }

  .spinner-holder .text {
    display: block;
    margin: 0 auto;
    font-size: 14px;
    line-height: 28px;
    color: #aaa;
  }

  .spinner-holder .spinner {
    margin-top: 14px;
    width: 32px;
    height: 32px;
  }

  .pull-to-refresh-layer > .spinner-holder > .arrow
  {
    -webkit-transform: translate3d(0,0,0) rotate(0deg);
    transform: translate3d(0,0,0) rotate(0deg);

    transition: transform .2s linear;
    -webkit-transition: -webkit-transform .2s linear;
  }

  .pull-to-refresh-layer.active > .spinner-holder > .arrow
  {
    -webkit-transform: translate3d(0,0,0) rotate(180deg);
    transform: translate3d(0,0,0) rotate(180deg);
  }

</style>
<script>
  import uuid from 'node-uuid'
  import './module/core'
  import getContentRender from './module/render'

  const page_id = 'page-' + uuid.v4().substr(0, 8)
  const content_id = 'content-' + uuid.v4().substr(0, 8)

  let scroller, page, content, pullToRefreshLayer;
  let mousedown = false;

  let loadMoreTimer;
  let scrollbottom = false;

  export default{
    props: {
      onRefresh: Function,
      onInfinite: Function,

      refreshText: {
        type: Text,
        default: '下拉刷新'
      },
    },

    data(){
      return {
        pageId: page_id,
        contentId: content_id,
        state: 0, // 0: pull to refresh, 1: release to refresh, 2: refreshing
        stateText: 'Pull to Refresh',

        showLoading: false
      }
    },

    ready() {
      page = document.getElementById(this.pageId)
      content = document.getElementById(this.contentId)
      pullToRefreshLayer = content.getElementsByTagName("div")[0]

      scroller = new Scroller(getContentRender(content), {
        scrollingX: false,
        scrollingY: true
      });

      // enable PullToRefresh
      if (this.onRefresh) {
        scroller.activatePullToRefresh(60, () => {
          this.state = 1
        }, () => {
          this.state = 0
        }, () => {
          this.state = 2

          this.$on('$finishPullToRefresh', () => {
            setTimeout(() => {
              this.state = 0
              this.finishPullToRefresh()
            })
          })

          this.onRefresh()
        })
      }

      // enable infinite loading
      if (this.onInfinite) {
        // TODO

        loadMoreTimer = setInterval(() => {
          let {left, top, zoom} = scroller.getValues()

          if (top + 60 > content.offsetHeight - page.clientHeight) {
            if (scrollbottom) return
            scrollbottom = true
            this.showLoading = true
            // scroller.scrollTo(0, 50000, true)

            this.onInfinite()

            setTimeout(() => {
              scrollbottom = false
            }, 1500)
          }

        }, 20);
      }

      // setup scroller
      let rect = page.getBoundingClientRect()
      scroller.setPosition(rect.left + page.clientLeft, rect.top + page.clientTop)

      window.$scrollerDelegate = {
        resize: this.resize,
        finishPullToRefresh: this.finishPullToRefresh,
        triggerPullToRefresh: this.triggerPullToRefresh
      }
    },

    destroyed() {
//      console.log('Scroller Component Destroyed.');

      if (loadMoreTimer) clearInterval(loadMoreTimer);
    },

    methods: {
      getStateText(state) {
        if (state == 1) {
          return 'Release to Refresh'
        } else if (state == 2) {
          return 'Refreshing...'
        } else {
          return 'Pull to Refresh'
        }
      },

      resize() {
        scroller.setDimensions(page.clientWidth, page.clientHeight, content.offsetWidth, content.offsetHeight);
      },

      finishPullToRefresh() {
        scroller.finishPullToRefresh()
        setTimeout(() => {
          this.resize()
        })
      },

      triggerPullToRefresh() {
        scroller.triggerPullToRefresh()
      },

      scrollTo(x, y, animate) {
        scroller.scrollTo(x, y, animate)
      },

      scrollBy(x, y, animate) {
        scroller.scrollBy(x, y, animate)
      },

      touchStart(e) {
        // Don't react if initial down happens on a form element
        if (e.target.tagName.match(/input|textarea|select/i)) {
          return
        }
        scroller.doTouchStart(e.touches, e.timeStamp)
        e.preventDefault()
      },

      touchMove(e) {
        scroller.doTouchMove(e.touches, e.timeStamp)
      },

      touchEnd(e) {
        scroller.doTouchEnd(e.timeStamp)
      },

      mouseDown(e) {
        // Don't react if initial down happens on a form element
        if (e.target.tagName.match(/input|textarea|select/i)) {
          return
        }
        scroller.doTouchStart([{
          pageX: e.pageX,
          pageY: e.pageY
        }], e.timeStamp)
        mousedown = true
      },

      mouseMove(e) {
        if (!mousedown) {
          return
        }
        scroller.doTouchMove([{
          pageX: e.pageX,
          pageY: e.pageY
        }], e.timeStamp)
        mousedown = true
      },

      mouseUp(e) {
        if (!mousedown) {
          return
        }
        scroller.doTouchEnd(e.timeStamp)
        mousedown = false
      },

    }

  }
</script>
