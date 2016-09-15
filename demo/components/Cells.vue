<template>
  <div class="page has-header">
    <von-header title="Cells"></von-header>

    <div class="page-content">

      <cells :cell-items="cells_22" cell-class="cells_22-cell"
             :rows="2" :cols="2"></cells>

      <cells :cell-items="cells_24" cell-class="cells_44-cell"
             :rows="2" :cols="4"></cells>

      <cells :cell-items="cells_33" cell-class="cells_33-cell"
             :on-cell-click="onCellClick"></cells>

    </div>
  </div>
</template>
<style lang="scss">

  .cells_33-cell {
    color: #666;
    padding: 40px 0 !important;
  }

  .cells_22-cell {
    padding: 50px 0;
  }

  .cells_44-cell {
    padding: 25px 0;
  }

  .cells_22-cell, .cells_44-cell {
    color: #666;

    span {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;

      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -moz-box-flex: 1;
      -moz-flex: 1;
      -ms-flex: 1;
      flex: 1;

      -webkit-box-direction: normal;
      -webkit-box-orient: vertical;
      -webkit-flex-direction: column;
      -moz-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;

      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      -moz-justify-content: center;
      justify-content: center;

      color: #666;

      .icon {
        font-size: 28px;
      }
    }
  }

</style>
<script>
  import _ from 'lodash'
  import {Page, Scroll, VonHeader, Cells} from 'vonic'

  export default{
    components: {
      Page,
      Scroll,
      VonHeader,
      Cells
    },

    data(){
      return {
        cells_22: [
          '<span><i class="icon ion-checkmark-circled balanced"></i><i>cell 1</i></span>',
          '<span><i class="icon ion-close-circled assertive"></i><i>cell 2</i></span>',
          '<span><i class="icon ion-information-circled energized"></i><i>cell 3</i></span>',
          '<span><i class="icon ion-help-circled calm"></i><i>cell 4</i></span>',
        ],

        cells_33: [
          'cell 1',
          'cell 2',
          'cell 3',
          'cell 4',
          'cell 5',
          'cell 6',
          'cell 7'
        ],

        cells_24: [
          '<span><i class="icon ion-android-apps positive"></i></span>',
          '<span><i class="icon ion-android-search positive"></i></span>',
          '<span><i class="icon ion-android-star assertive"></i></span>',
          '<span><i class="icon ion-android-share positive"></i></span>',
          '<span><i class="icon ion-android-person dark"></i></span>',
          '<span><i class="icon ion-android-settings dark"></i></span>',
        ],

      }
    },

    methods: {
      onCellClick(cellIndex) {
        alert('cell ' + cellIndex + ' clicked!');
      }
    }
  }
</script>
