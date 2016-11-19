<template>
  <div class="tabbar">
    <div v-for="($index, menu) in menus"
         class="tabbar-item"
         :style="{'color': menuIndex == $index ? activeMenuColor : menuColor}"
         @click="menuClicked($index)">
      <div class="icon-wrapper">
        <i class="icon {{ menuIndex == $index ? menu.iconOn : menu.iconOff }}"></i>
      </div>

      <div class="text-wrapper">
        <scalable>
          <span>{{ menu.text }}</span>
        </scalable>
      </div>
    </div>
  </div>
</template>
<style lang='scss'>
  @import "../scss/mixins";

  $tabbar-z-index: 10;

  .tabbar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 44px;
    z-index: $tabbar-z-index;
    background-color: #f5f5f5;
    @include display-flex();
    @include flex-wrap(wrap);
    margin: 0;
    padding: 0;

    &:before {
      @include hairline(top);
    }

    .tabbar-item {
      @include display-flex();
      @include flex(1);
      @include flex-direction(column);

      .icon-wrapper {
        @include flex(none);
        height: 32px;
        text-align: center;
        font-size: 28px;
        line-height: 32px;
      }

      .text-wrapper {
        @include flex(1);
        text-align: center;
        font-size: 20px;
        line-height: 20px;
      }
    }

  }
</style>
<script>
  import Scalable from '../scalable'

  const re_color = /^#([0-9A-Fa-f]{3})|([0-9A-Fa-f]{6})$/;

  export default {
    components: {
      Scalable
    },

    props: {
      menus: {
        type: Array,
        required: true
      },

      menuColor: {
        type: String,
        default: '#888',
        validator(v) {
          return re_color.test(v)
        }
      },

      activeMenuColor: {
        type: String,
        default: '#EA5A49',
        validator(v) {
          return re_color.test(v)
        }
      },

      onMenuClick: {
        type: Function
      }
    },

    data() {
      return {
        menuIndex: 0
      }
    },

    methods: {
      menuClicked(menuIndex) {
        this.menuIndex = menuIndex
        $router.forward({ path: this.menus[menuIndex].path })

        if (this.onMenuClick) {
          this.onMenuClick(menuIndex)
        }
      }
    }
  }
</script>
