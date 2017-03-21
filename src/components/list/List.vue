<template>
  <div class="file-container">
    <!-- 面包屑导航 -->
    <div class="breadcrumb">
      <ul class="file-path">
        <li title="全部文件">
          <a href="javascript:">全部文件</a>&nbsp;&gt;&nbsp;
        </li>
        <li title="测试专用">
          <a href="javascript:">测试专用</a>&nbsp;&gt;&nbsp;
        </li>
        <li title="嵌套文件夹"><a href="javascript:">嵌套文件夹</a>&nbsp;&gt;&nbsp;
        </li>
        <li> ... &gt;</li>
        <li title="03"><a href="javascript:">03</a>&nbsp;&gt;&nbsp;
        </li>
        <li title="04"><a href="javascript:">04</a>&nbsp;&gt;&nbsp;
        </li>
        <li title="05">05</li>
      </ul>
    </div>

    <ul class="file-lists">
      <li class="item">
        <div class="col col-name">
          <div class="column">
            <div class="column-name column-folder">
              <span class="file-icon icon-folder"></span>
              <span class="text">同步盘</span>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <!--<div class="col col-name">
      <div class="column">
        <div class="column-name column-file">
          <a href="javascript:">
            <span class="icon icon-file-type icon-pdf"></span>
          </a>
          <div class="column-file-info">
            <div class="text">欢迎使用天翼云盘.pdf</div>
            <div class="size">大小：2.24M</div>
            <div class="modified-time">21小时前</div>
          </div>
          <div class="file-info" style="display: none;">
            <div class="btn">
              <a href="javascript:" class="preview">预览</a>
              <a href="javascript:" class="share">分享</a>
            </div>
          </div>
          <div class="arrow"></div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
  export default {
    props: ['list'],
    data () {
      return {
        msg: 'msg'
      }
    }
  }

</script>

<!-- scoped -->
<style lang="scss">
  /* 设备列表 */
  @import "list.scss";

</style>
