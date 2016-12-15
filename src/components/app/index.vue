<template>
  <div von-app>
    <navbar></navbar>
    <router-view transition="view" class="view"></router-view>
  </div>

  <modal v-ref:modal></modal>

  <cascade-panel v-ref:cascade_panel></cascade-panel>

  <alert v-ref:alert></alert>
  <alert-ios v-ref:alert_ios></alert-ios>

  <confirm v-ref:confirm></confirm>
  <confirm-ios v-ref:confirm_ios></confirm-ios>

</template>
<style lang='scss'>
  @import "../scss/vonic";
</style>
<script>
  import Vue from 'vue'
  import Navbar from './Navbar'
  import CascadePanel from '../cascade/CascadePanel.vue'

  import { Alert, AlertIOS, Confirm, ConfirmIOS } from '../popup'
  import { Modal } from '../modal'

  import utils from './utils'
  import channel from './channel'

  Vue.directive('nav', (data) => {
    channel.$emit('PageTransitionEvent', data)
  })

  // mini services
  import './services/loading'

  export default {
    components: {
      Navbar,
      CascadePanel,
      Alert,
      'AlertIos': AlertIOS,
      Confirm,
      'ConfirmIos': ConfirmIOS,
      Modal
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

      window._cascadePanel = this.$refs.cascade_panel

      window.$alert = this.$refs.alert
      window.$alert_ios = this.$refs.alert_ios
      window.$confirm = this.$refs.confirm
      window.$confirm_ios = this.$refs.confirm_ios
      window.$vonicModal = this.$refs.modal

      channel.$on('VonicNotification', (data) => {
        $toast.show(data.message);
      })
    }
  }
</script>
