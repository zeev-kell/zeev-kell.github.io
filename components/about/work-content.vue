<template>
  <li class="content-list" :class="{'content-left':item.index & 1}">
    <div class="content-header">
      <div class="content-title">
        <h2>
          <a :href="item.link" target="_blank">
            <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="20" height="20"
                 aria-hidden="true"
                 v-if="item.link">
              <path fill-rule="evenodd"
                    stroke="#35495e"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
            </svg>
            {{item.title}}
          </a>
        </h2>
        <p class="blank">&nbsp;</p>
      </div>
      <div class="hexagon hidden-sm"></div>
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
    &:first-child {
      border-top: none;
      margin-top: 10px;
    }
    +for_breakpoint(_tablet) {
      border-top 2px dashed rgba(200, 200, 200, 0.3)
      padding-top: 20px
      margin-top: 25px;
    }
  }

  .content-header {
    +for_breakpoint(tablet_) {
      margin: 0 0 0 50%;
      width 50%;
    }
  }

  .content-title {
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
      color: #777777
      &[href]:hover {
        color: $bg
      }
    }
    +for_breakpoint(tablet_) {
      padding 0 0 0 $pd;
    }
  }

  .content-text {
    position relative;
    padding 1rem 0 0
  }

  .content-body {
    > div {
      margin-bottom 1rem
    }
    +for_breakpoint(tablet_) {
      width 50%;
      margin 0 0 0 50%
      padding 0 0 3rem $pd;
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
    +for_breakpoint(tablet_) {
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
