<template>
  <div class="von-scalable-wrapper" :style="{width: width, height: height}">
    <div class="von-scalable">
      <slot></slot>
    </div>
  </div>
</template>
<style lang='scss'>
  .von-scalable-wrapper {
    position: relative;
    .von-scalable {
      position: absolute;
    }
  }
</style>
<script>

  const re = /^[\d]+(\%|px)$/

  const widthAndHeightCoerce = (v) => {
    if (v[v.length - 1] != '%') return v + 'px'
    return v
  }

  const widthAndHeightValidator = (v) => {
    return re.test(v)
  }

  const scaleContent = (e, s) => {
    let scalable = e.querySelector('.von-scalable')
    scalable.style.width = e.offsetWidth * s + 'px'
    scalable.style.height = e.offsetHeight * s + 'px'
    scalable.style.transform = 'scale(' + 1 / s + ', ' + 1 / s + ')'
    scalable.style.webkitTransform = 'scale(' + 1 / s + ', ' + 1/s + ')'
    scalable.style.left = '-' + e.offsetWidth / s + 'px'
    scalable.style.top = '-' + e.offsetHeight / s + 'px'

  }

  export default {
    props: {
      scale: {
        type: Number,
        default: 2,
        coerce: (v) => {
          return v < 1 ? 1 : v
        }
      },

      width: {
        type: String,
        default: '100%',
        validator: widthAndHeightValidator,
        coerce: widthAndHeightCoerce
      },

      height: {
        type: String,
        default: '100%',
        validator: widthAndHeightValidator,
        coerce: widthAndHeightCoerce
      }
    },

    ready() {
      scaleContent(this.$el, this.scale)
    }
  }
</script>
