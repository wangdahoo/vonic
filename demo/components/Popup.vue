<template>
  <div class="page has-navbar" v-nav="{title: '弹层', showBackButton: true}">
    <div class="page-content padding-top">

      <div class="item item-icon-right thin-border" @click="showCustomPopup()">
        Custom Popup
        <i class="icon ion-ios-arrow-right"></i>
      </div>
      <div class="item item-icon-right thin-border" @click="showCustomPopup2()">
        Custom Popup 2
        <i class="icon ion-ios-arrow-right"></i>
      </div>

    </div>
  </div>
</template>
<script>
  export default {

    methods: {

      showCustomPopup() {
        let options = {
          effect: 'scale',
          title: '',
          buttons: [
            {text: '确定'},
            {text: '取消'},
          ]
        }

        let popup = $popup.fromTemplate('<p style="margin-bottom: 0; text-align: center;">自定义内容</p>', options)

        popup.show().then((buttonIndex) => {
          console.log(buttonIndex)
        })
      },

      showCustomPopup2() {
        let options = {
          effect: 'scale',
          title: '',
          buttons: [
            {text: '确定', theme: 'assertive'}
          ],
          showClose: true
        }

        let template = `
          <p style="margin-bottom: 10px; text-align: center; font-size: 16px;">带有关闭按钮</p>
          <p style="margin-bottom: 0; text-align: center;">自定义内容</p>
        `

        let popup = $popup.fromTemplate(template, options)

        popup.show().then((buttonIndex) => {
          console.log(buttonIndex)
        })

        /* fromTemplateUrl sample */

        // let path_to_template = ''
        // $popup
        //   .fromTemplateUrl(path_to_template, options)
        //   .then((popup) => {
        //     popup.show()
        //   })

      }
    }
  }
</script>
