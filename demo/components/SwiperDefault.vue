<template>
  <div class="page has-navbar" v-nav="{title: '默认', showBackButton: true, onBackButtonClick: back}">
    <div class="page-content">
      <swiper direction="horizontal" width="100%" height="150">
        <swiper-item>
          <h1>Item 1</h1>
        </swiper-item>

        <swiper-item>
          <h1>Item 2</h1>
        </swiper-item>

        <swiper-item>
          <h1>Item 3</h1>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>
<style lang='scss' scoped>

  .swiper-item {
    padding-top: 50px;

    h1 {
      color: #fff;
      font-size: 32px;
      line-height: 50px;
      text-align: center;
      font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
    }

    background-color: #ccc;
  }

</style>
<script>
  import {Swiper, SwiperItem} from 'vonic'

  export default{
    components:{
      Swiper,
      SwiperItem
    },

    props: {

    },

    data() {
      return {
      }
    },

    ready() {

    },

    methods: {

    }
  }
</script>
