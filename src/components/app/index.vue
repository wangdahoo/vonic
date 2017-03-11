<template>
  <div von-app>
    <navbar></navbar>
    <transition name="page" v-on:before-enter="beforePageEnter">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  import Vue from 'vue'
  import channel from './channel'
  import Navbar from './Navbar'

  Vue.directive('nav', {
    inserted: function (el, binding) {
      let data = binding.value
      channel.$emit('UpdateNavbar', data)
    }
  })

  export default {
    components: {
      Navbar
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

      if (window.__page_transition__ == 'ios') {
        this.gradeClass = 'grade-a'
        window.__disable_nav_title_transition__ = false
      } else if (window.__page_transition__ == 'android') {
        this.gradeClass = 'grade-b'
        window.__disable_nav_title_transition__ = true
      }

      document.querySelector('body').className = this.gradeClass

      channel.$on('VonicNotification', (data) => {
        $toast.show(data.message);
      })
    },

    methods: {
      beforePageEnter(el) {
        // console.log('beforePageEnter time:', +new Date())
      }
    }
  }
</script>
