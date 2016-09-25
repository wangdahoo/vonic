<template>
  <div class="page has-header">
    <von-header title="单选框" :on-back-button-click="back"></von-header>

    <div class="page-content">
      <div class="item item-divider">
        选择性别:
      </div>

      <von-radio :options="genderOptions" :value.sync="gender"></von-radio>

      <p class="padding">
        option index: {{ gender }}<br>
        option text: {{ genderOptions[gender] }}
      </p>
    </div>

  </div>
</template>
<style lang="scss" scoped>


</style>
<script>
  import {Page, VonHeader, VonRadio} from 'vonic'

  export default{
    components: {
      Page,
      VonHeader,
      VonRadio
    },

    data(){
      return {
        gender: 0,
        genderOptions: ["男", "女"]
      }
    },

    ready() {

    },

    methods: {
      back() {
        $vonic.nextTransition('back')
        $router.go({path: '/home'})
      },
    }
  }
</script>
