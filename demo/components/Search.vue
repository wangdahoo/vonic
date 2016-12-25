<template>
  <div class="page has-navbar" v-nav="{title: '搜索框', showBackButton: true}">
    <div class="page-content">

      <search :value.sync="keywords" placeholder="输入关键字" :on-search="onSearch" :clear-search="clearSearch"></search>

      <div class="item" v-show="searching">
        searching for '{{keywords}}'.
      </div>

    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  import {Search} from 'vonic'

  export default{
    components: {
      Search
    },

    data(){
      return {
        keywords: '',
        searching: false
      }
    },

    methods: {
      onSearch(keywords) {
        this.searching = true;
      },

      clearSearch() {
        this.searching = false;
        this.keywords = ''
      }
    }
  }
</script>
