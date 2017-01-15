<template>
  <div von-app>
    <navbar></navbar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>

  <!-- <modal v-ref:modal></modal> -->
</template>
<style lang='scss'>
  @import "../scss/vonic";
</style>
<script>
  import Vue from 'vue'
  import Navbar from './Navbar'
  // import { Modal } from '../modal'

  import channel from './channel'

  Vue.directive('nav', {
    inserted: function (el, binding) {
      let data = binding.value
      channel.$emit('PageTransitionEvent', data)
    }
  })

  // CascadePanel
  // import './services/cascadepanel'

  export default {
    components: {
      Navbar,
      // Modal
    },

    data() {
      return {
        gradeClass: 'grade-a'
      }
    },

    created() {
      // grade-a for ios, grade-b for android & other
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        this.gradeClass = 'grade-a'
      } else {
        this.gradeClass = 'grade-b'
      }
      document.querySelector('body').className = this.gradeClass

      // Model Service
      // window.$vonicModal = this.$refs.modal

      // channel.$on('VonicNotification', (data) => {
      //   $toast.show(data.message);
      // })
    }
  }
</script>
