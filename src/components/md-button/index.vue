<template>
  <div class="md-button" @click="onClick($event)">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    methods: {
      onClick(e) {
        e.preventDefault()
        let btn = e.target

        let ripple = document.createElement('div')
        ripple.classList.add('md-ripple')
        let x = e.pageX - btn.offsetLeft
        let y = e.pageY - btn.offsetTop
        ripple.style.height = btn.offsetHeight + 'px'
        ripple.style.width = btn.offsetHeight + 'px'
        ripple.style.left = x - btn.offsetHeight / 2 + 'px'
        ripple.style.top = y - btn.offsetHeight / 2 + 'px'

        btn.appendChild(ripple)

        ripple.classList.add('md-ripple-effect')
        setTimeout(() => {
          btn.removeChild(ripple)
        }, 2000)
      }
    }
  }
</script>
