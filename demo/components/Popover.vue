<template>
  <div class="page has-navbar" v-nav="{title: '弹出式提醒', showBackButton: true}">
    <div class="page-content padding">

      <div class="row">
        <div class="col"></div>
        <div class="col">
          <button class="button button-positive button-block">上</button>
        </div>
        <div class="col"></div>
      </div>

      <div class="row">
        <div class="col"></div>
        <div class="col">
          <button class="button button-assertive button-block">下</button>
        </div>
        <div class="col"></div>
      </div>

      <div class="row">
        <div class="col"></div>
        <div class="col">
          <button class="button button-balanced button-block">左</button>
        </div>
        <div class="col"></div>
      </div>

      <div class="row">
        <div class="col"></div>
        <div class="col">
          <button class="button button-energized button-block">右</button>
        </div>
        <div class="col"></div>
      </div>

    </div>

    <popover direction="right">
      Hello!
    </popover>

  </div>
</template>
<style scoped>
  .row {
    margin: 50px 0 0 0;
  }
</style>
<script>
  import {Popover} from 'vonic'

  export default{
    components:{
      Popover
    },

    props: {

    },

    data(){
      return{

      }
    },

    ready() {

    },

    methods: {

    }
  }
</script>
