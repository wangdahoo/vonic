<template>
  <page has-header="true">
    <von-header title="Scroll"></von-header>
    <page-content>
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
    </page-content>
  </page>
</template>

<script>
  import { Page, PageContent, VonHeader, Scroll } from 'vonic'

  export default {
    components: {
      Page,
      PageContent,
      VonHeader,
      Scroll
    },
    data () {
      return {
        time: new Date()
      }
    },
    methods: {
      onRefresh (done) {
        let self = this
        setTimeout(function () {
          self.time = new Date()
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
