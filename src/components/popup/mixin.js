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

      let backdrop = document.querySelector('.backdrop')
      backdrop.className += ' visible'
      setTimeout(() => {
        backdrop.className += ' active'
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
      let backdrop = document.querySelector('.backdrop')
      backdrop.className += 'backdrop visible'
      setTimeout(() => {
        backdrop.className = 'backdrop'
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
