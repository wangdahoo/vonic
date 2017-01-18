<template>
  <div class="button-bar von-button-bar">
    <a v-for="(tabItem, index) in tabItems"
      class="button button-small"
      :class="initButtonClass(index)"
      @click="tabClicked(index)" v-text="tabItem"
    ></a>
  </div>
</template>
<style lang="scss" scoped>
  @import "../scss/variables";

  $border-radius: 5px;

  .von-button-bar {
    margin: 10px 0;

    .button-small {
      font-size: 12px;
      line-height: 28px;
    }

    >.button:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }

    >.button:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }

</style>
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
