<template>
  <div class="cells">
    <div class="row" v-for="(r, index) in rows">
      <div v-if="index != 0 || (outerBorder == true || outerBorder == 'true')" class="hairline-top"></div>
      <div class="col" v-for="c in cols" @click="cellClicked(r*cols.length + c)">
        <div v-if="c" class="hairline-left"></div>
        <div v-html="items[r*cols.length + c]"></div>
      </div>
    </div>
    <div v-if="outerBorder == true || outerBorder == 'true'" class="hairline-bottom"></div>
  </div>
</template>
<script>
  const range = (n) => {
    let l = []
    for (let i = 0; i < n; i++) l.push(i)
    return l
  }

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
      onCellClick: Function,
      outerBorder: {
        type: [String, Boolean],
        default: true
      }
    },

    data() {
      return {
        rows: range(parseInt(this.row)),
        cols: range(parseInt(this.col))
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
