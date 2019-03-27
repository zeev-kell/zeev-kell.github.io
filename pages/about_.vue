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
      <div class="work-list">
        <div class="work" v-for="work in workList">
          <div class="time text-center">
            {{work.time}}
            <p v-if="work.subText" class="sub-text">{{work.subText}}</p>
          </div>
          <ul class="content-list">
            <li class="content" v-for="(content, index) in work.contents"
                :class="{'content-left':index & 1}">
              <div class="content-header wp-50">
                <div class="content-title">
                  <h2>{{content.title}}</h2>
                  <i>{{content.date}}</i>
                  <p class="blank">&nbsp;</p>
                </div>
                <div class="hexagon"></div>
              </div>
              <div class="content-text">
                <!--<div class="time-line"></div>-->
                <div class="description">
                  {{content.description}}<br>
                </div>
              </div>
              <!--<div v-if="index + 1 !== work.contents.length">{{index}}</div>-->
            </li>
          </ul>
        </div>
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
          time: 'time.5 - time.5',
          subText: 'sub-text',
          contents: random({
            title: 'Hello, \'Im a single div responsive timeline without mediaQueries!',
            date: '20-07-1990',
            description: 'I\'m speaking with myself, number one, because I have a very good brain and I\'ve said a lot of things. I write the best placeholder text, and I\'m the biggest developer on the web by far... While that\'s mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.'
          })
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  $pd = 20px;
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
    background #35495e
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
  }

  /* content */
  .content-list {
    padding 0 $pd * 4;
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
      background: linear-gradient(to bottom, rgba(213, 213, 213, 0) 0%, rgb(213, 213, 213) 8%, rgb(213, 213, 213) 92%, rgba(213, 213, 213, 0) 100%);
      z-index: 5;
    }
  }

  .pole {
    &:before {
      position: absolute;
      left: 50%;
      top: 0;
      margin-left -5px;
      content: ' ';
      display: block;
      width: 10px;
      height: 2px;
      background: rgb(213, 213, 213);
      z-index: 5;
    }
    &:after {
      position: absolute;
      left: 50%;
      top: 100%;
      margin-left -5px;
      content: ' ';
      display: block;
      width: 10px;
      height: 2px;
      background: rgb(213, 213, 213);
      z-index: 5;
    }
  }

  .content {
    padding-top 2em
  }

  .content-header {
    margin: 0 0 0 50%;
  }

  .content-title {
    padding 0 0 0 $pd;
    display flex;
    > h2, > i {
      flex auto 0 0;
    }
    > .blank {
      flex 100% 1 1
    }
    > i {
      background darkcyan
      padding 2px 5px
    }
  }

  .content-date {
    text-align left
    padding-left $pd;
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
  .time-line {
    position absolute
    height 100%;
    left 50%;
    width 4px;
    margin-left -2px;
    &:before, &:after {
      position absolute;
      content: ' ';
    }
    &:before {
      background #35495e
      width 4px;
      height 100%
      display inline-block
      top 0;
    }
  }

  .time-point {
    position absolute
    left 50%;
    height 13.2px;
    width 24px;
    margin-left -12px;
    background: orangered;
    z-index 100
    &:before {
      content: "";
      position: absolute;
      top: -6px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      border-bottom: 6px solid orangered;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      border-top: 6px solid orangered;
    }
  }

  .time-point1 {
    position absolute
    left 50%;
    margin-left -12px;
    margin-top 8px;
    height 24px;
    width 24px;
    &:before, &:after {
      position absolute;
      content: ' ';
    }
    &:before {
      border-radius 50%
      border 1px solid orangered
      width 24px;
      height 24px
      display inline-block
      top 0;
    }
    &:after {
      border-radius 50%
      background orangered
      width 20px;
      height 20px
      display inline-block
      top 2px;
      left 2px;
    }
  }

  .hexagon {
    text-align: center;
    font-size: 22px;
    color: #3c3c3c;
    width: 16px;
    height: 10px;
    position: absolute;
    background: #00c4f3;
    z-index: 5;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    top: -30px;
    &:before {
      content: " ";
      position: absolute;
      left: 0;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 4px solid #00c4f3;
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
      border-top: 4px solid #00c4f3;
      bottom: -4px;
    }
  }
</style>
