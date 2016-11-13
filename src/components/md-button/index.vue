<template>
  <button class="md-button" @click="onClick($event)">
    <slot></slot>
  </button>
</template>
<style lang='scss'>
  .md-button {
    position: relative;
    overflow: hidden;
    border: none;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  }

  .ripple-effect {
    position: absolute;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background: white;
    animation: ripple 2s;
    -webkit-animation: ripple 2s;
  }

  @keyframes ripple {
    from {
      transform: scale(1);
      opacity: 0.4;
    }
    to {
      transform: scale(100);
      opacity: 0;
    }
  }

  @-webkit-keyframes ripple {
    from {
      -webkit-transform: scale(1);
      opacity: 0.4;
    }
    to {
      -webkit-transform: scale(100);
      opacity: 0;
    }
  }

</style>
<script>
  export default {
    props: {

    },

    data() {
      return {
      }
    },

    ready() {

    },

    methods: {
      onClick(e) {
        e.preventDefault()
        let btn = e.target

        let ripple = document.createElement('div')
        let x = e.pageX - btn.offsetLeft
        let y = e.pageY - btn.offsetTop

        ripple.classList.add('ripple-effect')
        ripple.style.height = btn.offsetHeight + 'px'
        ripple.style.width = btn.offsetHeight + 'px'
        ripple.style.backgroundColor = 'rgba(#FFF, 0.4)'
        ripple.style.left = x - (btn.offsetHeight / 2) + 'px'
        ripple.style.top = y - (btn.offsetHeight / 2) + 'px'

        // console.log(x, y)

        btn.appendChild(ripple)

        setTimeout(() => {
          btn.removeChild(ripple)
        }, 2000)
      }
    }
  }
</script>
