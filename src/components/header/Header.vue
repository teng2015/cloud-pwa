<template>
  <div class="header">
    <router-link class="go-index" to="/">
      <img src="./images/backTo.png">
    </router-link>
    <span id="list_title" v-text="title"></span>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: ['title']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "header.scss";
</style>
