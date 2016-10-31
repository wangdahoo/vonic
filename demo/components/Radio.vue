<template>
  <div class="page has-header" v-nav="{title: '单选框', showBackButton: true, onBackButtonClick: back}">

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
  import {VonRadio} from 'vonic'

  export default{
    components: {
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
