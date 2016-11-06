<template>
  <div class="page has-navbar" v-nav="{title: '悬浮标签效果', showBackButton: true, onBackButtonClick: back}">
    <div class="page-content padding-top">
      <div class="item item-divider">输入文字试试:</div>

      <von-input type="text" :value.sync="username" placeholder="Username" label="Username" floating-label="true"></von-input>
      <von-input type="email" :value.sync="email" placeholder="Email" label="Email" floating-label="true"></von-input>
      <von-input type="tel" :value.sync="phone" placeholder="Phone" label="Phone" floating-label="true"></von-input>

      <div class="padding">
        <button class="button button-positive button-block">确认</button>
      </div>

    </div>
  </div>
</template>

<script>
  import {VonInput} from 'vonic'

  export default{
    components: {
      VonInput
    },

    data(){
      return {
        username: '',
        email: '',
        phone: ''
      }
    },

    methods: {
      back() {
        $router.back({path: '/widgets/input'})
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
