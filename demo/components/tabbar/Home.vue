<template>
  <div class="page" v-nav="{hideNavbar: true}">
    <div class="bar bar-header">
      <h1 class="title">首页</h1>
    </div>

    <div class="page-content padding padding-top">
      <p class="text-center">Home Page</p>

      <div style="text-align: center; padding: 100px">
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
        $router.back({ path: '/' })
      }
    }
  }

</script>
