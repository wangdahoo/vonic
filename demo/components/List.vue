<template>
  <div class="page has-navbar" v-nav="{title: '列表', showBackButton: true}">
    <div class="page-content" style="padding-top: 54px;">

      <div class="item item-divider">
        Thin Border
      </div>

      <item>
        normal
      </item>
      <item class="item-icon-left">
        icon left
        <i class="icon ion-social-github dark"></i>
      </item>
      <item class="item-icon-right">
        icon right
        <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
      </item>
      <item class="item-icon-right">
        Item Title
        <span class="item-note">item note</span>
        <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
      </item>

      <div class="item item-divider">
        iOS style
      </div>

      <list class="list-ios">
        <item>
          Item - 1
        </item>
        <item>
          Item - 2
        </item>
        <item>
          Item - 3
        </item>
      </list>

      <list class="list-ios hl-list-borderless">
        <item>
          Item - 1
        </item>
        <item>
          Item - 2
        </item>
        <item>
          Item - 3
        </item>
      </list>

      <list>
        <item thin>
          小标题
        </item>
        <item>
          正文
          <span class="item-note">
            备注
          </span>
        </item>
      </list>

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
