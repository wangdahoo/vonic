<template>
  <div class="page has-navbar page-swiper" v-nav="{title: '轮播', showBackButton: true, onBackButtonClick: back}">
    <div class="page-content padding-top">

      <div class="item item-icon-right" v-link="{ path: '/widgets/swiperDefault' }">
        Default<span class="note">默认</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

      <div class="item item-icon-right" @click="swiperInPopup()">
        Swiper in Popup<span class="note">弹层内轮播</span>
        <i class="icon ion-ios-arrow-right"></i>
      </div>

    </div>

    <popup effect='slide' :buttons="swiperPopupButtons" v-ref:swiper_popup class="swiper-popup">
      <swiper direction="horizontal" width="100%" height="150px" v-if="popupShowed">
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
    </popup>

  </div>
</template>
<style lang="scss">

  .page-swiper {
    .item-divider:first-of-type {
      border-top: none;
    }

    .item-icon-right {
      .icon {
        right: 0;
        color: #ccc;
        font-size: 24px;
      }

      span.note {
        color: #aaa;
        font-size: 13px;
        float: right;
        margin-right: 15px;
      }
    }

    .swiper-item {
      padding-top: 50px;

      h1 {
        color: #fff;
        font-size: 32px;
        line-height: 50px;
        text-align: center;
        font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
      }

      &:nth-of-type(1) {
        background-color: #ec4949;
      }

      &:nth-of-type(2) {
        background-color: #44cc00;
      }

      &:nth-of-type(3) {
        background-color: #0a9dc7;
      }
    }
  }

  .swiper-popup {
    .popup-body {
      padding: 10px 0;
    }
  }

</style>
<script>

  import {Swiper, SwiperItem, Popup} from 'vonic'

  export default{
    components: {
      Swiper,
      SwiperItem,
      Popup
    },

    data() {
      return {
        popupShowed: false,
        swiperPopupButtons: [
          {
            text: '关闭'
          }
        ]
      }
    },

    methods: {
      swiperInPopup() {
        this.popupShowed = true
        let popup = this.$refs.swiper_popup
        popup.show().then(() => {
          this.popupShowed = false
        })
      },

      back() {
        $router.back({path: '/'})
      }
    }
  }
</script>
