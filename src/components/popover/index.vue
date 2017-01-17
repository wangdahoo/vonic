<template>
  <div class="von-popover"
       :class="{'visible': state == 1, 'visible active': state == 2}"
       :style="{top: top, left: left, marginTop: marginTop, marginLeft: marginLeft}">
    <div class="von-popover-content" :class="{'has-close': showClose == 'true'}">
      <slot></slot>

      <close v-if="showClose == 'true'" @click="hide()"></close>
    </div>

    <arrow :position="arrowPosition"></arrow>
  </div>
</template>
<style lang='scss'>
  .von-popover {
    position: absolute;
    z-index: 10;
    padding: 4px;
    min-width: 40px;
    visibility: hidden;

    &.visible {
      visibility: visible;
    }

    transition: opacity .3s ease-out;
    -webkit-transition: opacity .3s ease-out;

    opacity: 0;
    &.active {
      opacity: 1;
    }

    .von-popover-content {
      background-color: rgba(0,0,0,0.8);
      color: #fff;
      font-size: 13px;
      line-height: 13px;
      padding: 15px 12px 14px 12px;
      border-radius: 2px;

      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      -webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.2);

      &.has-close {
        padding-right: 25px + 12px;
      }
    }
  }

  /* android */
  .grade-b {
    .von-popover .von-popover-content {
      line-height: 13px;
      padding: 15px 12px 14px 12px;
    }
  }
</style>
<script>
  import Vue from 'vue'
  import Arrow from './arrow'
  import Close from './close'

  const pageContent = () => {
    return document.querySelector('.page .page-content')
  }

  const onScroll = (e) => {
    pageContent().setAttribute('scrollTop', e.target.scrollTop)
  }

  export default {
    components: {
      Arrow,
      Close
    },

    props: {
      direction: {
        type: String,
        default: 'top'
      },

      top: {
        type: String,
        default: '50%'
      },

      left: {
        type: String,
        default: '50%'
      },

      target: {
        type: String
      },

      toggle: {
        type: String,
        default: 'false'
      },

      duration: {
        type: String,
        default: '3000',
        validator(v) {
          return typeof v + 0
        }
      },

      showClose: {
        type: String,
        default: 'false'
      }
    },

    data() {
      return {
        marginTop: 0,
        marginLeft: 0,
        arrowPosition: 'bottom',
        state: 0
      }
    },

    ready() {
      if (this.target) {
        let t = document.querySelector(this.target)
        let _onclick = t.onclick

        t.onclick = (e) => {
          if (this.state == 0) {
            this.show()
            Vue.nextTick(() => {
              if (_onclick) _onclick(e)
            })
          } else {
            if (_onclick) _onclick(e)
          }
        }

        setTimeout(() => {
          pageContent().addEventListener('scroll', onScroll)
        }, 600)
      }
    },

    destroyed() {
      pageContent().removeEventListener('scroll', onScroll)
    },

    methods: {
      show() {
        console.log('show!')

        let width = this.$el.offsetWidth
        let height = this.$el.offsetHeight
        this.marginTop = '-' + (height / 2) + 'px'
        this.marginLeft = '-' + (width / 2) + 'px'

        if (this.direction == 'top') this.arrowPosition = 'bottom'
        if (this.direction == 'bottom') this.arrowPosition = 'top'
        if (this.direction == 'left') this.arrowPosition = 'right'
        if (this.direction == 'right') this.arrowPosition = 'left'

        let t = document.querySelector(this.target)
        // console.log(t.nodeName)
        if (['BUTTON', 'DIV'].indexOf(t.nodeName) > -1) {
          // console.log(t.offsetTop, t.offsetLeft, t.offsetWidth, t.offsetHeight)

          if (this.direction == 'top') {
            this.top = t.offsetTop - this.$el.offsetHeight / 2
            this.left = t.offsetLeft + t.offsetWidth / 2 + 'px'
          }

          if (this.direction == 'bottom') {
            this.top = t.offsetTop + t.offsetHeight + this.$el.offsetHeight / 2
            this.left = t.offsetLeft + t.offsetWidth / 2 + 'px'
          }

          if (this.direction == 'left') {
            this.top = t.offsetTop + t.offsetHeight / 2
            this.left = t.offsetLeft - this.$el.offsetWidth / 2 + 'px'
          }

          if (this.direction == 'right') {
            this.top = t.offsetTop + t.offsetHeight / 2
            this.left = t.offsetLeft - this.$el.offsetWidth / 2 + t.offsetWidth + this.$el.offsetWidth + 'px'
          }

          let pageScrollTop = pageContent().getAttribute('scrollTop')

          if (pageScrollTop) {
            this.top -= parseInt(pageScrollTop)
          }

          this.top += 'px'

          this.state = 1
          Vue.nextTick(() => {
            this.state = 2
          })

          pageContent().addEventListener('touchmove', this.pageContentTouchMove)

          setTimeout(() => {
            this.hide()
          }, parseInt(this.duration))
        }
      },

      hide() {
        this.state = 1
        setTimeout(() => {
          this.state = 0
        }, 300)

        pageContent().removeEventListener('touchmove', this.pageContentTouchMove)
      },

      pageContentTouchMove() {
        this.hide()
      }
    }
  }

</script>
