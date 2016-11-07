const popup_enter_duration = 200
const popup_leave_duration = 300
const backdrop_fadein_duration = 100

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

      let backdrop = document.querySelector('[backdrop]')
      backdrop.classList.add('visible')
      setTimeout(() => {
        backdrop.classList.add('active')
      }, backdrop_fadein_duration)

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
      let backdrop = document.querySelector('[backdrop]')
      backdrop.classList.remove('active')
      setTimeout(() => {
        backdrop.classList.remove('visible')
      }, backdrop_fadein_duration)

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
