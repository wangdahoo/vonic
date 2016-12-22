<template>
  <div von-app>
    <navbar></navbar>
    <router-view transition="view" class="view"></router-view>
  </div>

  <modal v-ref:modal></modal>

  <cascade-panel v-ref:cascade_panel></cascade-panel>
</template>
<style lang='scss'>
  @import "../scss/vonic";
</style>
<script>
  import Vue from 'vue'
  import Navbar from './Navbar'
  import CascadePanel from '../cascade/CascadePanel.vue'
  import { Modal } from '../modal'

  import utils from './utils'
  import channel from './channel'

  Vue.directive('nav', (data) => {
    channel.$emit('PageTransitionEvent', data)
  })

  // mini services
  import './services/loading'
  import './services/dialog'

  export default {
    components: {
      Navbar,
      CascadePanel,
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
      window.$vonicModal = this.$refs.modal

      channel.$on('VonicNotification', (data) => {
        $toast.show(data.message);
      })
    }
  }
</script>
