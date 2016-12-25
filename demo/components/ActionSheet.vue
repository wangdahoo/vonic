<template>
  <div class="page has-navbar" v-nav="{title: 'ActionSheet', showBackButton: true}">
    <div class="page-content padding-top">
      <div class="item item-icon-right thin-border" @click="showActionSheet()">
        iOS<span class="item-note">默认</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right thin-border" @click="showActionSheet('android')">
        Android<span class="item-note"></span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right thin-border" @click="showActionSheet('weixin')">
        微信<span class="item-note"></span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      showActionSheet(theme) {
        $actionSheet.show({
          theme: theme || '',
          title: '标题',
          buttons: {
            'Action - 1': () => {
              console.log('action 1 called.')
            },

            'Action - 2': () => {
              console.log('action 2 called.')
            }
          }
        })
      }
    }
  }
</script>
