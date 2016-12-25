<template>
  <div class="page has-navbar has-tabbar" v-nav="{title: '首页'}" v-tabbar-menu-index="0">
    <div class="page-content padding-top">
      <p class="text-center">Home Page</p>
      <div style="text-align: center; padding: 100px 40px">
        <md-button class="button button-assertive" @click="back()">
          返回组件列表页
        </md-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {MdButton} from 'vonic'

  export default {
    components: {
      MdButton
    },

    methods: {
      back() {
        $router.back({ path: '/home' })
      }
    }
  }

</script>
