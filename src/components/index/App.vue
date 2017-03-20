<template>
  <div id="app">
    <header class="account-info">
      <a id="J_HomePage" v-on:click.prevent>
        <div class="account-avatar">
          <img id="J_UserIcon" class="avatar" src="./images/account-profile.png" alt="用户头像">
        </div>
        <div id="J_UserAccount" class="account-name">天翼用户</div>
      </a>
      <div class="account-volume">
        <div class="count">
          <span id="J_UsedSize">0G</span>/<span id="J_TotalSize">15G</span>
        </div>
        <div class="volume">
          <div id="J_UsedPercent" class="volume-used"
               style="float:left; border-radius:3px 0 0 3px; background-color:#feb20a;">
          </div>
          <div id="J_Used189Percent" class="volume-used"
               style="float:left; border-radius:0 3px 3px 0; background-color:#8ccb00;">
          </div>
        </div>
      </div>
      <a id="J_Logout" class="account_profile" v-show="false" v-on:click.prevent="alert('点击了退出')">退出</a>
    </header>

    <div class="router-box">
      <router-link class="router" to="/">首页</router-link>
      <router-link class="router" to="/folder">文件管理</router-link>
      <router-link class="router" to="/favorite">心标文件</router-link>
      <router-link class="router" to="/group">群空间</router-link>
      <router-link class="router" to="/hot">热门资源</router-link>
      <router-link class="router" to="/square">云游广场</router-link>
      <router-link class="router" to="/user">个人中心</router-link>
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
