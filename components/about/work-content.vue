<template>
  <li class="content-list" :class="{'content-left':item.index & 1}">
    <div class="content-header">
      <div class="content-title">
        <h2>
          <a :href="item.link" target="_blank">
            {{item.title}}
          </a>
        </h2>
        <p class="blank">&nbsp;</p>
      </div>
      <div class="hexagon"></div>
    </div>
    <div class="content-text">
      <div class="content-body">
        <div class="technology">
          <strong>{{item.technology}}</strong>
        </div>
        <div class="description" v-html="item.description"></div>
        <div style="clear: both"></div>
      </div>
    </div>
  </li>
</template>

<script type="text/babel">
  export default {
    name: "work-content",
    props: ['item']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixins.styl";
  @import "../../assets/stylus/var.styl";
  $pd = 20px;

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
    padding 1rem 0 2rem
  }

  .content-body {
    width 50%;
    margin 0 0 0 50%
    padding 0 0 5rem $pd;
    > div {
      margin-bottom 1rem
    }
    +for_breakpoint(desktop_) {
    }
  }

  .description {
    color #666;
    font-size 14px;
    max-width 350px;
  }

  .description {
    strong {
      color #008b8b
      display inline-block
    }
    i {
      margin-right 0.4em;
    }
    code {
      color #d20090
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
      padding-right $pd
    }
    .technology {
      text-align right
    }
    .description {
      float right
    }
  }

  .technology {
    color #7f828b
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
