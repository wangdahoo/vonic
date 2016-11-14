# Vonic Components
- [字体](#字体)
- [单页应用实例及导航条](#单页应用实例及导航条)
- [Material Design 风格按钮](#Material Design 风格按钮)
- [Input 文本输入框](#Input 文本输入框)
- [Radio 单选框](#Radio 单选框)

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

// 可选：配置vue-router beforeEach/afterEach hook函数
Vonic.app.setConfig('beforeEach', (t) => {
  console.log('Custom beforeEach executed.')
  t.next()
})

// 以Vue插件形式载入并运行VonicApp实例
Vue.use(Vonic.app, {
  routers: routers,
  defaultRouterUrl: '/',        // 默认路由
  defaultNavTheme: 'light'      // 默认导航主题 light 或 dark
})
```

## Material Design 风格按钮

#### 组件：MdButton

#### 范例：
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

## Input 文本输入框
#### 组件：VonInput

#### 属性：
| 属性名 | 描述 | 类型 | 是否必选 | 取值范围 | 默认值 |
|-----|-----|-----|-----|-----|-----|
| type  | 文本框类型 | String | No | text/password/email/tel | text |
| value | 文本框值 | String / Number | Yes | - | 无 |
| placeholder | 默认占位符提示文字 | String | No | - | 无 |
| label | 文本框label文字 | String | No | - | 无 |
| floatingLabel | 是否开启悬浮标签效果 | String | No | true/false | false |

#### 范例：
```vue
<template>
  <von-input type="text" :value.sync="username" placeholder="用户名/手机/邮箱" label="用户名"></von-input>
  <von-input type="password" :value.sync="password" placeholder="密码" label="密码"></von-input>
  
  <von-input type="email" :value.sync="email" placeholder="Email" label="Email" floating-label="true"></von-input>
</template>
<script>
  import {VonInput} from 'vonic'
  
  export default {
    data() {
      return {
        username: '',
        email: '',
        phone: ''
      }
    }
  }
</script>
```

## Radio 单选框
#### 组件：VonRadio

#### 属性：
| 属性名 | 描述 | 类型 | 是否必选 | 取值范围 | 默认值 |
|-----|-----|-----|-----|-----|-----|
| options  | 单选框选项列表 | Array | Yes | - | 无 |
| value | 单选框值 |  Number | Yes | - | 无 |

#### 范例：
```vue
<template>
  <von-radio :options="genderOptions" :value.sync="gender"></von-radio>
</template>
<script>
  import {VonRadio} from 'vonic'
  
  export default {
    data() {
      return {
        gender: 0,
        genderOptions: ["男", "女"]
      }
    }
  }
</script>
```
