<template>
  <li class="flex-item-3 text-center">
    <h3 class="skill-title">{{item.title}}</h3>
    <p class="skill-content" v-html="item.content"></p>
  </li>
</template>

<script type="text/babel">
  export default {
    name: "skill-content",
    props: ['item']
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .skill-title {
    margin 1.5rem 0
    letter-spacing: 0.2rem;
    font-weight bold
  }

  .skill-content /deep/ {
    code {
      color orange
      margin 0 0.1rem
      display inline-block
    }
    span {
      color orange
      display inline-block
    }
  }
</style>
