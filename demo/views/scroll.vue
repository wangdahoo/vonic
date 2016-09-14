<template>
  <div class="page has-header">
    <von-header title="Scroll"></von-header>

    <scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
      <div class='padding' id="words">
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
        <p>Keep Walking, be 2 with you.</p>
      </div>
    </scroll>
  </div>
</template>

<script>
  import {Page, VonHeader, Scroll} from 'vonic'

  export default {
    components: {
      Page,
      VonHeader,
      Scroll
    },
    data () {
      return {}
    },
    methods: {
      onRefresh (done) {
        let self = this
        setTimeout(function () {
          done()  // call done
        }, 1500)
      },
      onInfinite (done) {
        console.log('infinite')
        setTimeout(function () {
          var f = document.createDocumentFragment()
          for (let i = 0; i < 10; i++) {
            let p = document.createElement('p')
            p.textContent = 'Keep Walking, be 2 with you.'
            f.appendChild(p)
          }
          document.getElementById('words').appendChild(f)
          done()  // call done()
        }, 1500)
      }
    }
  }
</script>
