<template>
  <div class="page has-navbar" v-nav="{title: 'iOS 风格选项卡', showBackButton: true}">
    <div class="page-content padding-top">

      <div class="padding light-bg">
        <button-bar theme="assertive" :tab-items="tabs" :tab-index="tab_0"
          :on-tab-click="index => tab_0 = index"></button-bar>

        <button-bar theme="positive" :tab-items="tabs" :tab-index="tab_1"
          :on-tab-click="index => tab_1 = index"></button-bar>

        <button-bar theme="balanced" :tab-items="tabs" :tab-index="tab_2"
          :on-tab-click="index => tab_2 = index"></button-bar>

        <button-bar theme="energized" :tab-items="tabs" :tab-index="tab_3"
          :on-tab-click="index => tab_3 = index"></button-bar>

        <button-bar theme="calm" :tab-items="tabs" :tab-index="tab_4"
          :on-tab-click="index => tab_4 = index"></button-bar>

        <button-bar theme="royal" :tab-items="tabs" :tab-index="tab_5"
          :on-tab-click="index => tab_5 = index"></button-bar>

        <button-bar theme="dark" :tab-items="tabs" :tab-index="tab_6"
          :on-tab-click="index => tab_6 = index"></button-bar>
      </div>

      <div class="item item-divider">
        商品分类:
      </div>
      <div class="padding light-bg">
        <button-bar theme="assertive" :tab-items="promotions" :tab-index="promotionIndex"
          :on-tab-click="index => promotionIndex = index"></button-bar>
      </div>
      <div class="item item-borderless">
        选中: {{ promotions[promotionIndex] }}
      </div>

    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        tabs: [
          "tab 1",
          "tab 2",
          "tab 3"
        ],
        tab_0: 0,
        tab_1: 1,
        tab_2: 2,
        tab_3: 1,
        tab_4: 0,
        tab_5: 1,
        tab_6: 2,
        promotions: ["往期热卖", "抢购进行中"],
        promotionIndex: 0
      }
    },

    methods: {
      onTabClick(index) {
        this.tab_0 = index
      }
    }
  }
</script>
