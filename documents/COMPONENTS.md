# Vonic Components
- [字体](#字体)
- [单页应用实例及导航条](#单页应用实例及导航条)
- [Material Design 风格按钮](#Material Design 风格按钮)

## 字体
默认全局字体栈:
```css
body {
  font-family: '-apple-system', "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;
}
```
使用极细苹方字体作为全局字体:
```html
<body font="pingfang">
  <!-- your magic -->
</body>
```

## 单页应用实例及导航条
1. 在入口文件index.html中使用von-app标签，作为Vonic应用的加载点(mount point)
```html
<body>
  <von-app></von-app>
</body>
```
2. js主文件main.js的结构
```js
// 引入依赖
import Vue from 'vue'
import Vonic  from 'vonic'

// 引入页面级组件 - Page Components
import Index from './components/Index'
import About from './components/About'

// 配置路由
const routers = {
  '/': {
    component: Index
  },

  '/about': {
    component: About
  }
};

// 以Vue插件形式载入并运行VonicApp实例
Vue.use(Vonic.app, {
  routers: routers,
  defaultRouterUrl: '/',        // 默认路由
  defaultNavTheme: 'light'      // 默认导航主题 light 或 dark
})
```

## Material Design 风格按钮

使用范例：
```vue
<template>
  <md-button @click="onButtonClick()">{{ bntText }}</md-button>
</template>
<script>
  import {MdButton} from 'vonic'
  
  export default {
    data() {
      return {
        bntText: '按钮文字'
      }
    },
    methods: {
      onButtonClick() {
        // click handler here.
      }
    }
  }
</script>

```
