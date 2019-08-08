<template>
  <footer class="footer-container">
    <div class="flex-row container">
      <div class="flex-item-12 text-center">
        Copyright © 2019 zeev-kell.&nbsp;&nbsp;
        Powered by <a href="https://nuxtjs.org/guide" target="_blank">Nuxt.js</a>.
        <span class="hidden-sm">&nbsp;&nbsp;{{updatedAt}}</span>
      </div>
    </div>
  </footer>
</template>

<script type="text/babel">
  export default {
    name: "footer-container",
    data() {
      return {
        updatedAt: undefined
      }
    },
    mounted() {
      let date = new Date(window.updatedAt);
      this.updatedAt = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/var.styl";
  .footer-container {
    padding 2rem;
    background $bg
    color #ddd
    a {
      color #ddd
      &:visited {
        text-decoration: none;
        color inherit
      }
    }
  }
</style>
