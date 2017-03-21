<template>
  <div id="app">
    <!-- 首页 -->
    <div class="index-wrap">
      <!-- 头部 -->
      <div class="account-info">
        <router-link class="account-avatar" to="/user">
          <img id="J_UserIcon" class="avatar" src="./images/account-user.png" alt="用户头像">
        </router-link>
        <div class="account-name">天翼用户</div>

        <div class="account-volume">
          <div class="count">
            <span id="J_UsedSize">0G</span>/<span id="J_TotalSize">15G</span>
          </div>
          <div class="volume">
            <div id="J_UsedPercent" class="volume-used"></div>
            <div id="J_Used189Percent" class="volume-used volume-189-used"></div>
          </div>
        </div>
        <a class="account-logout" v-on:click.prevent="alert('您点击了退出')">退出</a>
      </div>

      <!-- 链接区 -->
      <ul class="router-box">
        <li class="router folder">
          <router-link class="link" to="/folder">文件管理</router-link>
        </li>
        <li class="router favorite">
          <router-link class="link" to="/favorite">心标文件</router-link>
        </li>
        <li class="router group">
          <router-link class="link" to="/group">群空间</router-link>
        </li>
        <li class="router hot">
          <router-link class="link" to="/hot">热门资源</router-link>
        </li>
        <li class="router square">
          <router-link class="link" to="/square">云游广场</router-link>
        </li>
      </ul>
    </div>

    <!-- 其他页 -->
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      alert: (data) => alert(data)
    }
  }
</script>

<!-- 加入 rel="stylesheet/less" type="text/css" 解决不支持 scss 语法问题 -->
<style lang="scss">
  @import "app.scss";

</style>
