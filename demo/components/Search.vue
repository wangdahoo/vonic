<template>
  <div class="page has-header">
    <von-header title="搜索框"></von-header>

    <div class="page-content">

      <search :value.sync="keywords" placeholder="输入关键字" :on-search="onSearch"></search>

      <div class="item" v-if="searching">
        searching for '{{keywords}}'.
      </div>

    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  import {Page, VonHeader, Search} from 'vonic'

  export default{
    components: {
      Page,
      VonHeader,
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
      }
    }
  }
</script>
