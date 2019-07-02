<template>
  <div class="full-container flex-column">
    <div class="image-container">
      <div class="image"></div>
    </div>
    <div class="relative">
      <h1 class="designation"> zeev-kell </h1>
      <div class="orientation">
        <div class="flex-per-50 text-right">
          Front-End Developer
        </div>
        <div style="margin: 0 0.6rem">
          /
        </div>
        <div class="flex-per-50 text-left">
          Node.js Software Engineer
        </div>
      </div>
    </div>
    <div class="flex-row is-justify-center icons-wrap">
      <github/>
      <misc/>
    </div>
  </div>
</template>

<script type="text/babel">
  import Github from '~/components/github'
  import Misc from '~/components/misc'

  export default {
    Github,
    Misc,
    name: "profile-container"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $bg = #35495e;

  .image {
    background $bg
    border-radius 50%;
    width 25vh;
    height 25vh;
    position relative
  }

  .designation {
    font-size 6rem
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(20deg);
    margin 4rem 0 4rem 0
    text-align center
    color #7f828b
    &::before, &::after {
      content ' '
      position: relative
      width 2rem;
      height 0.2rem;
      display inline-block
      vertical-align middle
      background #7f828b
    }
  }

  .orientation {
    margin 2rem 0
    display flex
    flex-wrap nowrap
    color #7f828b
  }

  .flex-per-50 {
    flex 1 1 50%
  }

  .icons-wrap a {
    margin: 0 6px;
  }

</style>
