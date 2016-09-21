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
    overflow: hidden;

    &.has-header {
      padding-top: $header-height;

      .scroll {
        top: 0
      }
    }
  }

  $view-box-shadow: -4px 0px 8px darken($default-page-bg, 6.5%);

  .view {
    z-index: 1;
    opacity: 1;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);

    transition: opacity,transform 400ms cubic-bezier(.36, .66, .04, 1);
    -webkit-transition: opacity,-webkit-transform 400ms cubic-bezier(.36, .66, .04, 1);

    -moz-box-shadow: $view-box-shadow;
    -webkit-box-shadow: $view-box-shadow;
    box-shadow: $view-box-shadow;

    &.view-enter {
      z-index: 2;
      -moz-box-shadow: $view-box-shadow;
      -webkit-box-shadow: $view-box-shadow;
      box-shadow: $view-box-shadow;

      opacity: 1;
      transform: translate3d(100%, 0, 0);
      -webkit-transform: translate3d(100%, 0, 0);
    }

    &.view-leave {
      -moz-box-shadow: $view-box-shadow;
      -webkit-box-shadow: $view-box-shadow;
      box-shadow: $view-box-shadow;

      z-index: 1;
      opacity: 0.8;
      transform: translate3d(-33%, 0, 0);
      -webkit-transform: translate3d(-33%, 0, 0);
    }
  }

  .transition-reverse > .view {
    &.view-enter {
      z-index: 1;
      opacity: 0.8;
      transform: translate3d(-33%, 0, 0);
      -webkit-transform: translate3d(-33%, 0, 0);
    }

    &.view-leave {
      z-index: 2;
      opacity: 1;
      transform: translate3d(100%, 0, 0);
      -webkit-transform: translate3d(100%, 0, 0);
    }
  }

  /* page content */
  .page .page-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    width: auto;
    height: auto;
  }

  .page.has-header > .page-content {
    padding-top: $header-height;
  }

  .page.has-header > .page-content.padding-top {
    padding-top: $header-height + $padding;
  }

</style>
