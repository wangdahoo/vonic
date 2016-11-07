<template>
  <div von-app>
    <navbar></navbar>
    <router-view transition="view" class="view"></router-view>
  </div>

  <div backdrop class="backdrop"></div>

  <modal v-ref:modal></modal>

  <action-sheet v-ref:action_sheet></action-sheet>

  <alert v-ref:alert></alert>
  <alert-ios v-ref:alert_ios></alert-ios>

  <confirm v-ref:confirm></confirm>
  <confirm-ios v-ref:confirm_ios></confirm-ios>

  <loading v-ref:loading></loading>
</template>
<style lang='scss'>
  @import "../scss/vonic";
</style>
<script>
  import Vue from 'vue'
  import Navbar from './Navbar'
  import ActionSheet from '../actionsheet'
  import { Alert, AlertIOS, Confirm, ConfirmIOS } from '../popup'
  import { Modal } from '../modal'
  import { Loading } from '../loading'

  import utils from './utils'
  import channel from './channel'

  Vue.directive('nav', (data) => {
    channel.$emit('PageTransitionEvent', data)
  })

  export default {
    components: {
      Navbar,
      ActionSheet,
      Alert,
      'AlertIos': AlertIOS,
      Confirm,
      'ConfirmIos': ConfirmIOS,
      Modal,
      Loading
    },

    data() {
      return {
        gradeClass: 'grade-a'
      }
    },

    ready() {
      // grade-a for ios, grade-b for android & other
      if (utils.is_ios_device()) {
        this.gradeClass = 'grade-a'
      } else {
        this.gradeClass = 'grade-b'
      }
      document.querySelector('body').className = this.gradeClass

      window.$actionSheet = this.$refs.action_sheet
      window.$alert = this.$refs.alert
      window.$alert_ios = this.$refs.alert_ios
      window.$confirm = this.$refs.confirm
      window.$confirm_ios = this.$refs.confirm_ios
      window.$loading = this.$refs.loading
      window.$vonicModal = this.$refs.modal
    }
  }
</script>
