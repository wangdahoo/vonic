<style lang="scss">
  @import "../scss/vonic";

  $view-box-shadow: -4px 0px 8px darken($default-page-bg, 6.5%);

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

  .view {
    z-index: 1;
    opacity: 1;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;

    // defualt ios transition
    @include transition-duration($ios-transition-duration);
    @include transition-timing-function($ios-transition-timing-function);
    -webkit-transition-property: opacity, -webkit-transform, box-shadow;
            transition-property: opacity, transform, box-shadow;

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
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      box-shadow: none;

      z-index: 1;
      opacity: 0.8;
      transform: translate3d(-33%, 0, 0);
      -webkit-transform: translate3d(-33%, 0, 0);
    }

    // iOS Nav Bar Transition
    &.view-enter [von-header] {
      background: transparent;
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
  .page .page-content, .modal .page-content {
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

   .modal .page-content {
     padding-top: $header-height;
   }

  // grade-b
  .grade-b .view {
    transform: translate(0, 0);
    -webkit-transform: translate(0, 0);

    @include transition-duration($android-transition-duration);
    @include transition-timing-function($android-transition-timing-function);

    &.view-enter {
      z-index: 2;
      -moz-box-shadow: $view-box-shadow;
      -webkit-box-shadow: $view-box-shadow;
      box-shadow: $view-box-shadow;

      opacity: 1;
      transform: translate(100%, 0);
      -webkit-transform: translate(100%, 0);
    }

    &.view-leave {
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      box-shadow: none;

      z-index: 1;
      opacity: 0.8;
      transform: translate(-100%, 0);
      -webkit-transform: translate(-100%, 0);
    }
  }

  .grade-b .transition-reverse > .view {
    &.view-enter {
      z-index: 1;
      opacity: 0.8;
      transform: translate(-100%, 0);
      -webkit-transform: translate(-100%, 0);
    }

    &.view-leave {
      z-index: 2;
      opacity: 1;
      transform: translate(100%, 0);
      -webkit-transform: translate(100%, 0);
    }
  }


</style>
