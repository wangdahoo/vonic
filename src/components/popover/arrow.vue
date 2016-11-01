<template>
  <div class="von-popover-arrow" :class="{'top': position == 'top', 'bottom': position == 'bottom', 'left': position == 'left', 'right': position == 'right'}">
    <!-- top -->
    <svg v-if="position == 'top'" width="8px" height="4px" viewBox="0 0 8 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.8">
        <g fill="#000000">
          <polygon points="4 0 8 4 0 4"></polygon>
        </g>
      </g>
    </svg>

    <!-- bottom -->
    <svg v-if="position == 'bottom'" width="8px" height="4px" viewBox="0 0 8 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.8">
        <g fill="#000000">
          <polygon points="4 4 8 0 0 0"></polygon>
        </g>
      </g>
    </svg>

    <!-- left -->
    <svg v-if="position == 'left'" width="4px" height="8px" viewBox="0 0 4 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.8">
        <g fill="#000000">
          <polygon points="0 4 4 0 4 8"></polygon>
        </g>
      </g>
    </svg>

    <!-- right -->
    <svg v-if="position == 'right'" width="4px" height="8px" viewBox="0 0 4 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.8">
        <g fill="#000000">
          <polygon points="4 4 0 8 0 0"></polygon>
        </g>
      </g>
    </svg>
  </div>
</template>
<style lang='scss'>
  .von-popover-arrow {
    position: absolute;

    svg {
      position: absolute;
    }

    &.top, &.bottom {
      width: 100%;
      left: 0;
      svg {
        left: 50%;
        top: 0;
        margin-left: -4px;
      }
    }

    &.top {
      top: 0;
    }

    &.bottom {
      bottom: 4px;
    }

    &.left, &.right {
      height: 100%;
      top: 0;
      svg {
        top: 50%;
        left: 0;
        margin-top: -4px;
      }
    }

    &.left {
      left: 0;
    }

    &.right {
      right: 4px;
    }

  }
</style>
<script>
  export default {
    props: {
      position: {
        type: String,
        default: 'top'
      }
    }
  }
</script>
