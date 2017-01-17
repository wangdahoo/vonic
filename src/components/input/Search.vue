<template>
  <div class="bar bar-header item-input-inset">
    <label class="item-input-wrapper">
      <i class="icon ion-ios-search placeholder-icon"></i>
      <form action='' id="{{formId}}" >
        <input type="search" placeholder="{{placeholder}}" v-model="value">
      </form>
    </label>
    <button class="button button-clear button-positive" @click='cancel()'>
      {{cancelText}}
    </button>
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        default: 'Search'
      },
      cancelText: {
        type: String,
        default: 'Cancel'
      },
      onSearch: Function,
      onCancel: Function
    },

    data() {
      return {
        formId: 'von-search-' + Math.random().toString(36).substring(3, 8)
      }
    },

    ready() {
      document.getElementById(this.formId).onsubmit = this.search
    },

    methods: {
      search(e) {
        e.preventDefault()
        let search = document.querySelector('#' + this.formId + ' > [type=search]')
        search.blur()
        if (this.onSearch) this.onSearch()
      },

      cancel() {
        if (this.onCancel) this.onCancel()
      }
    }
  }
</script>
