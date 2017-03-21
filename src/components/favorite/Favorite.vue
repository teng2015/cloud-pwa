<template>
  <div class="folder">
    <cloud-header :title="title"></cloud-header>
    <h3>{{ msg }}</h3>
    <h6>测试</h6>
  </div>
</template>

<script>
  import Header from '../header/Header.vue'

  export default {
    name: 'favorite',
    data () {
      return {
        title: '心标文件',
        msg: 'favorite'
      }
    },
    components: {
      'cloud-header': Header
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "favorite.scss";
</style>
