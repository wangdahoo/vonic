<template>
  <div class="tabbar" :class="{'visible': state == 1}">
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
  @import "../../components/scss/mixins";
  $tabbar-z-index: 10;

  .tabbar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 44px;
    z-index: $tabbar-z-index;
    background-color: #fff;
    @include display-flex();
    @include flex-wrap(wrap);
    margin: 0;
    padding: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    /* 
    &:before {
      @include hairline(top);
    }
    */

    opacity: 0;
    transition: opacity .2s;
    -webkit-transition: opacity .2s;
    &.visible {
      opacity: 1;
    }

    &.fixed {
      position: fixed;
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
  import Scalable from '../../components/scalable'

  const re_color = /^#([0-9A-Fa-f]{3})|([0-9A-Fa-f]{6})$/;

  export default {
    el: '[von-tabbar]',

    components: {
      Scalable
    },

    props: {
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
        menus: [],
        menuIndex: 0,
        state: 0
      }
    },

    ready() {
      this.show()
      setTimeout(() => {
        this.$el.classList.add('fixed')
      }, 600)
    },

    methods: {
      menuClicked(menuIndex) {
        window.__disable_nav_title_transition__ = true

        this.menuIndex = menuIndex
        if (this.menus[menuIndex].path)
          $router.forward({ path: this.menus[menuIndex].path })

        if (this.onMenuClick) {
          this.onMenuClick(menuIndex)
        }
      },

      activate(index) {
        this.menuIndex = index
      },

      show() {
        this.state = 1
      }
    },

    beforeDestroy() {
      window.__disable_nav_title_transition__ = false
    }
  }
</script>
