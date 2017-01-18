# Change Logs

### 2017-01-07 v1.0.1
- Add **outerBorder** option for **Cells**
- Add **pagerBgColor** option for **Swiper**
- Fix **Cascade** bug in X5, MIUI Browser

### 2017-01-08 v1.0.2
- Add **ajaxUrl** and **ajaxData** options for **Cascade**, in purpose of loading data by Ajax.
- Add **fromTemplateUrl** method for **$popup**, in purpose of loading popup template by Ajax.
- Fix **$storage.on** bug.

### 2017-01-10 v1.1.0
- Register vonic components when `Vue.use(Vonic.app, ...)`.

Before: 

```vue
<template>
  <div class="page has-navbar" v-nav="{title: 'MdButton', showBackButton: true}">
    <div class="page-content">
      <md-button class="button button-assertive button-block">Ink Ripple</md-button>
    </div>
  </div>
</template>
<script>
  import {MdButton} from 'vonic'
  export default {
    components: {
      MdButton
    }
  }
</script>
```

And now, forget boring registration in your own components.

```vue
<template>
  <div class="page has-navbar" v-nav="{title: 'MdButton', showBackButton: true}">
    <div class="page-content">
      <md-button class="button button-assertive button-block">Ink Ripple</md-button>
    </div>
  </div>
</template>
```

> $vonicModal sucks, dont use.

### 2017-01-11 v1.1.1
- Fix $vonicModal bug & optimize code.


### 2017-01-18 v1.1.2
- Optimize navbar transition (`show` => `hide`, `hide` => `show`).
- Add **showClose** option for method **$popup.show** to show a close button.
- Rename **Search.clearSearch** to **Search.onCancel** and fix bug.
- Re-define default font-stack.
- Resolve List/Item text line-height issue in Android.
