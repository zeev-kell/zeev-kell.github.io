<template>
  <div class="container">
    <div class="full-container">
      <div class="background"></div>
      <div class="image-container">
        <div class="image">image</div>
        <div class="item-list">
          <div class="item">item</div>
        </div>
      </div>
    </div>
    <div class="work-container">
      <header class="work-title">work-container</header>
      <div class="work-list" v-for="work in workList">
        <div class="time text-center">
          <h2>{{work.time}}</h2>
          <p v-if="work.subText" class="sub-text">{{work.subText}}</p>
        </div>
        <ul class="content-container">
          <span class="pole"></span>
          <li class="content-list" v-for="(content, index) in work.contents"
              :class="{'content-left':index & 1}">
            <div class="content-header">
              <div class="content-title">
                <h2>{{content.title}}</h2>
                <i class="content-date">{{content.date}}</i>
                <p class="blank">&nbsp;</p>
              </div>
              <div class="hexagon"></div>
            </div>
            <div class="content-text">
              <div class="description">
                {{content.description}}<br>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {random} from '../assets/utils';

  export default {
    name: "about",
    data() {
      return {
        workList: random({
          time: '2018.5 - 2019.5',
          subText: 'Python开发工程师',
          contents: random({
            title: 'Lorem ipsum Anim',
            date: '2018.5.23',
            description: 'I\'m speaking with myself, number one, because I have a very good brain and I\'ve said a lot of things. I write the best placeholder text, and I\'m the biggest developer on the web by far... While that\'s mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.'
          }, 3)
        }, 2)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  $pd = 20px;
  $bg = #35495e;
  .background {
    position absolute;
    z-index 0;
    background #EEE
    width 100%
    height 100%;
  }

  .image-container {
    position relative
    z-index 1
  }

  .image {
    background $bg
    border-radius 50%;
    width 38.2vh;
    height 38.2vh;
  }

  .work-title {
    text-align: center;
    font-size 2rem;
    position relative;
    font-weight bold;
    margin-bottom: 60px;
    padding: 3em 0 2em;
    border-bottom: 1px solid #E4EAEC;
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
  }

  .sub-text {
    color: #7f828b
    font-size 80%;
    margin 5px 0 0 0;
  }

  .work-list {
    margin-bottom 2em;
  }

  /* content */
  .content-container {
    padding 0 $pd * 4;
    margin-top 2em
    list-style none;
    position: relative;
    &:before {
      position: absolute;
      left: 50%;
      top: 0;
      content: ' ';
      display: block;
      width: 2px;
      height: 100%;
      margin-left: -1px;
      background: rgb(213, 213, 213);
      // background: linear-gradient(to bottom, rgba(213, 213, 213, 0) 0%, rgb(213, 213, 213) 8%, rgb(213, 213, 213) 92%, rgba(213, 213, 213, 0) 100%);
      z-index: 5;
    }
    &:after {
      display: block;
      position: absolute;
      background: transparent;
      content: ' ';
      width: 16px;
      height: 100%;
      border-top: 2px solid rgb(213, 213, 213);
      border-bottom: 2px solid rgb(213, 213, 213);
      left: 50%;
      margin-left -8px;
      top 0;
    }
  }

  .content-list {
    padding-top 2em
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
      margin 0 5px;
    }
  }

  .content-text {
    position relative;
    padding 10px 0 20px;
  }

  .description {
    width 50%;
    margin 0 0 0 50%
    padding 0 0 80px $pd;
  }

  .content-left {
    .content-header {
      margin: 0 50% 0 0;
    }
    .content-title {
      flex-direction: row-reverse
      padding 0 $pd 0 0;
    }
    .description {
      margin 0 50% 0 0
      padding 0 $pd 80px 0;
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
