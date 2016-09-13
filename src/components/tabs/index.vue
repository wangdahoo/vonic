<template>
  <div class="tabs-striped tabs-{{ position }} tabs-background-{{ bgColor }} tabs-color-{{ tabColor }}">
    <div class="tabs">
      <a v-for="(index, tabItem) in tabItems"
         class="tab-item"
         v-bind:class="{'active': activeIndex == index}"
         @click="tabChanged(index)">
        {{ tabItem }}
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>

  .tabs-top .tab-item {
    margin-top: 1px;
  }

  .tabs-bottom .tab-item {
    margin-top: 0px;
  }

</style>
<script>

  export default{
    props: {
      position: {
        type: String,
        default() {
          return "top"
        }
      },
      bgColor: {
        type: String,
        default() {
          return "light"
        }
      },
      tabColor: {
        type: String,
        default() {
          return "positive"
        }
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
