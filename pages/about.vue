<template>
  <div class="about-container">
    <profile-container/>
    <skill-container/>
    <work-container/>
    <footer-container/>
  </div>
</template>

<script type="text/babel">
  import ProfileContainer from '~/components/about/profile-container'
  import SkillContainer from '~/components/about/skill-container'
  import WorkContainer from '~/components/about/work-container'
  import FooterContainer from '~/components/footer-container'

  export default {
    name: "about",
    components: {
      ProfileContainer,
      SkillContainer,
      WorkContainer,
      FooterContainer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/flex-layout.styl";
  @import "../assets/stylus/mixins.styl";

  .container-title {
    text-align: center;
    font-size 2.5rem;
    position relative;
    font-weight bold;
    padding: 4rem 0 4rem;
    margin-bottom 4rem
    border-bottom: 1px solid #E4EAEC;
    text-transform: capitalize
    &:after {
      display inline-block;
      width 4rem;
      height 4px
      content ' '
      position absolute;
      top 100%;
      left 50%;
      background #333;
      margin-left -2rem;
      margin-top -2px;
    }
    +for_breakpoint(_tablet) {
      padding: 2rem 0 2rem;
      margin-bottom: 2rem
    }
  }
</style>
