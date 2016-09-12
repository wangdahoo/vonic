<template>
  <von-header title="复选框"></von-header>
  <page has-header="true">
    <von-checkbox :options="topics" :value.sync="chosenTopics"></von-checkbox>

    <p class="padding">
      chosen topics: {{ chosenTopics }}
    </p>
  </page>
</template>
<style lang="scss" scoped>

</style>
<script>
  import _ from 'lodash'
  import { Page, PageContent, VonHeader, VonCheckbox } from 'vonic'

  export default{
    components: {
      Page,
      PageContent,
      VonHeader,
      VonCheckbox
    },

    data(){
      return {
        chosenTopics: [],
        topics: ["娱乐", "电影", "减肥", "搞笑", "科技"]
      }
    }
  }
</script>
