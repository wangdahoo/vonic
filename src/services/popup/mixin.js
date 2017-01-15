const popup_enter_duration = 200
const popup_leave_duration = 300

const extend = (target, source) => {
  for (let key in source) {
    target[key] = source[key]
  }

  return target
}

export default {
  destroyed() {
    console.log('[Vonic] dialog destroyed.')
    let parent = this.$el.parentNode
    parent.removeChild(this.$el)
  },

  methods: {
    show(options) {
      extend(this, options)

      if ($backdrop.getState() == 0) $backdrop.show()

      this.state = 1

      this.promise = new Promise((resolve, reject) => {
        this.$on('AlertOkEvent', () => {
          // console.log('AlertOkEvent');
          this.hide()
          resolve()
        })
      });

      return this.promise
    },

    hide() {
      if (document.querySelectorAll('[von-dialog]').length == 1) // 只剩最后一个dialog实例的时候，backdrop才隐藏
        $backdrop.hide()

      this.state = 2

      setTimeout(() => {
        this.state = 0
        this.$destroy()
      }, popup_leave_duration)
    },

    onOk() {
      this.$emit('AlertOkEvent')
    }
  }
}
