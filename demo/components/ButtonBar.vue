<template>
  <div class="page has-header">
    <von-header title="ButtonBar" :on-back-button-click="back"></von-header>

    <div class="page-content">

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
      <div class="item">
        选中: {{ promotions[promotionIndex] }}
      </div>

    </div>

  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  import {Page, VonHeader, ButtonBar} from 'vonic'

  export default{
    components: {
      Page,
      VonHeader,
      ButtonBar
    },

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
    },

    methods: {
      back() {
        $vonic.nextTransition('back')
        $router.go({path: '/home'})
      }
    }
  }
</script>
