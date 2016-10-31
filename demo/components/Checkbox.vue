<template>
  <div class="page has-header" v-nav="{title: '复选框'}">

    <div class="page-content">
      <div class="item item-divider">
        选择感兴趣的板块:
      </div>

      <von-checkbox :options="topics" :value.sync="chosenTopics"></von-checkbox>

      <p class="padding">
        chosen topics: {{ chosenTopics }}
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  import _ from 'lodash'
  import {VonCheckbox} from 'vonic'

  export default{
    components: {
      VonCheckbox
    },

    data(){
      return {
        chosenTopics: [],
        topics: ["娱乐", "电影", "减肥", "搞笑", "科技"]
      }
    },

    methods: {
      back() {
        $vonic.nextTransition('back')
        $router.go({path: '/home'})
      }
    }
  }
</script>
