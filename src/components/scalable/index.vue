<template>
  <div class="von-scalable-wrapper" :style="{width: w, height: h}">
    <div class="von-scalable">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  const re = /^[\d]+(\%)?$/

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
        default: 2
      },

      width: {
        type: String,
        default: '100%',
        validator: widthAndHeightValidator
      },

      height: {
        type: String,
        default: '100%',
        validator: widthAndHeightValidator
      }
    },

    computed: {
      s: function () {
        return this.scale < 1 ? 1 : this.scale
      },

      w: function () {
        return widthAndHeightCoerce(this.width)
      },

      h: function () {
        return widthAndHeightCoerce(this.height)
      }
    },

    mounted() {
      scaleContent(this.$el, this.s)
      window.addEventListener('resize', () => {
        scaleContent(this.$el, this.s)
      })
    }
  }
</script>
