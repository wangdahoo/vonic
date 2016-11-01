<template>
  <div class="von-popover" :style="{top: top, left: left, marginTop: marginTop, marginLeft: marginLeft}">
    <div class="von-popover-content">
      <slot></slot>
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

    .von-popover-content {
      background-color: rgba(0,0,0,0.8);
      color: #fff;
      font-size: 13px;
      line-height: 18px;
      padding: 12px;
      border-radius: 4px;
    }
  }

</style>
<script>
  import Arrow from './arrow'

  export default {
    components: {
      Arrow
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
      }
    },

    data(){
      return {
        marginTop: 0,
        marginLeft: 0,
        arrowPosition: 'bottom'
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

    },

    methods: {

    }
  }

</script>
