<template>
  <von-header title="开关按钮"></von-header>
  <page has-header="true">

    <von-toggle :text="toggleText" :value.sync="pushNotification"></von-toggle>

    <div class="item item-divider">开关状态: <span>{{ pushNotification ? '开启' : '关闭' }}</span></div>

  </page>
</template>
<style lang="scss" scoped>

</style>
<script>
  import _ from 'lodash'
  import { Page, PageContent, VonHeader, VonToggle } from 'vonic'

  export default{
    components: {
      Page,
      PageContent,
      VonHeader,
      VonToggle
    },

    data(){
      return {
        toggleText: "是否开启推送",
        pushNotification: true
      }
    }
  }
</script>
