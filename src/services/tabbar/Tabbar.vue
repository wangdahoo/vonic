<template>
  <div class="tabbar" :class="{'visible': state == 1}">
    <div v-for="(menu, index) in menus"
         class="tabbar-item"
         :style="{'color': menuIndex == index ? activeMenuColor : menuColor}"
         @click="menuClicked(index)">
      <div class="icon-wrapper">
        <i :class="getIconClass(menu, index)"></i>
      </div>

      <div class="text-wrapper">
        <scalable>
          <span v-text="menu.text"></span>
        </scalable>
      </div>

      <badge v-if="menu.badge" :num="menu.badge"></badge>
    </div>
  </div>
</template>
<script>
  import Scalable from '../../components/scalable'
  import Badge from '../../components/badge'

  const re_color = /^#([0-9A-Fa-f]{3})|([0-9A-Fa-f]{6})$/;

  export default {
    components: {
      Scalable,
      Badge
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

    mounted() {
      this.$el.setAttribute('von-tabbar', '')
      this.show()
      setTimeout(() => {
        this.$el.classList.add('fixed')
      }, 600)
    },

    beforeDestroy() {
      if (document.body.classList.contains('grade-a'))
        window.__disable_nav_title_transition__ = false
    },

    desctoryed() {
      document.body.removeChild(this.$el)
    },

    data() {
      return {
        menus: [],
        menuIndex: 0,
        state: 0
      }
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
      },

      getIconClass(menu, index) {
        let iconClass = {}
        iconClass['icon ' + menu.iconOn] = this.menuIndex == index
        iconClass['icon  ' + menu.iconOff] = this.menuIndex != index
        return iconClass
      },

      setBadgeNum(menuIndex, num) {
        this.menus[menuIndex].bage = num
      }
    },
  }
</script>
