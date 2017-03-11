<template>
  <div class="list list-borderless list-accordion"
    :style="{height: getHeight()}"
    >
    <item class="item-icon-right" @click.native="onClick()">
      <span v-text="title"></span>
      <i class="icon ion-arrow-down-b"
        :class="{'rotated': expanded}"></i>
    </item>
    <transition name="von-accordion">
      <div v-show="expanded" class="accordion-content">
        <slot></slot>
        <HairlineBottom></HairlineBottom>
      </div>
    </transition>
  </div>
</template>
<script>
  import channel from './channel'
  import HairlineItem from '../list/HairlineItem'
  import HairlineBottom from '../list/HairlineBottom'

  export default {
    components: {
      Item: HairlineItem,
      HairlineBottom
    },

    props: {
      title: String,
      contentHeight: {
        type: String,
        validator: function (value) {
          return /^[\d]{1,}$/.test(value)
        },
        default: '100'
      }
    },

    data() {
      return {
        expanded: false,
        index: -1
      }
    },

    mounted() {
      let children = this.$el.parentNode.children

      for (let i = 0; i < children.length; i++) {
        if (children[i] == this.$el) {
          this.index = i
          break
        }
      }

      // console.log('accordion item index => ', this.index)

      channel.$on('activeIndexChanged', activeIndex => {
        if (activeIndex != this.index)
          this.expanded = false
      })
    },

    methods: {
      onClick() {
        this.expanded = !this.expanded
        if (this.expanded)
          channel.$emit('activeIndexChanged', this.index)
      },

      getHeight() {
        return this.expanded ? parseInt(this.contentHeight) + 50 + 'px' : '50px'
      }
    }
  }
</script>
