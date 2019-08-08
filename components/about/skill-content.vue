<template>
  <li class="flex-item-3 flex-item-sm-12 text-center skill-content">
    <h3 class="skill-title">{{item.title}}</h3>
    <p class="content" v-html="item.content"></p>
  </li>
</template>

<script type="text/babel">
  export default {
    name: "skill-content",
    props: ['item']
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixins.styl";
  .skill-title {
    margin 1.5rem 0
    letter-spacing: 0.2rem;
    font-weight bold
  }

  .content /deep/ {
    code {
      color orange
      margin 0 0.2rem
      display inline-block
      font-family "Consolas,monospace"
    }
    span {
      color orange
      display inline-block
    }
  }

  .skill-content {
    padding 2rem;
    +for_breakpoint(_tablet) {
      padding 1rem 2rem;
    }
  }
</style>
