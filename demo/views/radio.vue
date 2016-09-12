<template>
  <von-header title="单选框"></von-header>
  <page has-header="true">
    <von-radio :options="genderOptions" :value.sync="gender"></von-radio>

    <p class="padding">
      option index: {{ gender }}<br>
      option text: {{ genderOptions[gender] }}
    </p>
  </page>
</template>
<style lang="scss" scoped>


</style>
<script>
  import _ from 'lodash'
  import { Page, PageContent, VonHeader, VonRadio } from 'vonic'

  export default{
    components: {
      Page,
      PageContent,
      VonHeader,
      VonRadio
    },

    data(){
      return {
        gender: 0,
        genderOptions: ["男", "女"]
      }
    }
  }
</script>
