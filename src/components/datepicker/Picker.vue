<template>
  <div von-picker class="von-datepicker" :class="{'active': state == 1}">
    <div class="dp-header">
      <button class="button button-clear button-stable" @click="cancel()">
        <slot name="cancel">
          取消
        </slot>
      </button>

      <button class="button button-clear button-balanced btn-confirm" @click="confirm()">
        <slot name="confirm">
          确定
        </slot>
      </button>
    </div>

    <div class="dp-body">
      <!-- years -->
      <scroller class="dp-list dp-years"
        ref="y_scroller"
        :snapping="snapping"
        :snapHeight="snapHeight"
        :animation-duration="animationDuration"
        width="34%"
      >
        <div class="dp-item" v-for="(y, index) in years" v-text="y"></div>
      </scroller>

      <!-- months -->
      <scroller class="dp-list dp-months"
        ref="m_scroller"
        :snapping="snapping"
        :snapHeight="snapHeight"
        :animationDuration="animationDuration"
        width="33%"
      >
        <div class="dp-item" v-for="(m, index) in months" v-text="m"></div>
      </scroller>

      <!-- dates -->
      <scroller class="dp-list dp-dates"
        ref="d_scroller"
        :snapping="snapping"
        :snapHeight="snapHeight"
        :animationDuration="animationDuration"
        width="33%"
      >
        <div class="dp-item" v-for="(d, index) in dates" v-text="d"></div>
      </scroller>

    </div>
  </div>
</template>
<script>
  import channel from './channel'

  const defaultYears = () => {
    let years = ['','','']
    let today = new Date()
    const passed = today.getFullYear() - 1975
    let start = today.getFullYear() - passed
    let end = today.getFullYear() + passed
    for (let y = start; y <= end; y++) years.push(y + '')
    return years.concat(['','',''])
  }

  const defaultMonths = () => [
    '','','',
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
    '','',''
  ]

  const defaultDates = (yyyy, mm) => {
    let dates = ['','','']
    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth()

    if (yyyy)
      year = parseInt(yyyy)

    if (mm)
      month = parseInt(mm) - 1

    let end = 30

    if ([0,2,4,6,7,9,11].indexOf(month) > -1) { // 闰月：一月、三月、五月、七月、八月、十月、十二月
      end = 31
    } else if (month == 1) { // 二月
      // 计算闰二月
      end = year % 100 == 0 ? (year % 400 == 0 ? 29 : 28) : (year % 4 == 0 ? 29 : 28)
    }

    for (let d = 1; d <= end; d++) dates.push((100 + d + '').substr(1,2))
    return dates.concat(['','',''])
  }

  const item_height = 34

  const setOpacity = (el, index) => {
    let dp_items = el.querySelectorAll('.dp-item')

    for (let i = 0; i < dp_items.length; i++) {
      let e = dp_items[i]
      if (i == index) {
        e.style.opacity = '1'
      } else if (Math.abs(i - index) == 1) {
        e.style.opacity = '0.4'
      } else if (Math.abs(i - index) == 2) {
        e.style.opacity = '0.2'
      } else if (Math.abs(i - index) >= 3) {
        e.style.opacity = '0.1'
      }
    }
  }

  export default {
    data() {
      return {
        state: 0, // 0: hide, 1: show
        value: '',

        years: defaultYears(),
        months: defaultMonths(),
        dates: defaultDates(),

        timer: undefined,

        // scroller settings
        snapping: true,
        snapHeight: 34,
        animationDuration: 1
      }
    },

    mounted() {
      this.timer = setInterval(() => {
        this.updateYmd()
      }, 50)

      channel.$on('PickerCancelEvent', () => {
        this.hide()
      })
    },

    beforeDestroy() {
      if (this.timer)
        clearInterval(this.timer)
    },

    destroyed() {
      document.body.removeChild(document.querySelector('[von-picker]'))
    },

    methods: {
      show() {
        $backdrop.show().then(() => {
          let backdrop = document.querySelector('[von-backdrop]')
          backdrop.onclick = () => {
            channel.$emit('PickerCancelEvent')
            backdrop.onclick = null
          }
        })

        setTimeout(() => {
          this.state = 1

          this.$refs.y_scroller.resize()
          this.$refs.m_scroller.resize()
          this.$refs.d_scroller.resize()
          this.setYmd()
        })
      },

      hide() {
        this.state = 0
        $backdrop.hide()
        setTimeout(() => {
          this.$destroy()
        }, 300)
      },

      confirm() {
        channel.$emit('PickerOkEvent', this.value)
      },

      cancel() {
        channel.$emit('PickerCancelEvent')
      },

      updateYmd() {
        let yPosition = this.$refs.y_scroller.getPosition()
        let yIndex = parseInt(yPosition.top / item_height) + 3
        let mPosition = this.$refs.m_scroller.getPosition()
        let mIndex = parseInt(mPosition.top / item_height) + 3
        let dPosition = this.$refs.d_scroller.getPosition()
        let dIndex = parseInt(dPosition.top / item_height) + 3
        setOpacity(this.$refs.y_scroller.$el, yIndex)
        setOpacity(this.$refs.m_scroller.$el, mIndex)
        setOpacity(this.$refs.d_scroller.$el, dIndex)

        let yyyy = this.years[yIndex]
        let mm = this.months[mIndex]
        let dd = this.dates[dIndex]
        let newDates = defaultDates(yyyy, mm)

        if (newDates.length !== this.dates.length) {
          this.dates = newDates
          setTimeout(this.$refs.d_scroller.resize, 0)
        }

        if (this.dates.indexOf(dd) === -1) {
          dIndex = this.dates.length - 4
        }

        this.value = this.years[yIndex] + '-' + this.months[mIndex] + '-' + this.dates[dIndex]
      },

      setYmd() {
        let ymd = this.value.split('-')
        let yIndex = this.years.indexOf(ymd[0])
        let mIndex = this.months.indexOf(ymd[1])
        let dIndex = this.dates.indexOf(ymd[2])
        this.$refs.y_scroller.scrollTo(0, item_height * (yIndex - 3))
        this.$refs.m_scroller.scrollTo(0, item_height * (mIndex - 3))
        this.$refs.d_scroller.scrollTo(0, item_height * (dIndex - 3))
      }
    }
  }
</script>
