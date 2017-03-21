<template>
  <div class="header">
    <router-link id="J_GoBack" class="backTo" to="/">
      <img src="/source/img/backTo.png">
    </router-link>
    <span id="list_title">文件管理</span>
  </div>
</template>

<script>
  export default {
    name: 'group',
    data () {
      return {
        msg: 'From Group'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
