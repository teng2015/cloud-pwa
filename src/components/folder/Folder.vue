<template>
  <div class="folder">
    <cloud-header :title="title"></cloud-header>
    <list></list>
    <cloud-footer :user="user"></cloud-footer>
  </div>
</template>

<script>
  import Header from '../header/Header.vue'
  import Footer from '../footer/Footer.vue'
  import List from '../list/List.vue'

  export default {
    name: 'folder',
    data () {
      return {
        title: '文件管理',
        user: 'zhangzhp1',
        msg: 'folder'
      }
    },
    components: {
      'cloud-header': Header,
      'list': List,
      'cloud-footer': Footer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "folder.scss";
</style>
