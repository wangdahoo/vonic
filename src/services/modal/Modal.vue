<template>
  <div class="modal-backdrop"
    :class="{'active': state > 0, 'hide': state == 0}">
    <div class="modal-backdrop-bg"></div>
    <div class="modal-wrapper">
      <div class="modal slide-in-up" :class="{
        'active': state == 1,
        'ng-enter ng-enter-active active': state == 2,
        'ng-leave ng-leave-active': state == 3,
      }">
        <slot name="header">
          <div class="bar bar-header">
            <h1 class="title" v-text="title"></h1>
            <button class="button button-icon icon ion-ios-close-empty" @click="hide()"></button>
          </div>
        </slot>

        <div class="content" von-modal-content>

        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .modal {
    padding-top: 44px;
  }
</style>
<script>
  import Vue from 'vue'

  const show_modal_animate_dur = 400
  const hide_modal_animate_dur = 250

  export default {
    props: {
      title: String
    },

    data() {
      return {
        state: 0
      }
    },

    destroyed() {
      this.$el.parentNode.removeChild(this.$el)
    },

    methods: {
      show() {
        this.state = 1
        setTimeout(() => {
          this.state = 2
        }, 50)
        document.body.classList.add('modal-open')
      },

      hide() {
        this.state = 3
        setTimeout(() => {
          this.state = 0
        }, hide_modal_animate_dur)
        document.body.classList.remove('modal-open')
      }
    }
  }
</script>
