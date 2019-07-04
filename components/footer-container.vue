<template>
  <footer class="footer-container">
    <div class="flex-row container">
      <div class="flex-item-6">1</div>
      <div class="flex-item-6">1</div>
    </div>
  </footer>
</template>

<script type="text/babel">
  export default {
    name: "footer-container"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/var.styl";
  .footer-container {
    padding 2rem;
    background $bg
  }
</style>
