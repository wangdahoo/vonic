<template>
  <div class="nav-bar-container" nav-bar-transition="ios">
    <von-header :title="navbarLeave.title"
                :show-back-button="navbarLeave.showBackButton"></von-header>

    <von-header :title="navbarEnter.title"
                :show-back-button="navbarEnter.showBackButton"></von-header>
  </div>
</template>
<style>

</style>
<script>
  import Vue from 'vue'
  import VonHeader from '../header'
  import nav from './nav'

  function initNavbar(router) {
    if (!router.navbar) {
      return {
        title: '',
        showBackButton: 'false'
      }
    }

    let navbar = router.navbar || {}
    return {
      title: navbar.title || '',
      showBackButton: navbar.showBackButton
    }
  }

  export default {
    components: {
      VonHeader: VonHeader
    },

    props: {},

    created() {
      nav.$on('PageTransitionEvent', (data) => {
        console.log('[Navbar] PageTransitionEvent', data)
        console.log(initNavbar(data.to))

        this.navbarLeave = initNavbar(data.from)
        this.navbarEnter = initNavbar(data.to)
      })
    },

    data(){
      return {
        navbarLeave: {},
        navbarEnter: {}
      }
    },

    ready() {

    },

    methods: {}
  }

</script>
