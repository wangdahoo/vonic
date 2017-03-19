<template>
  <div class="page has-navbar"
    v-nav="{
      title: 'VSwipe',
      showBackButton: true,
      showMenuButton: true,
      menuButtonText: menuButtonText,
      onMenuButtonClick: toVSwipeRepo
    }">
    <div class="page-content">
      <p class="padding positive text-center">
        Brad Birdsall's Swipe.js as a Vue component.
      </p>

      <swipe ref="mySwipe" style='max-width:500px;margin:0 auto'>
        <swipe-item><b>0</b></swipe-item>
        <swipe-item><b>1</b></swipe-item>
        <swipe-item><b>2</b></swipe-item>
        <swipe-item><b>3</b></swipe-item>
        <swipe-item><b>4</b></swipe-item>
        <swipe-item><b>5</b></swipe-item>
        <swipe-item><b>6</b></swipe-item>
        <swipe-item><b>7</b></swipe-item>
        <swipe-item><b>8</b></swipe-item>
        <swipe-item><b>9</b></swipe-item>
        <swipe-item><b>10</b></swipe-item>
        <swipe-item><b>11</b></swipe-item>
        <swipe-item><b>12</b></swipe-item>
        <swipe-item><b>13</b></swipe-item>
        <swipe-item><b>14</b></swipe-item>
        <swipe-item><b>15</b></swipe-item>
        <swipe-item><b>16</b></swipe-item>
        <swipe-item><b>17</b></swipe-item>
        <swipe-item><b>18</b></swipe-item>
        <swipe-item><b>19</b></swipe-item>
        <swipe-item><b>20</b></swipe-item>
      </swipe>

      <div class="row">
        <div class="col">
          <button class="button button-assertive button-block" @click='prev()'>prev</button>
        </div>

        <div class="col">
          <button class="button button-assertive button-block" @click='next()'>next</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .swipe-item b {
    display:block;
    font-weight:bold;
    color:#14ADE5;
    font-size:20px;
    text-align:center;
    margin:10px;
    padding:100px 10px;
    box-shadow: 0 1px #EBEBEB;
    background: #fff;
    border-radius: 3px;
    border: 1px solid;
    border-color: #E5E5E5 #D3D3D3 #B9C1C6;
  }
</style>

<script>
  export default {
    data () {
      return {
        menuButtonText: '<span class="assertive">更多</span>'
      }
    },

    methods: {
      prev () {
        this.$refs.mySwipe.prev()
      },
      next () {
        this.$refs.mySwipe.next()
      },
      toVSwipeRepo () {
        $dialog.confirm({
          theme: 'ios',
          content: '去往 VSwipe 官网？'
        }).then((res) => {
          if (res)
            location.href = 'https://github.com/wangdahoo/vswipe'
        })
      }
    }
  }
</script>
