<template>
  <div class="list von-radio">
    <label class="item item-icon-left"
           v-for="(index, option) in options">
      <input type="radio" name="{{ radioId }}" v-model="value" @click="onOptionClick(index)">
      <i class="icon"
         :class="{'ion-ios-circle-outline': value!=index, 'ion-ios-checkmark assertive': value==index}"></i>
      <span>{{ option }}</span>
    </label>
  </div>
</template>
<style lang="scss" scoped>
  .von-radio {
    .item {
      padding: 10px 15px 10px 40px;
      font-size: 14px;
      line-height: 20px;
    }

    .item-icon-left {
      .icon {
        font-size: 28px;
        left: 5px;
      }
    }

    .ion-ios-circle-outline {
      color: #ccc;
    }

    input[type=radio] {
      position: absolute;
      top: -50000px;
      left: -50000px;
    }
  }
</style>
<script>
  import uuid from 'node-uuid'

  export default{
    props: {
      options: {
        type: Array,
        required: true
      },

      value: {
        type: [Number, String]
      },
    },

    data() {
      return {
        radioId: 'von-radio-' + uuid.v4().substr(0, 8)
      }
    },

    methods: {
      onOptionClick($index) {
        this.value = $index
      }
    },

    watch: {
      value(newVal, oldVal) {
        if (typeof newVal != 'number') {
          this.value = oldVal
        }
      }
    }
  }
</script>
