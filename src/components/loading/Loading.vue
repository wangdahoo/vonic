<template>
  <div class="loading-container" :class="{'visible': state == 1, 'visible active': state == 2}">
    <div class="loading">
      <div v-if="showSpinner" class="spinner spinner-ios">
        <svg viewBox="0 0 64 64">
          <g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g></svg>
      </div>

      <span v-if="tips" class="tips">{{{ tips }}}</span>
    </div>
  </div>
</template>

<script>
  const backdrop_fadein_duration = 100;

  // TODO: 该方案在Safari全屏模式下会抖动
  /*
  const pageContentScrollable = (scrollable) => {
    document
      .querySelector('[von-app] .page .page-content')
      .classList[scrollable ? 'remove' : 'add']('non-scrollable')
  }
  */

  export default {
    data () {
      return {
        showSpinner: true,
        state: 0,
        tips: ''
      }
    },
    methods: {
      showLoading(tips) {
        let backdrop = document.querySelector('[backdrop]')
        backdrop.classList.add('visible')
        setTimeout(() => {
          backdrop.classList.add('active')
        }, backdrop_fadein_duration)

        this.tips = tips || '正在加载'
        this.state = 1
        setTimeout(() => {
          this.state = 2
        })

        // pageContentScrollable(false)
      },

      show(tips) {
        this.showSpinner = true
        this.showLoading(tips)

        // pageContentScrollable(false)
      },

      hide() {
        let backdrop = document.querySelector('[backdrop]')
        backdrop.classList.remove('active')
        setTimeout(() => {
          backdrop.classList.remove('visible')
        }, backdrop_fadein_duration)

        this.state = 1
        setTimeout(() => {
          this.state = 0

          // pageContentScrollable(true)
        }, 300)
      },

      toast(tips, millsecs) {
        this.showSpinner = false
        this.showLoading(tips)

        setTimeout(() => {
          this.hide()
        }, millsecs || 1500)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .loading-container {
    .spinner svg {
      width: 28px;
      height: 28px;
      stroke: #FFF;
      fill: #FFF;
    }

    .tips {
      font-size: 14px;
      line-height: 14px;
    }
  }

</style>
