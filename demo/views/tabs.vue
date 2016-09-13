<template>
  <von-header title="Tabs"></von-header>
  <page has-header="true">
    <tabs :tab-items="tabs" :active-index.sync="activeTabIndex"></tabs>

    <p>
      active tab index: {{ activeTabIndex }}
    </p>

    <p>
      active category index: {{ activeCategoryIndex }}
    </p>

    <tabs :tab-items="categories"
          :active-index.sync="activeCategoryIndex"
          position="bottom"
          bg-color="assertive"
          tab-color="light"></tabs>



  </page>
</template>
<style lang="scss" scoped>
  p {
    padding: 0 10px;
    &:nth-of-type(1) {
      margin-top: 60px;
    }
    margin-bottom: 0;
  }
</style>
<script>
  import _ from 'lodash'
  import { Page, PageContent, VonHeader, Tabs } from 'vonic'

  export default{
    components: {
      Page,
      PageContent,
      VonHeader,
      Tabs
    },

    data(){
      return {
        tabs: [
          "tab 1",
          "tab 2",
          "tab 3"
        ],

        activeTabIndex: 0,

        categories: [
          "女装",
          "男装",
          "内衣",
          "鞋靴",
          "箱包",
          "更多"
        ],

        activeCategoryIndex: 0
      }
    }
  }
</script>
