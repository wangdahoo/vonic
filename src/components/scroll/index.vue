<script>
  import Vue from 'vue'
  import Scroller from 'vue-scroller'

  Scroller.props.delegateId = {
    type: String,
    // default: Math.random().toString(36).substr(3, 8),
    default: 'CURRENT_SCROLLER',
    required: false
  }

  export default Scroller
</script>
