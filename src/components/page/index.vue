<style lang="scss">
  @import "../scss/vonic";

  .page {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: $default-page-bg;

    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    &.has-header {
      padding-top: $header-height;

      .scroll {
        top: 0
      }
    }
  }

  .page-enter {
    z-index: 1;
    transform: translate3d(100%, 0, 0);
    -webkit-transform: translate3d(100%, 0, 0);
    transition-duration: .5s;
    -webkit-transition-duration: .5s;
    transition-timing-function: cubic-bezier(.36, .66, .04, 1);
    -webkit-transition-timing-function: cubic-bezier(.36, .66, .04, 1);
    transition-property: transform;
    -webkit-transition-property: -webkit-transform;
  }
  .page-enter.page-enter-active {
    z-index: 2;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
  }
  .page-leave {
    z-index: 2;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transition-duration: .5s;
    -webkit-transition-duration: .5s;
    transition-timing-function: cubic-bezier(.36, .66, .04, 1);
    -webkit-transition-timing-function: cubic-bezier(.36, .66, .04, 1);
    transition-property: opacity, transform;
    -webkit-transition-property: opacity, -webkit-transform;
  }
  .page-leave.page-leave-active {
    z-index: 1;
    opacity: 0.9;
    transform: translate3d(-33%, 0, 0);
    -webkit-transform: translate3d(-33%, 0, 0);
  }

</style>
