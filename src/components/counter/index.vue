<template>
  <div class="von-counter">
    <button class="button button-small button-clear counter-left" @click="dec()">
      <i class="icon ion-minus"></i>
    </button>

    <label class="counter-center bg-light">
      {{value}}
      <select :id="selectId" v-model="value">
        <option v-for="option in options" :value="option">
          {{ option }}
        </option>
      </select>
    </label>

    <button class="button button-small button-clear counter-right" @click="inc()">
      <i class="icon ion-plus"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped>
  @import "../scss/mixins";
  @import "../scss/utils";

  $counter-height: 30px;
  $counter-border-radius: 4px;

  .von-counter {
    z-index: 1;
    @include display-flex();
    
    height: $counter-height;
    border-radius: $counter-border-radius;
    
    .counter-left, .counter-right {
      width: $counter-height * 1.5;
      height: $counter-height - 2px;
      min-height: $counter-height - 2px;
      text-align: center;
      line-height: 100%;
      .icon {
        color: #FFF;
        font-size: 14px;
        line-height: $counter-height - 2px;
      }

      &:active, &.actived {
        background-color: rgba(0,0,0,0.2);
      }
    }

    .counter-left {
      border-top-left-radius: $counter-border-radius;
      border-bottom-left-radius: $counter-border-radius;
    }

    .counter-right {
      border-top-right-radius: $counter-border-radius;
      border-bottom-right-radius: $counter-border-radius;
    }

    .counter-center {
      @include flex();
      font-size: 12px;
      line-height: $counter-height - 2px;
      text-align: center;
      box-shadow: 0px 0px 5px #ddd inset;
    
      select {
        position: absolute;
        top: -50000px;
        left: -50000px;
      }
    }
  
  }
</style>

<script>
export default {
  props: {
    value:{
      type: Number,
      required: true
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    theme: {
      default: 'assertive'
    }
  },

  data() {
    return {
      selectId: 'von-counter-select-' + Math.random().toString(36).substring(3, 8),
      options: []
    }
  },

  ready() {
    for (let i=this.min; i<=this.max; i++) {
      this.options.push(i);
    }

    this.$el.classList.add('border-' + this.theme)
    this.$el.classList.add('bg-' + this.theme)
  },

  methods: {
    inc() {
      if (this.value < this.max)
        this.value++
    },

    dec() {
      if (this.value > this.min)
        this.value--
    }
  }
}
</script>
