<template>
  <div class="page has-header">
    <von-header title="Popup" :on-back-button-click="back"></von-header>

    <div class="page-content padding-top">

      <div class="item item-icon-right" @click="showAlert()">
        Alert <span class="note">提示框</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right" @click="showConfirm()">
        Confirm <span class="note">确认框</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right" @click="showAlertIOS()">
        iOS Alert <span class="note">iOS 风格提示框</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right" @click="showConfirmIOS()">
        iOS Confirm <span class="note">iOS 风格确认框</span>
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
  import {Page, VonHeader, Alert} from 'vonic'

  export default{
    components: {
      Page,
      VonHeader,
      Alert
    },

    data(){
      return {
      }
    },

    ready() {

    },

    methods: {
      back() {
        $vonic.nextTransition('back')
        $router.go({path: '/home'})
      },

      showAlert() {
        $alert.show({
          content: 'Hello!',
          okTheme: 'positive'
        }).then(() => {
          console.log('alert hide.');
        })
      },

      showConfirm() {
        $confirm.show({
          content: '在"微信"中打开链接吗?',
          okText: '打开'
        }).then((res) => {
          console.log('confirm result: ', res);
        })
      },

      showAlertIOS() {
        $alert_ios.show({
          title: '无法打开网页',
          content: 'Safari打不开网页，因为网址无效。',
          okText: '好'
        }).then(() => {
          console.log('alert hide.');
        })
      },

      showConfirmIOS() {
        $confirm_ios.show({
          title: '在"微信"中打开链接吗?',
          cancelText: '取消',
          okText: '打开'
        }).then((res) => {
          console.log('confirm result: ', res);
        })
      },
    }
  }
</script>
