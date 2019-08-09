<template>
  <a title="简书" href="https://www.jianshu.com/u/34d5ad8a0b2b" target="_blank" class="misc-btn social-icon">
    <span>简</span>
  </a>
</template>

<script type="text/babel">
  export default {
    name: "icon-misc"
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .misc-btn {
    position relative;
    > span {
      z-index 1
      color #ffffff;
      position relative
    }
    &:after {
      display block
      position absolute
      content ' '
      top: 0;
      left: 0;
      width 100%;
      height 100%;
      background #c6cbd1
      border-radius 50%;
      z-index 0
    }
    &:hover:after {
      background #959da5
    }
  }
</style>
