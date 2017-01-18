<template>
  <div class="page has-navbar" v-nav="{title: '弹层', showBackButton: true}">
    <div class="page-content padding-top">

      <div class="item item-icon-right thin-border" @click="showAlert()">
        Alert <span class="item-note">提示框</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>
      <div class="item item-icon-right thin-border" @click="showConfirm()">
        Confirm <span class="item-note">确认框</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>
      <div class="item item-icon-right thin-border" @click="showAlertIOS()">
        iOS Alert <span class="item-note">iOS 风格提示框</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>
      <div class="item item-icon-right thin-border" @click="showConfirmIOS()">
        iOS Confirm <span class="item-note">iOS 风格确认框</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>
      <div class="item item-icon-right thin-border" @click="multiMode()">
        Multi Mode <span class="item-note">多个同时出现</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right thin-border" @click="showCustomPopup()">
        Custom Popup
        <i class="icon ion-ios-arrow-right"></i>
      </div>
      <div class="item item-icon-right thin-border" @click="showCustomPopup2()">
        Custom Popup 2
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right thin-border" @click="showAlert('scale')">
        Scale Effect
        <i class="icon ion-ios-arrow-right"></i>
      </div>
      <div class="item item-icon-right thin-border" @click="showAlert('slide')">
        Slide Effect
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div style="height: 50px;"></div>

    </div>
  </div>
</template>
<script>
  export default {

    data(){
      return {
      }
    },

    methods: {
      showAlert(effect) {
        $dialog.alert({
          content: 'Hello!',
          okTheme: 'positive',
          effect: effect || 'default'
        }).then(() => {
          console.log('alert hide.')
        })
      },

      showConfirm() {
        $dialog.confirm({
          content: '在"微信"中打开链接吗?',
          okText: '打开'
        }).then((res) => {
          console.log('confirm result: ', res)
        })
      },

      showAlertIOS() {
        $dialog.alert({
          theme: 'ios',
          title: '无法打开网页',
          content: 'Safari打不开网页，因为网址无效。',
          okText: '好'
        }).then(() => {
          console.log('alert hide.')
        })
      },

      showConfirmIOS() {
        $dialog.confirm({
          theme: 'ios',
          title: '在"微信"中打开链接吗?',
          cancelText: '取消',
          okText: '打开'
        }).then((res) => {
          console.log('confirm result: ', res)
        })
      },

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

      },

      multiMode() {
        let options = {
          theme: 'ios',
          title: '测试',
          okText: '好'
        }

        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            options.content = `第${i+1}条消息`
            $dialog.alert(options)
          }, 500 * i)
        }
      }
    }
  }
</script>
