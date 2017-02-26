<template>
  <div class="page-content padding-top">

    <item class="item-icon-right" @click.native="showAlert()">
      Alert <span class="item-note">提示框</span>
      <i class="icon ion-ios-arrow-right"></i>
    </item>
    <item class="item-icon-right" @click.native="showConfirm()">
      Confirm <span class="item-note">确认框</span>
      <i class="icon ion-ios-arrow-right"></i>
    </item>
    <item class="item-icon-right" @click.native="showAlertIOS()">
      iOS Alert <span class="item-note">iOS 风格提示框</span>
      <i class="icon ion-ios-arrow-right"></i>
    </item>
    <item class="item-icon-right" @click.native="showConfirmIOS()">
      iOS Confirm <span class="item-note">iOS 风格确认框</span>
      <i class="icon ion-ios-arrow-right"></i>
    </item>
    <item class="item-icon-right " @click.native="multiMode()">
      Multi Mode <span class="item-note">多个同时出现</span>
      <i class="icon ion-ios-arrow-right"></i>
    </item>

    <item class="item-icon-right" @click.native="showAlert('scale')">
      Scale Effect
      <i class="icon ion-ios-arrow-right"></i>
    </item>
    <item class="item-icon-right" @click.native="showAlert('slide')">
      Slide Effect
      <i class="icon ion-ios-arrow-right"></i>
    </item>

    <div style="height: 10px;"></div>

    <item class="item-icon-right" @click.native="showCustomPopup()">
      Custom Popup
      <i class="icon ion-ios-arrow-right"></i>
    </item>

    <div style="height: 10px;"></div>

    <cascade :fields="fields" :data="cities" :value="value" :on-change="onChange"></cascade>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        fields: [
          "省", "市", "区"
        ],

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
          ['上海市', '县', '崇明县'],
          ['浙江省', '杭州市', '上城区'],
          ['浙江省', '杭州市', '下城区'],
          ['浙江省', '杭州市', '江干区'],
          ['浙江省', '杭州市', '拱墅区'],
          ['浙江省', '杭州市', '西湖区'],
          ['浙江省', '杭州市', '滨江区'],
          ['浙江省', '杭州市', '萧山区'],
          ['浙江省', '杭州市', '余杭区'],
          ['浙江省', '杭州市', '富阳区'],
          ['浙江省', '杭州市', '桐庐县'],
          ['浙江省', '杭州市', '淳安县'],
          ['浙江省', '杭州市', '建德市'],
          ['浙江省', '杭州市', '临安市'],
          ['浙江省', '宁波市', '海曙区'],
          ['浙江省', '宁波市', '江东区'],
          ['浙江省', '宁波市', '江北区'],
          ['浙江省', '宁波市', '北仑区'],
          ['浙江省', '宁波市', '镇海区'],
          ['浙江省', '宁波市', '鄞州区'],
          ['浙江省', '宁波市', '象山县'],
          ['浙江省', '宁波市', '宁海县'],
          ['浙江省', '宁波市', '余姚市'],
          ['浙江省', '宁波市', '慈溪市'],
          ['浙江省', '宁波市', '奉化市'],
          ['浙江省', '温州市', '鹿城区'],
          ['浙江省', '温州市', '龙湾区'],
          ['浙江省', '温州市', '瓯海区'],
          ['浙江省', '温州市', '洞头区'],
          ['浙江省', '温州市', '永嘉县'],
          ['浙江省', '温州市', '平阳县'],
          ['浙江省', '温州市', '苍南县'],
          ['浙江省', '温州市', '文成县'],
          ['浙江省', '温州市', '泰顺县'],
          ['浙江省', '温州市', '瑞安市'],
          ['浙江省', '温州市', '乐清市'],
          ['浙江省', '嘉兴市', '南湖区'],
          ['浙江省', '嘉兴市', '秀洲区'],
          ['浙江省', '嘉兴市', '嘉善县'],
          ['浙江省', '嘉兴市', '海盐县'],
          ['浙江省', '嘉兴市', '海宁市'],
          ['浙江省', '嘉兴市', '平湖市'],
          ['浙江省', '嘉兴市', '桐乡市'],
          ['浙江省', '湖州市', '市辖区'],
          ['浙江省', '湖州市', '吴兴区'],
          ['浙江省', '湖州市', '南浔区'],
          ['浙江省', '湖州市', '德清县'],
          ['浙江省', '湖州市', '长兴县'],
          ['浙江省', '湖州市', '安吉县'],
          ['浙江省', '绍兴市', '越城区'],
          ['浙江省', '绍兴市', '柯桥区'],
          ['浙江省', '绍兴市', '上虞区'],
          ['浙江省', '绍兴市', '新昌县'],
          ['浙江省', '绍兴市', '诸暨市'],
          ['浙江省', '绍兴市', '嵊州市'],
          ['浙江省', '金华市', '婺城区'],
          ['浙江省', '金华市', '金东区'],
          ['浙江省', '金华市', '武义县'],
          ['浙江省', '金华市', '浦江县'],
          ['浙江省', '金华市', '磐安县'],
          ['浙江省', '金华市', '兰溪市'],
          ['浙江省', '金华市', '义乌市'],
          ['浙江省', '金华市', '东阳市'],
          ['浙江省', '金华市', '永康市'],
          ['浙江省', '衢州市', '柯城区'],
          ['浙江省', '衢州市', '衢江区'],
          ['浙江省', '衢州市', '常山县'],
          ['浙江省', '衢州市', '开化县'],
          ['浙江省', '衢州市', '龙游县'],
          ['浙江省', '衢州市', '江山市'],
          ['浙江省', '舟山市', '定海区'],
          ['浙江省', '舟山市', '普陀区'],
          ['浙江省', '舟山市', '岱山县'],
          ['浙江省', '舟山市', '嵊泗县'],
          ['浙江省', '台州市', '椒江区'],
          ['浙江省', '台州市', '黄岩区'],
          ['浙江省', '台州市', '路桥区'],
          ['浙江省', '台州市', '玉环县'],
          ['浙江省', '台州市', '三门县'],
          ['浙江省', '台州市', '天台县'],
          ['浙江省', '台州市', '仙居县'],
          ['浙江省', '台州市', '温岭市'],
          ['浙江省', '台州市', '临海市'],
          ['浙江省', '丽水市', '莲都区'],
          ['浙江省', '丽水市', '青田县'],
          ['浙江省', '丽水市', '缙云县'],
          ['浙江省', '丽水市', '遂昌县'],
          ['浙江省', '丽水市', '松阳县'],
          ['浙江省', '丽水市', '云和县'],
          ['浙江省', '丽水市', '庆元县'],
          ['浙江省', '丽水市', '景宁畲族自治县'],
          ['浙江省', '丽水市', '龙泉市']
        ],
        value: []
      }
    },

    methods: {
      showAlert(effect) {
        $dialog.alert({
          content: 'Hello!',
          okTheme: 'positive',
          effect: effect || 'default'
        }).then(() => {
          console.log('alert hide.')
        })
      },

      showConfirm() {
        $dialog.confirm({
          content: '在"微信"中打开链接吗?',
          okText: '打开'
        }).then((res) => {
          console.log('confirm result: ', res)
        })
      },

      showAlertIOS() {
        $dialog.alert({
          theme: 'ios',
          title: '无法打开网页',
          content: 'Safari打不开网页，因为网址无效。',
          okText: '好'
        }).then(() => {
          console.log('alert hide.')
        })
      },

      showConfirmIOS() {
        $dialog.confirm({
          theme: 'ios',
          title: '在"微信"中打开链接吗?',
          cancelText: '取消',
          okText: '打开'
        }).then((res) => {
          console.log('confirm result: ', res)
        })
      },

      multiMode() {
        let options = {
          theme: 'ios',
          title: '测试',
          okText: '好'
        }

        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            options.content = `第${i+1}条消息`
            $dialog.alert(options)
          }, 500 * i)
        }
      },

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
      },

      // for cascade
      onChange(value) {
        this.value = value
        console.log(this.value)
      }
    }
  }
</script>
