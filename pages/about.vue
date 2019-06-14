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
            title: '深圳海事政务服务综合平台',
            link: 'http://219.133.95.7:7021/BenchmarkBusiness/pages/Login.jsp',
            date: '2014.5 - 2014.x',
            technology: 'Struts2 + Mybatis',
            post: 'Java开发',
            description: [
              '<div class="summary">x。</div>',
              '<div class="point">x。</div>',
              '<div class="duty">x。</div>'
            ].join('')
          }]
        }, {
          time: '2015.5 - 2016.3',
          subText: '深圳市潜游时光文化传媒有限公司',
          contents: [{
            title: '潜游时光电商平台',
            link: 'http://www.divingtime.asia/',
            date: '2015.5 - 2016.3',
            technology: 'Angular.js(1.x) + Bootstrap',
            post: '前端开发 + Node.js 开发',
            description: [
              '<div class="summary">潜游时光是针对中国区域日渐崛起的潜水度假市场，推出的专业特色服务，为了更大程度的开拓市场，自主开发了属于自己的电商平台。</div>',
              '<div class="point">响应式设计，定制化行程。</div>',
              '<div class="duty">前端 Angular.js(1.x) 开发。</div>'
            ].join('')
          }]
        }, {
          time: '2016.3 - 至今',
          subText: '华大基因股份有限公司',
          contents: [{
            title: 'BGIOnline - 基因云平台',
            link: 'https://www.bgionline.cn/',
            date: '2016.3 - 2019.2',
            technology: 'Ember.js + jQuery + Bootstrap',
            post: '前端开发 + Node.js 开发',
            description: [
              '<div class="summary">一款基于云计算与云储存能力，主要为各大测序服务商、研究机构等提供多组学大数据方面的综合解决方案等基因云平台，持多种形式进行上传下载，一键启动WGS、WES、RNA-Seq等多种分析流程。</div>',
              '<div class="point">大文件上传下载，自定义分析流程，多人项目协作，微服务化。</div>',
              '<div class="duty">前端 ember.js 的开发，搭建后端微服务框架， 后端 Node.js 的开发和数据库优化。</div>'
            ].join('')
          }, {
            title: '达芬奇 - 生命数据可视化 V1.0',
            date: '2016.8 - 至今',
            technology: 'jQuery + websocket + D3.js',
            post: '前端开发',
            description: [
              '<div class="summary">一款基于云计算与云储存能力，主要为各大测序服务商、研究机构等提供多组学大数据方面的综合解决方案等基因云平台，持多种形式进行上传下载，一键启动WGS、WES、RNA-Seq等多种分析流程。</div>',
              '<div class="point">大文件上传下载，自定义分析流程，多人项目协作，微服务化。</div>',
              '<div class="duty">前端 ember.js 的开发，搭建后端微服务框架， 后端 Node.js 的开发和数据库优化。</div>'
            ].join('')
          }, {
            title: '达芬奇 - 生命数据可视化 V2.0',
            date: '2017.3 - 至今',
            technology: 'Vue.js + Koa2.js + ECharts.js',
            post: '全栈开发',
            description: [
              '<div class="summary">针对 达芬奇v1.0 做的升级 ，适用于普通的展厅触屏版，并且增加对手机的适配。</div>',
              '<div class="point">响应式图表设计，移动端性能优化。</div>',
              '<div class="duty">排版设计（响应式设计），前后端开发。</div>'
            ].join('')
          }, {
            title: 'BGIOnline 自动化生产系统',
            date: '2018.5 - 2019.2',
            technology: 'Koa2.js + mysql',
            post: '后端开发',
            description: [
              '<div class="summary">针对 BGIonline 而设计自动化生产系统，通过流水线式的自动化处理，最大化减少人工操作，提高标准信息分析效率的同时，规避人工引入错误，提高分析任务成功率。</div>',
              '<div class="point">自动上传下载文件，自动启动分析任务。</div>',
              '<div class="duty">参与产品设计，负责自动化流程设计，负责后端数据库设计，主要后端 Node.js 的开发。</div>'
            ].join('')
          }, {
            title: '基因组学标准评测平台',
            date: '2019.4 - 至今',
            technology: 'Koa2.js + mysql + Python + CWL',
            post: '后端开发',
            description: [
              '<div class="summary">基因数据标准评测平台，通过汇聚海量人类基因组学的生物信息分析流程，提炼得到标准统一的人类基因组学标准规范的云平台。</div>',
              '<div class="point">CWL（生物分析流程描述语言），工具Docker镜像，kafka队列</div>',
              '<div class="duty">后端微服务 Node.js 的开发，数据库设计，CWL 格式处理，kafka队列生产和消费。</div>'
            ].join('')
          }].reverse()
        }].reverse()
      }
    },
    computed: {
      workList() {
        let i = 1;
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
