<template>
  <div class="bar bar-header"
    :class="{
      'bar-light': theme == 'light',
      'bar-stable': theme == 'stable',
      'bar-positive': theme == 'positive',
      'bar-calm': theme == 'calm',
      'bar-balanced': theme == 'balanced',
      'bar-energized': theme == 'energized',
      'bar-assertive': theme == 'assertive',
      'bar-royal': theme == 'royal',
      'bar-dark': theme == 'dark'
    }"
  >

    <!-- left button -->
    <div class="buttons">
      <slot name="left"></slot>
    </div>

    <!-- title -->
    <h1 class="title"
      :class="{
        'title-left': titleAlign == 'left',
        'title-right': titleAlign == 'right'
      }"
    >
      <slot name="title"></slot>
    </h1>

    <!-- right button -->
    <div class="buttons">
      <slot name="right"></slot>
    </div>

  </div>
</template>
<script>
  export default {
    props: {
      title: String,
      titleAlign: {
        type: String,
        validator: function (position) {
          return position == 'left' || position == 'right' || position == 'center'
        },
        default: 'center'
      },
      theme: {
        type: String,
        default: 'light'
      },
    }
  }
</script>
