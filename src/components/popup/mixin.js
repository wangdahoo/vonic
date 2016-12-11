const popup_enter_duration = 200
const popup_leave_duration = 300

const extend = (target, source) => {
  for (let key in source) {
    target[key] = source[key]
  }

  return target
}

export default {
  methods: {
    show(options) {
      extend(this, options)

      window.$backdrop.show()
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
      window.$backdrop.hide()
      this.state = 2

      setTimeout(() => {
        this.state = 0
      }, popup_leave_duration)
    },

    onOk() {
      this.$emit('AlertOkEvent')
    }
  }
}
