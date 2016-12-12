<template>
  <div class="page has-navbar" v-nav="{title: 'ActionSheet', showBackButton: true, onBackButtonClick: back}">
    <div class="page-content padding-top">
      <div class="item item-icon-right" @click="showActionSheet()">
        iOS<span class="note">默认</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right" @click="showActionSheet('android')">
        Android<span class="note"></span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right" @click="showActionSheet('weixin')">
        微信<span class="note"></span>
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
      },

      back() {
        $router.back({path: '/'})
      }
    }
  }
</script>
