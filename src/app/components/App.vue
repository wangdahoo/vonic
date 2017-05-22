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
  import channel from '../channel'
  import Navbar from './Navbar'
  import state from '../state'

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

      if (state.__page_transition__ == 'ios') {
        this.gradeClass = 'grade-a'
        state.__disable_nav_title_transition__ = false
      } else if (state.__page_transition__ == 'android') {
        this.gradeClass = 'grade-b'
        state.__disable_nav_title_transition__ = true
      }

      document.querySelector('body').className = this.gradeClass
    },

    methods: {
      beforePageEnter(el) {
        // console.log('beforePageEnter time:', +new Date())
      }
    }
  }
</script>
