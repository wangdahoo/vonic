<template>
  <div class="button-bar von-button-bar">
    <a v-for="(tabItem, index) in tabItems"
      class="button button-small"
      :class="initButtonClass(index)"
      @click="tabClicked(index)" v-text="tabItem"
    ></a>
  </div>
</template>
<script>
  export default{
    props: {
      tabItems: {
        type: Array,
        required: true
      },
      tabIndex: {
        type: Number,
        required: true,
        default: 0,
        validator(value) {
          return value >= 0
        }
      },
      theme: {
        type: String,
        default: 'positive'
      },
      onTabClick: Function
    },

    computed: {
      activeIndex: function () {
        return this.tabIndex
      }
    },

    methods: {
      initButtonClass(index) {
        let buttonClass = {}
        buttonClass['button button-small button-' + this.theme + ' button-outline'] = index !== this.activeIndex
        buttonClass['button button-small button-' + this.theme] = index == this.activeIndex
        return buttonClass
      },

      tabClicked(index) {
        if (this.onTabClick) this.onTabClick(index)
      }
    }
  }
</script>
