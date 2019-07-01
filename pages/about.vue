<template>
  <div class="container">
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

    <div class="skill-container">
      <header class="work-title">personal skills</header>
      <div>11</div>
    </div>

    <div class="work-container">
      <header class="work-title">experience</header>
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
            date: '2014.5 - 2014.10',
            technology: 'Struts2 + Mybatis + Jquery + EasyUI',
            post: 'Java Web开发',
            description: '深圳海事局按照“统一受理、统一监察、统一审批”的思路，率先整合接入通航管理类审批，船舶登记类审批，危管防污类审批等业务功能，同时对效能监察平台进行改造。'
          }, {
            title: '部海事局协同管理平台',
            date: '2014.10 - 2015.1',
            technology: 'Struts2 + Mybatis + Jquery + EasyUI',
            post: '小组组长-前端开发',
            description: '将在现有系统完善升级的基础上，实现海事信息系统的统一内部用户认证和权限分配，实现各专业系统的<strong>单点登录管理</strong>等功能。'
          }, {
            title: '易数通用户中心平台',
            date: '2015.1 - 2015.5',
            technology: 'SSH + MySQL + Jquery + EasyUI',
            post: '前端组长',
            description: '整合易数通其他系统的用户管理，主要涉及权限、质控流程控制。'
          }].reverse()
        }, {
          time: '2015.5 - 2016.3',
          subText: '深圳市潜游时光文化传媒有限公司',
          contents: [{
            title: '潜游时光电商平台',
            link: 'http://www.divingtime.asia/',
            date: '2015.5 - 2016.3',
            technology: 'Angular.js(1.x) + Bootstrap',
            post: '前端开发',
            description: '针对中国区域日渐崛起的潜水度假市场，推出的专业特色服务，自主开发的<strong>电商平台</strong>。'
          }]
        }, {
          time: '2016.3 - 至今',
          subText: '华大基因股份有限公司',
          contents: [{
            title: 'BGIOnline - 基因云平台',
            link: 'https://www.bgionline.cn/',
            date: '2016.3 - 2019.2',
            technology: 'Ember.js + jQuery + Bootstrap',
            post: '前端开发',
            description: '基于云计算与云储存能力的<strong>基因云平台</strong>，持多种形式进行上传下载，一键启动WGS、WES、RNA-Seq等多种分析流程。'
          }, {
            title: '达芬奇 - 生命数据可视化 V1.0',
            date: '2016.8 - 至今',
            technology: 'jQuery + WebSocket + D3.js',
            post: '全栈开发',
            description: '展示华大部分产业相关数据的<strong>大数据可视化系统</strong>，目前只能在基因库超大环屏展示'
          }, {
            title: '达芬奇 - 生命数据可视化 V2.0',
            link: 'http://davinci.bgionline.cn/sign-in',
            date: '2017.3 - 至今',
            technology: 'Vue.js + ECharts.js + Koa2.js',
            post: '全栈开发',
            description: '针对<strong>达芬奇v1.0</strong>做的升级，适用于普通的展厅触屏版，并且增加对手机的适配。'
          }, {
            title: 'BGIOnline 自动化生产系统',
            link: 'https://auto.bgionline.cn/#/access/login',
            date: '2018.5 - 2019.2',
            technology: 'Koa2.js + mysql',
            post: '后端开发',
            description: '针对BGIOnline而设计<strong>自动化生产系统</strong>，通过流水线式的自动化处理，最大化减少人工操作，提高分析任务成功率。'
          }, {
            title: '基因组学标准评测平台',
            date: '2019.4 - 至今',
            technology: 'Koa2.js + mysql + Python + CWL',
            post: '后端开发',
            description: '通过汇聚海量人类基因组学的生物信息分析流程，提炼得到标准统一的<strong>人类基因组学标准规范的云平台</strong>。'
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
      Github,
      Misc,
      WorkContent
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/mixins.styl";
  $pd = 20px;
  $bg = #35495e;

  .background {
    position absolute;
    z-index 0;
    width 100%
    height 100%;
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

  .work-title {
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
  }

  .sub-text {
    color: #7f828b
    font-size 80%;
    margin 5px 0 0 0;
  }

  .work-list {
    margin-bottom 4rem;
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

  .icons-wrap a {
    margin: 0 6px;
  }

</style>
