<template>
  <div class="list von-radio-list">
    <label class="item item-icon-right"
           v-for="(index, option) in options">
      <input type="radio" name="input-radio" v-model="value" @click="onOptionClick(index)">
      <span>{{ option }}</span>
      <i class="icon"
         :class="{'ion-ios-circle-outline': value!=index, 'ion-ios-checkmark assertive': value==index}"></i>
    </label>
  </div>
</template>
<style lang="scss" scoped>
  .von-radio-list {
    .item {
      padding: 10px 15px;
      font-size: 14px;
      line-height: 20px;
    }

    .item-icon-right {
      .icon {
        font-size: 28px;
        right: 6px;
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
