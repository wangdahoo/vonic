<template>
  <div class="page has-navbar" v-nav="{title: '操作列表', showBackButton: true}">
    <div class="page-content padding-top">
      <item class="item-icon-right" @click.native="showActionSheet()">
        iOS<span class="item-note">默认</span>
        <i class="icon ion-ios-arrow-right"></i>
      </item>

      <item class="item-icon-right" @click.native="showActionSheet('android')">
        Android<span class="item-note"></span>
        <i class="icon ion-ios-arrow-right"></i>
      </item>

      <item class="item-icon-right" @click.native="showActionSheet('weixin')">
        微信<span class="item-note"></span>
        <i class="icon ion-ios-arrow-right"></i>
      </item>
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
