<template>
  <div id="app">
    <div class="index-wrap">
      <!-- 首页头部 -->
      <header class="account-info">
        <a id="J_HomePage" v-on:click.prevent>
          <div class="account-avatar">
            <img id="J_UserIcon" class="avatar" src="./images/account-user.png" alt="用户头像">
          </div>
          <div id="J_UserAccount" class="account-name">天翼用户</div>
        </a>
        <div class="account-volume">
          <div class="count">
            <span id="J_UsedSize">0G</span>/<span id="J_TotalSize">15G</span>
          </div>
          <div class="volume">
            <div id="J_UsedPercent" class="volume-used"></div>
            <div id="J_Used189Percent" class="volume-used volume-189-used"></div>
          </div>
        </div>
        <a id="J_Logout" class="account-logout" v-on:click.prevent="alert('您点击了退出')">退出</a>
      </header>

      <!-- 链接区 -->
      <ul class="router-box">
        <li class="router">
          <router-link class="link" to="/folder">文件管理</router-link>
        </li>
        <li class="router">
          <router-link class="link" to="/favorite">心标文件</router-link>
        </li>
        <li class="router">
          <router-link class="link" to="/group">群空间</router-link>
        </li>
        <li class="router">
          <router-link class="link" to="/hot">热门资源</router-link>
        </li>
        <li class="router">
          <router-link class="link" to="/square">云游广场</router-link>
        </li>
        <li class="router">
          <router-link class="link" to="/user">个人中心</router-link>
        </li>
      </ul>
    </div>

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
