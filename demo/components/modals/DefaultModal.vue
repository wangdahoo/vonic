<script>
  export default {
    template: `
      <div class="padding">
        <p>
          我有一只小毛驴我从来也不骑。
        </p>

        <button v-if="!showMore" class="button button-assertive button-small" @click="more()">show more</button>
        <p v-if="showMore">
          有一天我心血来潮骑它去赶集。
        </p>
      </div>
    `,

    data() {
      return {
        showMore: false
      }
    },

    methods: {
      more() {
        this.showMore = true
      }
    }
  }
</script>
