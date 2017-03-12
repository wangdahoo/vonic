<template>
  <div>
    <div class="tabs">
      <a v-for="(tabItem, index) in tabItems"
         class="tab-item"
         :class="{'active': activeIndex == index}"
         @click="tabClicked(index)" v-text="tabItem">
      </a>
    </div>
  </div>
</template>
<script>
  export default {
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
      tabIndex: {
        type: Number,
        required: true,
        validator(value) {
          return value >= 0
        }
      },
      onTabClick: {
        type: Function
      }
    },

    computed: {
      activeIndex: function () {
        return this.tabIndex
      }
    },

    mounted() {
      let className = `tabs-striped tabs-${ this.position } tabs-background-${ this.bgColor } tabs-color-${ this.tabColor }`
      this.$el.className = className
    },

    methods: {
      tabClicked(index) {
        if (this.onTabClick) this.onTabClick(index)
      }
    }
  }
</script>
