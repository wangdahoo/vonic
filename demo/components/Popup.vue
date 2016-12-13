<template>
  <div class="page has-navbar" v-nav="{title: '弹层', showBackButton: true, onBackButtonClick: back}">
    <div class="page-content padding-top">

      <div class="item item-icon-right thin-border" @click="showAlert()">
        Alert <span class="note">提示框</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right thin-border" @click="showConfirm()">
        Confirm <span class="note">确认框</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right thin-border" @click="showAlertIOS()">
        iOS Alert <span class="note">iOS 风格提示框</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right thin-border" @click="showConfirmIOS()">
        iOS Confirm <span class="note">iOS 风格确认框</span>
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

      <div class="item item-divider">
        Other Effects
      </div>

      <div class="item item-icon-right thin-border" @click="showAlert('scale')">
        Scale
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right thin-border" @click="showAlert('slide')">
        Slide
        <i class="icon ion-ios-arrow-right"></i>
      </div>

    </div>
  </div>
</template>
<style lang="scss" scoped>

  .item-divider:first-of-type {
    border-top: none;
  }

  .item-icon-right {
    .icon {
      right: 0;
      color: #ccc;
      font-size: 24px;
    }

    span.note {
      color: #aaa;
      font-size: 13px;
      float: right;
      margin-right: 15px;
    }
  }

</style>
<script>
  export default {

    data(){
      return {
      }
    },

    ready() {

    },

    methods: {
      back() {
        $router.back({path: '/'})
      },

      showAlert(effect) {
        $alert.show({
          content: 'Hello!',
          okTheme: 'positive',
          effect: effect || 'default'
        }).then(() => {
          console.log('alert hide.')
        })
      },

      showConfirm() {
        $confirm.show({
          content: '在"微信"中打开链接吗?',
          okText: '打开'
        }).then((res) => {
          console.log('confirm result: ', res)
        })
      },

      showAlertIOS() {
        $alert_ios.show({
          title: '无法打开网页',
          content: 'Safari打不开网页，因为网址无效。',
          okText: '好'
        }).then(() => {
          console.log('alert hide.')
        })
      },

      showConfirmIOS() {
        $confirm_ios.show({
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
          ]
        }

        let popup = $popup.fromTemplate('<p style="margin-bottom: 0; text-align: center;">自定义内容</p>', options)

        popup.show()
      }
    }
  }
</script>
