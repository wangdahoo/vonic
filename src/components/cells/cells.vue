<template>
  <div class="cells">
    <div class="row" v-for="r in rows">
      <div class="hairline-top"></div>
      <div class="col" v-for="c in cols" @click="cellClicked(r*cols.length + c)">
        <div v-if="c" class="hairline-left"></div>
        {{{ items[r*cols.length + c] }}}
      </div>
    </div>
    <div class="hairline-bottom"></div>
  </div>
</template>

<style lang="scss">
  @import "../scss/mixins";

  .hairline-top:before {
    @include hairline(top);
  }

  .hairline-bottom:after {
    @include hairline(bottom);
  }

  .hairline-left:before {
    @include hairline(left);
  }

  .hairline-right:after {
    @include hairline(right);
  }

  .cells {
    margin: 10px 0;
    position: relative;
    background-color: #FFF;
    .row {
      position: relative;
      margin: 0;
      padding: 0;
      .col {
        margin: 0;
        padding: 0;
        position: relative;
        text-align: center;
      }
    }
  }
</style>
<script>
  import _ from 'lodash'

  export default {
    props: {
      row: {
        type: [Number, String],
        default: 3
      },
      col: {
        type: [Number, String],
        default: 3
      },
      items: {
        type: Array,
        required: true
      },
      onCellClick: Function
    },

    data() {
      return {
        rows: _.range(parseInt(this.row)),
        cols: _.range(parseInt(this.col))
      }
    },

    methods: {
      cellClicked(cellIndex) {
        // console.log(cellIndex)
        if (this.onCellClick) this.onCellClick(cellIndex)
      }
    }
  }
</script>
