<template>
  <div class="cells cells-default">
    <div class="row" v-for="r in getRows()">
      <div :class="cell_class" v-for="c in getCols()" @click="handleCellClick(r, c)">
        {{{ renderCell(r, c) }}}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";

  .cells {
    margin: 10px 0;
    background-color: #FFF;
    @include display-flex();
    @include flex-direction(column);

    .row {
      padding: 0;
      @include flex(1);
      @include thin-border-custom($default-border-color, 0, bottom);
      &:first-of-type {
        @include thin-border-custom($default-border-color, 0, vertical);
      }
    }

    .col {
      text-align: center;
      @include display-flex();
      @include flex(1);
      @include justify-content(center);

      @include thin-border-custom($default-border-color, 0, right);
      &:first-of-type {
        @include thin-border-custom($default-border-color, 0, horizontal);
      }

      &:last-of-type {
        border-right: none;
      }
    }
  }
</style>
<script>
  import _ from 'lodash';

  export default {
    props: {
      cellItems: {
        type: Array,
        required: true
      },

      rows: {
        type: Number,
        default: 3
      },

      cols: {
        type: Number,
        default: 3
      },

      cellClass: String,

      onCellClick: {
        type: Function,
        required: false
      }
    },

    data() {
      return {
        cell_class: this.cellClass ? 'col ' + this.cellClass : 'col',
      }
    },

    methods: {
      renderCell(r, c) {
        let index = r * this.cols + c
        return this.cellItems[index]
      },

      getRows() {
        return _.range(this.rows)
      },

      getCols() {
        return _.range(this.cols)
      },

      handleCellClick(r, c) {
        let cellIndex = r * this.rows + c
        // console.log(cellIndex)

        if (this.onCellClick) this.onCellClick(cellIndex)
      }
    }
  }
</script>
