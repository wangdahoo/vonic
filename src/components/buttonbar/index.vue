<template>
  <div class="button-bar von-button-bar">
    <a v-for="(index, tabItem) in tabItems"
       class="{{ getButtonClass(index) }}" @click="tabChanged(index)">
      {{ tabItem }}
    </a>
  </div>
</template>
<style lang="scss" scoped>
  @import "../scss/vonic";

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

      activeIndex: {
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
      }
    },

    methods: {
      getButtonClass(index) {
        return 'button button-small button-' + this.theme + (index !== this.activeIndex ? ' button-outline' : '')
      },

      tabChanged(index) {
        this.activeIndex = index
        if (this.onTabChanged) this.onTabChanged(this.activeIndex)
      }
    }
  }
</script>
