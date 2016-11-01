<template>
  <div class="von-popover"
       :class="{'active': active}"
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
    &.active {
      visibility: visible;
    }

    .von-popover-content {
      background-color: rgba(0,0,0,0.8);
      color: #fff;
      font-size: 13px;
      line-height: 18px;
      padding: 12px;
      border-radius: 2px;

      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      -webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.2);

      &.has-close {
        padding-right: 25px + 12px;
      }
    }
  }

</style>
<script>
  import Arrow from './arrow'
  import Close from './close'

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

      showClose: {
        type: String,
        default: 'false'
      }
    },

    data(){
      return {
        marginTop: 0,
        marginLeft: 0,
        arrowPosition: 'bottom',

        active: false
      }
    },

    ready() {
      let width = this.$el.offsetWidth
      let height = this.$el.offsetHeight
      this.marginTop = '-' + (height / 2) + 'px'
      this.marginLeft = '-' + (width / 2) + 'px'

      if (this.direction == 'top') this.arrowPosition = 'bottom'
      if (this.direction == 'bottom') this.arrowPosition = 'top'
      if (this.direction == 'left') this.arrowPosition = 'right'
      if (this.direction == 'right') this.arrowPosition = 'left'

      // target
      if (this.target) {
        let t = document.querySelector(this.target)
        if (['BUTTON'].indexOf(t.nodeName) > -1) {
          // console.log(t.offsetTop, t.offsetLeft, t.offsetWidth, t.offsetHeight)

          if (this.direction == 'top') {
            this.top = t.offsetTop - this.$el.offsetHeight / 2 + 'px'
            this.left = t.offsetLeft + t.offsetWidth / 2 + 'px'
          }

          if (this.direction == 'bottom') {
            this.top = t.offsetTop + t.offsetHeight + this.$el.offsetHeight / 2 + 'px'
            this.left = t.offsetLeft + t.offsetWidth / 2 + 'px'
          }

          if (this.direction == 'left') {
            this.top = t.offsetTop + t.offsetHeight / 2 + 'px'
            this.left = t.offsetLeft - this.$el.offsetWidth / 2 + 'px'
          }

          if (this.direction == 'right') {
            this.top = t.offsetTop + t.offsetHeight / 2 + 'px'
            this.left = t.offsetLeft - this.$el.offsetWidth / 2 + t.offsetWidth + this.$el.offsetWidth + 'px'
          }

          let _onclick = t.onclick
          t.onclick = (e) => {
            this.active = true
            if (_onclick) _onclick(e)
          }
        }
      }

    },

    methods: {
      show() {
        this.active = true
      },

      hide() {
        this.active = false
      }
    }
  }

</script>
