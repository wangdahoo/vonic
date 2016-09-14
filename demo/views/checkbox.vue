<template>
  <von-header title="复选框"></von-header>
  <page has-header="true">

    <div class="item item-divider">
      选择感兴趣的板块:
    </div>

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
  import { Page, VonHeader, VonCheckbox } from 'vonic'

  export default{
    components: {
      Page,
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
