<template>
  <div class="page has-navbar" v-nav="{title: '列表', showBackButton: true}">
    <div class="page-content" style="padding-top: 54px;">

      <div class="item item-divider">
        Thin Border
      </div>

      <div class="item thin-border">
        normal
      </div>

      <div class="item item-icon-left thin-border">
        icon left
        <i class="icon ion-social-github dark"></i>
      </div>

      <div class="item item-icon-right thin-border">
        icon right
        <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
      </div>

      <div class="item item-icon-right" thin-border>
        Item Title
        <span class="item-note">item note</span>
        <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
      </div>

      <div class="item item-divider">
        iOS style
      </div>

      <div class="list list-ios" thin-border>
        <div class="item item-ios">
          Item - 1
          <span class="item-note"></span>
        </div>
        <div class="item item-ios">Item - 2</div>
        <div class="item item-ios">Item - 3</div>
      </div>

      <div class="list list-ios" thin-border>
        <div class="item item-ios" thin>
          <span style="color: #888;">小标题</span>
        </div>
        <div class="item item-ios">
          正文
          <span class="item-note">
            备注
          </span>
        </div>
      </div>

      <div class="list list-ios" thin-border>
        <div class="item item-ios" thin>
          <span style="color: #888;">Framework</span>
        </div>
        <div class="item item-avatar item-ios">
          <img src="../assets/vonic.svg" style="border-radius: 0;">
          <div class="title">
            Vonic
          </div>
          <div class="item-note">
            Mobile UI Components
          </div>
        </div>
      </div>

      <list>
        <item class="item-icon-right">
          文字
          <div class="item-note">
            备注
          </div>
          <span class="icon ion-ios-arrow-right"></span>
        </item>
      </list>

      <div class="item item-divider">
        Hairline Item
      </div>
      <hl-item class="item-icon-right">
        文字
        <div class="item-note">
          备注
        </div>
        <span class="icon ion-ios-arrow-right"></span>
      </hl-item>

      <div style="height: 100px"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>
