<template>
  <div class="list von-checkbox">
    <label class="item item-icon-right"
           v-for="(index, option) in options">
      <input type="checkbox" name="{{ checkboxName }}" id="{{ checkboxName + '-' + index }}" @click="onOptionClick(index)">
      <span>{{ option }}</span>
      <i class="icon"
         :class="{'ion-ios-checkmark-empty assertive': isChecked(index)}"></i>
    </label>
  </div>
</template>
<style lang="scss" scoped>
  @import "../scss/variables";

  .von-checkbox {

    .item-icon-right {
      .icon {
        font-size: 36px;
        right: 5px;
      }
    }

    input[type=checkbox] {
      position: absolute;
      top: -50000px;
      left: -50000px;
    }
  }
</style>
<script>
  import uuid from 'node-uuid'
  import _ from 'lodash'

  export default{
    props: {
      options: {
        type: Array,
        required: true
      },

      value: {
        type: Array,
        required: true
      },
    },

    methods: {
      onOptionClick(index) {
        let vIndex = _.indexOf(this.value, index)

        if (vIndex == -1) {
          this.value.push(index);
        } else {
          this.value.splice(vIndex, 1);
        }

        this.value.sort();
      },

      isChecked(index) {
        return _.indexOf(this.value, index) > -1;
      }
    },

    data() {
      return {
        checkboxName: 'von-checkbox-' + uuid.v4().substr(0, 8),
      }
    }
  }
</script>
