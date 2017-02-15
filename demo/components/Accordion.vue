<template>
  <div class="page has-navbar" v-nav="{title: '手风琴组件', showBackButton: true}">
    <div class="page-content padding-top">
      <accordion default-index="0">
        <accordion-item title="农夫" content-height="108">
          <p>
            如果有一天我能够拥有一个大果园，
            我愿放下所有追求做个农夫去种田，
            每一个早晨我耕耘在绿野田园，
            每一个黄昏我守望在乡间的麦田。
            我会把忧虑都融化在夕阳里，
            让孤独的心等待秋收的欢喜。
          </p>
        </accordion-item>
        <accordion-item title="渔夫" content-height="108">
          <p>
            如果有一天我能够拥有一条渔船，
            我愿放下所有执着做个渔夫住在海边，
            每一个早晨我航行在晨曦的海面，
            每一个黄昏我遥望在无际的海云间。
            我会把思绪都消失在波涛里，
            让澎湃的心等待风雨后的平息。
          </p>
        </accordion-item>
      </accordion>
    </div>
  </div>
</template>
<style scoped>
  p {
    padding: 10px 15px 10px 0;
    font-size: 12px;
    line-height: 22px;
    text-align: justify;
  }
</style>
