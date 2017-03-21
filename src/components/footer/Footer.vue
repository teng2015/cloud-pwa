<template>
  <div class="footer">
    <div class="login-form">
      Hi,
      <span id="J_UserAccount" v-text="user">17302045171@189.cn</span>
      <span class="logout-link">
        <a id="J_LogoutBtn" @click.prevent="confirm">退出</a>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    props: ['user'],
    methods: {
        confirm: () => {
            alert('确认退出？')
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "footer.scss";
</style>
