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
<style lang="scss" scoped>
  .loading-container {
    .loading {
      padding: 15px;
    }

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
<script>
  export default {
    el: '[von-loading]',
    data () {
      return {
        showSpinner: true,
        state: 0,
        tips: ''
      }
    },
    methods: {
      showLoading(tips) {
        window.$backdrop.show()

        this.tips = tips || '正在加载'
        this.state = 1
        setTimeout(() => {
          this.state = 2
        })
      },

      show(tips) {
        if (this.state == 2) {
          this.tips = tips || '正在加载'
          return
        }

        this.showSpinner = true
        this.showLoading(tips)
      },

      hide() {
        window.$backdrop.hide()

        this.state = 1
        setTimeout(() => {
          this.state = 0
          setTimeout(() => {
            this.$destroy(true)
          }, 300)
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
