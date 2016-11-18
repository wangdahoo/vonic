# Components
- [字体](#字体)
- [单页应用实例及导航条](#单页应用实例及导航条)
- [Material Design 风格按钮](#material-design-风格按钮)
- [Input 文本输入框](#input-文本输入框)
- [Radio 单选框](#radio-单选框)
- [Checkbox 复选框](#checkbox-复选框)
- [Cascade 级联](#cascade-级联)
- [Toggle 开关按钮](#toggle-开关按钮)
- [List 列表布局](#list-列表布局)
- [Cells 宫格布局](#cells-宫格布局)
- [Tabs 布局](#tabs-布局)
- [ButtonBar iOS风格Tabs](#buttonbar-ios风格tabs)
- [Swiper 轮播](#swiper-轮播)
- [Scalable 缩放](#scalable-缩放)
- [Popover 弹出式提醒](#popover-弹出式提醒)
- [Popup 弹层](#popup-弹层)

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

## Checkbox 复选框

#### 组件：VonCheckbox

#### 属性：
| 属性名 | 描述 | 类型 | 是否必选 | 取值范围 | 默认值 |
|-----|-----|-----|-----|-----|-----|
| options  | 复选框选项列表 | Array | Yes | - | 无 |
| value | 复选框值列表 |  Array | Yes | - | 无 |

#### 范例：
```vue
<template>
  <von-checkbox :options="topics" :value.sync="chosenTopics"></von-checkbox>
</template>
<script>
  import {VonCheckbox} from 'vonic'

  export default{
    components: {
      VonCheckbox
    },

    data(){
      return {
        chosenTopics: [],
        topics: ["娱乐", "电影", "减肥", "搞笑", "科技"]
      }
    }
  }
</script>
```

## Cascade 级联

#### 组件：Cascade

#### 属性：
| 属性名 | 描述 | 类型 | 是否必选 | 取值范围 | 默认值 |
|-----|-----|-----|-----|-----|-----|
| data  | 级联选项数据集 (二维数组) | Array | Yes | - | 无 |
| value | 最终筛选结果 |  String | Yes | - | 无 |

#### 范例：
```vue
<template>
  <cascade :data="cities" :value.sync="value"></cascade>
</template>
<script>

  import {Cascade} from 'vonic'

  export default {
    components: {
      Cascade
    },

    data() {
      return {
        cities: [
          ['北京市', '市辖区', '东城区'],
          ['北京市', '市辖区', '西城区'],
          ['北京市', '市辖区', '朝阳区'],
          ['北京市', '市辖区', '丰台区'],
          ['北京市', '市辖区', '石景山区'],
          ['北京市', '市辖区', '海淀区'],
          ['北京市', '市辖区', '门头沟区'],
          ['北京市', '市辖区', '房山区'],
          ['北京市', '市辖区', '通州区'],
          ['北京市', '市辖区', '顺义区'],
          ['北京市', '市辖区', '昌平区'],
          ['北京市', '市辖区', '大兴区'],
          ['北京市', '市辖区', '怀柔区'],
          ['北京市', '市辖区', '平谷区'],
          ['北京市', '县', '密云县'],
          ['北京市', '县', '延庆县'],
          ['上海市', '市辖区', '黄浦区'],
          ['上海市', '市辖区', '徐汇区'],
          ['上海市', '市辖区', '长宁区'],
          ['上海市', '市辖区', '静安区'],
          ['上海市', '市辖区', '普陀区'],
          ['上海市', '市辖区', '闸北区'],
          ['上海市', '市辖区', '虹口区'],
          ['上海市', '市辖区', '杨浦区'],
          ['上海市', '市辖区', '闵行区'],
          ['上海市', '市辖区', '宝山区'],
          ['上海市', '市辖区', '嘉定区'],
          ['上海市', '市辖区', '浦东新区'],
          ['上海市', '市辖区', '金山区'],
          ['上海市', '市辖区', '松江区'],
          ['上海市', '市辖区', '青浦区'],
          ['上海市', '市辖区', '奉贤区'],
          ['上海市', '县', '崇明县']
        ],
        value: ''
      }
    }
  }
</script>
```

## Toggle 开关按钮

#### 组件：VonToggle

#### 属性：
| 属性名 | 描述 | 类型 | 是否必选 | 取值范围 | 默认值 |
|-----|-----|-----|-----|-----|-----|
| text  | 开关按钮文字 | String | Yes | - | 无 |
| value | 开关按钮值 |  Boolean | Yes | - | 无 |

#### 范例：
```vue
<template>
  <div>
    <von-toggle :text="toggleText" :value.sync="pushNotification"></von-toggle>
    <div>开关状态: <span>{{ pushNotification ? '开启' : '关闭' }}</span></div>
  </div>
</template>
<script>
  import {VonToggle} from 'vonic'

  export default{
    components: {
      VonToggle
    },

    data(){
      return {
        toggleText: "是否开启推送",
        pushNotification: true
      }
    }
  }
</script>
```

## List 列表布局

#### 组件：List,Item
> ionic css 框架中的 list,item 相关 class 都可以用在对应的组件中

#### 范例：
```vue
<template>
  <div class="page has-navbar" v-nav="{title: '列表布局', showBackButton: true}">
    <div class="page-content" style="padding-top: 54px;">
      <list>
        <item>
          Item - 1
        </item>
        <item>
          Item - 2
        </item>
        <item>
          Item - 3
        </item>
      </list>

      <list>
        <!-- 较窄的 item -->
        <item thin>
          <span style="color: #888">小标题</span>
        </item>
        <item>
          正文文字
          <div class="item-note">
            备注文字
          </div>
        </item>
      </list>

      <list>
        <item thin>
          <span style="color: #888">Framework</span>
        </item>
        <item class="item-avatar">
          <img src="../assets/vonic.svg">
          <div class="title">
            Vonic
          </div>
          <div class="item-note">
            Be cool with vue.js and ionic UI.
          </div>
        </item>
      </list>

      <list>
        <item class="item-icon-right">
          文字
          <div class="item-note">
            备注
          </div>
          <span class="icon ion-ios-arrow-right"></span>
        </item>
      </list>
    </div>
  </div>
</template>
<style>
  .ion-ios-arrow-right {
    color: #ddd;
  }
</style>
<script>
  import {List,Item} from 'vonic'

  export default {
    components: {
      List,
      Item
    }
  }
</script>
```

## Cells 宫格布局

#### 组件：Cells

#### 属性：
| 属性名 | 描述 | 类型 | 是否必选 | 取值范围 | 默认值 |
|-----|-----|-----|-----|-----|-----|
| row  | 宫格布局行数 | String / Number | No | 数字或数字文本 | 3 |
| col | 宫格布局列数 |  String / Number | No | 数字或数字文本 | 3 |
| items | 用于填充宫格布局的项 |  Array | Yes | - | 无 |
| onCellClick | 宫格单元点击事件回调函数(传入 cellIndex) |  Function | No | - | 无 |

#### 范例：
```vue
<template>
  <!-- 3 x 3 -->
  <cells class="cells-33" :items="getItems(9)" :on-cell-click="onCellClick"></cells>
  
  <!-- 4 x 4 -->
  <cells class="cells-44" :items="getItems(16)" :on-cell-click="onCellClick" row="4" col="4"></cells>
</template>
<style>
  .cells.cells-44 > .row > .col {
    padding: 30px;
  }

  .cells-33 > .row > .col {
    padding: 50px;
  }
</style>
<script>
  import {Cells} from 'vonic'

  export default{
    components: {
      Cells
    },

    data(){
      return {
        icons: [
          'ion-android-arrow-up',
          'ion-android-arrow-down',
          'ion-android-arrow-back',
          'ion-android-arrow-forward',

          'ion-ios-arrow-up',
          'ion-ios-arrow-down',
          'ion-ios-arrow-left',
          'ion-ios-arrow-right',

          'ion-ios-arrow-thin-up',
          'ion-ios-arrow-thin-down',
          'ion-ios-arrow-thin-left',
          'ion-ios-arrow-thin-right',

          'ion-android-arrow-up',
          'ion-android-arrow-down',
          'ion-android-arrow-back',
          'ion-android-arrow-forward',
        ]
      }
    },

    methods: {
      onCellClick(cellIndex) {
        console.log('cell ' + cellIndex + ' clicked');
      },

      getIcon(iconName, color) {
        return '<i class="' + iconName + '"></i>'
      },

      getItems(n) {
        let items = []
        for (let i = 0; i < n; i++) {
          items.push(this.getIcon(this.icons[i]))
        }
        return items
      }
    }
  }
</script>
```

## Tabs 布局

#### 组件：Tabs

#### 属性：
| 属性名 | 描述 | 类型 | 是否必选 | 取值范围 | 默认值 |
|-----|-----|-----|-----|-----|-----|
| position  | Tabs 头位置 | String | No | top/bottom | top |
| bgColor  | Tabs 头背景色 | String | No | ionic 主题色类 如：assertive, positive 等 | light |
| tabColor  | Tabs 字体色 highlight色 | String | No | 同上 | positive |
| tabItems  | Tab项列表 | Array (文本数组) | Yes | - | 无 |
| activeIndex  | 被选中Tab的索引 | Number | Yes | - | 无 |
| onTabChanged  | 改选Tab后的回调函数(传入activeIndex) | Function | Yes | - | 无 |

#### 范例：
```vue
<template>
  <tabs :tab-items="tabs" :active-index.sync="activeTabIndex" :on-tab-changed="onTabChanged"></tabs>
</template>
<script>
  import {Tabs} from 'vonic'

  export default {
    components: {
      Tabs
    },

    data(){
      return {
        tabs: [
          "tab 1",
          "tab 2",
          "tab 3"
        ],

        activeTabIndex: 0
      }
    },

    methods: {
      onTabChanged(activeIndex) {
        console.log('tab changed, current tab index is:', activeIndex);
      }
    }
  }
</script>
```

## ButtonBar iOS风格Tabs

#### 组件：ButtonBar

#### 属性：
| 属性名 | 描述 | 类型 | 是否必选 | 取值范围 | 默认值 |
|-----|-----|-----|-----|-----|-----|
| theme  | ionic 主题色类 如：assertive, positive 等 | String | No | - | positive |
| tabItems  | tab按钮文字项列表 | Array (文本数组) | Yes | - | 无 |
| activeIndex  | 被选中tab按钮的索引 | Number | Yes | - | 无 |

#### 范例：
```vue
<template>
  <button-bar theme="assertive" :tab-items="tabs" :active-index="activeIndex"></button-bar>
</template>>
<script>
  import {ButtonBar} from 'vonic'

  export default{
    components: {
      ButtonBar
    },

    data(){
      return {
        tabs: [
          "tab 1",
          "tab 2",
          "tab 3"
        ],

        activeIndex: 0
      }
    }
  }
</script>
```

## Swiper 轮播

#### 组件：Swiper, SwiperItem

#### Swiper 属性：
| 属性名 | 描述 | 类型 | 是否必选 | 取值范围 | 默认值 |
|-----|-----|-----|-----|-----|-----|
| direction  | 轮播方向 | Enum | No | - | vertical |
| width  | 轮播容器宽度 | String | Yes | - | 100% |
| height  | 轮播容器高度 | String | Yes | - | 100% |
| pagerColor  | 分页颜色 | String | No | - | #333 |

> width 和 height 直接写数字文本不带%时，自动取px为单位。

#### 范例：
```vue
<template>
  <div class="page has-navbar" v-nav="{title: '轮播范例'}">
    <div class="page-content">
      <swiper direction="horizontal" width="100%" height="150">
        <swiper-item>
          <h1>Item 1</h1>
        </swiper-item>
    
        <swiper-item>
          <h1>Item 2</h1>
        </swiper-item>
    
        <swiper-item>
          <h1>Item 3</h1>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>
<style lang='scss' scoped>
  .swiper-item {
    padding-top: 50px;

    h1 {
      color: #fff;
      font-size: 32px;
      line-height: 50px;
      text-align: center;
      font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
    }

    &:nth-of-type(1) {
      background-color: #0a9dc7;
    }

    &:nth-of-type(2) {
      background-color: #44cc00;
    }

    &:nth-of-type(3) {
      background-color: #ffc900;
    }
  }
</style>
<script>
  import {Swiper, SwiperItem} from 'vonic'
  
  export default{
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>
```

## Scalable 缩放

#### 组件：Scalable

#### 属性：
| 属性名 | 描述 | 类型 | 是否必选 | 取值范围 | 默认值 |
|-----|-----|-----|-----|-----|-----|
| scale  | 缩放比例 | Number | No | - | 2 |
| width  | 缩放容器宽度 | String | Yes | - | 100% |
| height  | 缩放容器高度 | String | Yes | - | 100% |

> width 和 height 直接写数字文本不带%时，自动取px为单位。

#### 范例：
```vue
<template>
  <div class="page has-navbar page-scalable" v-nav="{title: '缩放'}">
    <div class="page-content">
      <scalable width="100%" height="100" style="background-color: #FFF;">
        <p>
          Font Size = 16px (相当于8px)
        </p>
      </scalable>

      <div class="item item-divider">
        带特小字体的标签：
      </div>

      <scalable width="100%" height="30">
        <div class="tags">
          <div class="tag">免费</div>
          <div class="tag tag-assertive">
            剩余<span class="num">1000</span>份
          </div>
        </div>
      </scalable>
    </div>
  </div>
</template>
<style lang="scss">
  .page-scalable {
    p {
      text-align: center;
      font-size: 16px;
      margin-top: 20px;
    }
  }

  .tags {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 12px;

    .tag {
      font-size: 22px;
      line-height: 32px;
      border-radius: 4px;
      padding: 2px 8px;
      border: 1px solid #B5B5B5;
      color: #B5B5B5;
      width: auto;
      float: left;
      margin-right: 10px;

      &.tag-assertive {
        color: #EA5A49;
        border: 1px solid #EA5A49;
      }

      .num {
        // font-family: "Helvetica Neue";
      }
    }
  }

</style>
<script>
  import { Scalable } from 'vonic'

  export default {
    components: {
      Scalable
    }
  }
</script>
```

## Popover 弹出式提醒

#### 组件：Popover

#### 属性：
| 属性名 | 描述 | 类型 | 是否必选 | 取值范围 | 默认值 |
|-----|-----|-----|-----|-----|-----|
| direction | 展示的方向(位置) | String | No | - | top |
| target | 触发的popup的dom element (css selector) | String | Yes | - | 无 |
| duration | popover限时时间 | String | No | 数字文本 | 3000 |

#### 范例：
```vue
<template>
  <div>
    <button class="button button-positive button-block" id="btn-top">上</button>
    
    <popover direction="top" target="#btn-top">
      提示文字
    </popover>
  </div>
</template>
<script>
  import {Popover} from 'vonic'

  export default{
    components:{
      Popover
    }
  }
</script>
```

## Popup 弹层

#### 组件：Alert, AlertIOS, Confirm, ConfirmIOS, Popup
> Popup类组件均以全局 service provider 形式提供服务

#### Alert/AlertIOS/Confirm/ConfirmIOS 属性：
| 属性名 | 描述 | 类型 | 是否必选 | 取值范围 | 默认值 |
|-----|-----|-----|-----|-----|-----|
| effect | 弹层动画效果 | Enum | default/scale/slide | - | default |
| title | 弹层标题文本 | String | No | - | 无 |
| content | 弹层内容文本 | String | No | - | 无 |
| okText | 确认按钮文本 | String | No | - | 确定 |
| cancelText | 取消按钮文本 | String | No | - | 确定 |
| okTheme | 确认按钮主题 支持 ionic 主题色 class | String | No | - | positive |
| cancelTheme | 取消按钮主题 支持 ionic 主题色 class | String | No | - | positive |

> 仅Confirm/ConfirmIOS组件支持cancelText, cancelTheme属性

#### Alert/AlertIOS/Confirm/ConfirmIOS 范例：
- 调用服务类组件 Alert/AlertIOS/Confirm/ConfirmIOS
```js
  // Alert
  $alert.show({
    content: 'Hello!',
    okTheme: 'positive',
    effect: 'slide'
  }).then(() => {
    console.log('alert hide.')
  })
  
  // Confirm
  $confirm.show({
    content: '在"微信"中打开链接吗?',
    okText: '打开'
  }).then((res) => {
    console.log('confirm result: ', res)
  })
```
> $alert_ios和$confirm_ios服务分别对应AlertIOS、ConfirmIOS组件，调用方式同上。

#### Popup 属性：
| 属性名 | 描述 | 类型 | 是否必选 | 取值范围 | 默认值 |
|-----|-----|-----|-----|-----|-----|
| effect | 弹层动画效果 | Enum | default/scale/slide | - | default |
| title | 弹层标题文本 | String | No | - | 无 |
| buttons | 按钮列表，用来设置按钮文字和按钮主题 | Array | Yes | - | 无 |
| cssClass | 弹层自定义样式类 | String | No | - | 无 |

#### Popup 范例：

```vue
<template>
  <div>
    <div class="item item-icon-right" @click="showCustomPopup()">
      Custom Popup
      <i class="icon ion-ios-arrow-right"></i>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      showCustomPopup() {
        let options = {
          effect: 'scale',
          title: '',
          buttons: [
            {text: '确定'},
            {text: '取消'},
          ]
        }

        let popup = $popup.fromTemplate('<p style="margin-bottom: 0; text-align: center;">自定义内容</p>', options)

        popup.show().then((buttonIndex) => {
          console.log(buttonIndex)
        })
      }
    }
  }
</script>
```
