<template>
  <div class="page has-navbar page-scalable" v-nav="{title: '缩放', showBackButton: true}">
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
      font-size: 18px;
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
    }
  }

</style>
