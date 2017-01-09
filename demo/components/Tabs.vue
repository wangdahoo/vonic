<template>
  <div class="page has-navbar" v-nav="{title: 'Tabs', showBackButton: true}">
    <tabs :tab-items="tabs" :active-index.sync="activeTabIndex"></tabs>

    <div class="page-content">
      <p>
        active tab index: {{ activeTabIndex }}
      </p>

      <p>
        active category index: {{ categories[activeCategoryIndex] }}
      </p>
    </div>

    <tabs :tab-items="categories"
          :active-index.sync="activeCategoryIndex"
          position="bottom"
          bg-color="assertive"
          tab-color="light"
          :on-tab-changed="onCategoryChanged"
    ></tabs>
  </div>
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
  export default{
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
    },

    methods: {
      onCategoryChanged(activeIndex) {
        console.log('category changed, current tab index is:', activeIndex);
      }
    }
  }
</script>
