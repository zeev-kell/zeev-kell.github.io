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
        <div style="margin: 0 0.6rem" class="hidden-sm">
          /
        </div>
        <div class="flex-per-50 text-left hidden-sm">
          Node.js Software Engineer
        </div>
      </div>
    </div>
    <div class="flex-row is-justify-center icons-wrap">
      <icon-github/>
      <icon-misc/>
    </div>
  </div>
</template>

<script type="text/babel">
  import IconGithub from '~/components/icon-github'
  import IconMisc from '~/components/icon-misc'

  export default {
    name: "profile-container",
    components: {
      IconGithub,
      IconMisc,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixins.styl";
  @import "../../assets/stylus/var.styl";

  .image {
    background url("~assets/image/profile-img.png") no-repeat
    background-size: contain;
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
    +for_breakpoint(_tablet) {
      font-size 3rem
      margin 2rem 0 2rem 0
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
    +for_breakpoint(_tablet) {
      text-align center
    }
  }

  .icons-wrap a {
    margin: 0 6px;
  }

</style>
