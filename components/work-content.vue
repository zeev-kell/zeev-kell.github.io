<template>
  <li class="content-list" :class="{'content-left':content.index & 1}">
    <div class="content-header">
      <div class="content-title">
        <h2>
          <a :href="content.link" target="_blank">
            {{content.title}}
          </a>
        </h2>
        <i class="content-date">
          {{content.date}}
        </i>
        <p class="blank">&nbsp;</p>
      </div>
      <div class="hexagon"></div>
    </div>
    <div class="content-text">
      <div class="content-body">
        <div class="technology">
          <strong>{{content.technology}}</strong>
        </div>
        <div class="description" v-html="content.description"></div>
      </div>
    </div>
  </li>
</template>

<script type="text/babel">
  export default {
    name: "work-content",
    props: ['content']
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/mixins.styl";
  $pd = 20px;
  $bg = #35495e;

  .content-list {
    padding-top 3rem
    position: relative;
  }

  .content-header {
    margin: 0 0 0 50%;
    width 50%;
  }

  .content-title {
    padding 0 0 0 $pd;
    display flex;
    > h2, > .content-date {
      flex auto 0 0;
    }
    > .blank {
      flex 100% 1 1
    }
    > .content-date {
      background darkcyan
      padding 0 8px
      line-height 31px;
      text-align left
      color #F5F5F5;
      margin 0 5px 0 10px;
    }
    a {
      text-decoration none
      color: $bg
    }
  }

  .content-text {
    position relative;
    padding 10px 0 20px;
  }

  .content-body {
    width 50%;
    margin 0 0 0 50%
    padding 0 0 7rem $pd;
    +for_breakpoint(desktop_) {
    }
    > div {
      margin-bottom 3px
    }
  }

  .content-left {
    .content-header {
      margin: 0 50% 0 0;
    }
    .content-title {
      flex-direction: row-reverse
      padding 0 $pd 0 0;
    }
    .content-body {
      margin 0 50% 0 0
      text-align right
      padding-right $pd
    }
  }

  /* point line */
  .hexagon {
    text-align: center;
    font-size: 22px;
    color: #3c3c3c;
    width: 16px;
    height: 10px;
    position: absolute;
    background: $bg;
    z-index: 5;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: -20px;
    &:before {
      content: " ";
      position: absolute;
      left: 0;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 4px solid $bg;
      top: -4px;
    }
    &:after {
      content: " ";
      position: absolute;
      left: 0;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 4px solid $bg;
      bottom: -4px;
    }
  }
</style>
