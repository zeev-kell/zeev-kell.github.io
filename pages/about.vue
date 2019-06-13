<template>
  <div class="container">
    <div class="full-container flex-column">
      <div class="background"></div>
      <div class="image-container">
        <div class="image"></div>
        <div class="item-list">
          <vivus-pend class="pend-1">
            <text>Node.js</text>
          </vivus-pend>
          <vivus-pend class="pend-2" :point2="[50, 60]">
            <text>Node.js</text>
          </vivus-pend>
          <vivus-pend class="pend-3" :point2="[-40, 60]" :isXTurn="true">
            <text>Node.js</text>
          </vivus-pend>
        </div>
      </div>
      <div class="flex-row is-justify-center icons-wrap">
        <github/>
        <misc/>
      </div>
    </div>
    <div class="work-container">
      <header class="work-title">工作经历</header>
      <div class="work-list" v-for="work in workList">
        <div class="time text-center">
          <h2>{{work.time}}</h2>
          <p v-if="work.subText" class="sub-text">{{work.subText}}</p>
        </div>
        <ul class="content-container">
          <work-content :content="content" v-for="content in work.contents" :key="content.index"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import {random} from '../assets/utils';
  import VivusPend from '../components/vivus-pend'
  import Github from '~/components/github'
  import Misc from '~/components/misc'
  import WorkContent from '~/components/work-content'

  export default {
    name: "about",
    data() {
      return {
        workList_: [{
          time: '2014.5 - 2015.5',
          subText: '深圳市易数通科技有限公司',
          contents: [{
            title: 'Lorem ipsum Anim',
            date: '2014.5.23',
            description: '为测序服务商提供PB级的存储空间，实现下机数据与云端的直接对接.'
          }]
        }, {
          time: '2015.5 - 2016.3',
          subText: '深圳市潜游时光文化传媒有限公司',
          contents: random({
            title: 'Lorem ipsum Anim',
            date: '2018.5.23',
            description: '为测序服务商提供PB级的存储空间，实现下机数据与云端的直接对接.'
          }, 3)
        }, {
          time: '2016.3 - 至今',
          subText: '华大基因股份有限公司',
          contents: [{
            title: 'BGIOnline',
            link: 'https://www.bgionline.cn/',
            date: '2016.3 - 2019.2',
            technology: 'Ember.js + jQuery + Bootstrap',
            description: [
              '基因云计算平台，持多种形式进行上传下载，一键启动WGS、WES、RNA-Seq等多种分析流程。',
              ''
            ].join('<br>')
          }].reverse()
        }].reverse()
      }
    },
    computed: {
      workList() {
        let i = 0;
        this.workList_.forEach(w => {
          w.contents.forEach(c => {
            c.index = i++;
          })
        });
        return this.workList_;
      }
    },
    components: {
      VivusPend,
      Github,
      Misc,
      WorkContent
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/mixins.styl";
  $pd = 20px;
  $bg = #35495e;

  .background {
    position absolute;
    z-index 0;
    background #EEE
    width 100%
    height 100%;
    background url("/image/bg.jpg") no-repeat
    background-size cover
  }

  .image-container {
    position relative
    z-index 1
  }

  .image {
    background $bg
    border-radius 50%;
    width 25vh;
    height 25vh;
    position relative
  }

  .pend-1 {
    top 30%
    left 80%
  }

  .pend-2 {
    top 70%
    left 70%
  }

  .pend-3 {
    top 50%
    left 20%
  }

  .work-title {
    text-align: center;
    font-size 2.5rem;
    position relative;
    font-weight bold;
    margin-bottom: 60px;
    padding: 4rem 0 3rem;
    border-bottom: 1px solid #E4EAEC;
    background #f7f8fb
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

</style>
