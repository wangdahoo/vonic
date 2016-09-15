<template>
  <div class="tabs-striped tabs-{{ position }} tabs-background-{{ bgColor }} tabs-color-{{ tabColor }}">
    <div class="tabs">
      <a v-for="(index, tabItem) in tabItems"
         class="tab-item"
         :class="{'active': activeIndex == index}"
         @click="tabChanged(index)">
        {{ tabItem }}
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>

  @import "../scss/variables";

  .tabs-top .tab-item {
    margin-top: 1px;
  }

  .tabs-bottom .tab-item {
    margin-top: 0px;
  }

  .tabs-top > .tabs {
    border-bottom: 1px solid $default-border-color;
    @media only screen and (-webkit-min-device-pixel-ratio: 2) {
      border-bottom: 0.5px solid $default-border-color;
    }
  }

</style>
<script>
  export default{
    props: {
      position: {
        type: String,
        default: 'top'
      },
      bgColor: {
        type: String,
        default: 'light'
      },
      tabColor: {
        type: String,
        default: 'positive'
      },

      tabItems: {
        type: Array,
        required: true
      },

      activeIndex: {
        type: Number,
        required: true,
        validator(value) {
          return value >= 0
        }
      },

      onTabChanged: {
        type: Function
      }
    },

    methods: {
      tabChanged(index) {
        this.activeIndex = index
        if (this.onTabChanged) this.onTabChanged(this.activeIndex)
      }
    }
  }
</script>
