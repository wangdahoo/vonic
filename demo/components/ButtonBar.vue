<template>
  <div class="page has-navbar" v-nav="{title: 'iOS 风格选项卡', showBackButton: true}">
    <div class="page-content padding-top">

      <div class="padding light-bg">
        <button-bar theme="assertive" :tab-items="tabs" :active-index="activeTabIndex[0]"></button-bar>

        <button-bar theme="positive" :tab-items="tabs" :active-index="activeTabIndex[1]"></button-bar>

        <button-bar theme="balanced" :tab-items="tabs" :active-index="activeTabIndex[2]"></button-bar>

        <button-bar theme="energized" :tab-items="tabs" :active-index="activeTabIndex[3]"></button-bar>

        <button-bar theme="calm" :tab-items="tabs" :active-index="activeTabIndex[4]"></button-bar>

        <button-bar theme="royal" :tab-items="tabs" :active-index="activeTabIndex[5]"></button-bar>

        <button-bar theme="dark" :tab-items="tabs" :active-index="activeTabIndex[6]"></button-bar>
      </div>

      <div class="item item-divider">
        商品分类:
      </div>
      <div class="padding light-bg">
        <button-bar theme="assertive" :tab-items="promotions" :active-index.sync="promotionIndex"></button-bar>
      </div>
      <div class="item thin-border">
        选中: {{ promotions[promotionIndex] }}
      </div>

    </div>

  </div>
</template>
<script>
  export default{
    data(){
      return {
        tabs: [
          "tab 1",
          "tab 2",
          "tab 3"
        ],
        activeTabIndex: [0, 1, 2, 1, 0, 1, 2, 1],
        promotions: ["往期热卖", "抢购进行中"],
        promotionIndex: 0
      }
    }
  }
</script>
