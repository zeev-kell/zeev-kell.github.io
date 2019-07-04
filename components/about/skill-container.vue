<template>
  <div class="skill-container">
    <header class="container-title">personal skills</header>
    <p class="skill-text">
      做过一年的 java web 开发之后，转主力前端，刚好赶上前端框架大热，<br/>
      在深入学习JavaScript之后，转Node.js开发，目前按工作需要，负责部分系统的全栈开发。
    </p>
    <div class="container">
      <ul class="skill-list flex-row">
        <skill-content v-for="(item, index) in skillList" :item="item" :key="index"/>
      </ul>
    </div>
  </div>
</template>

<script type="text/babel">
  import SkillContent from './skill-content';

  export default {
    name: "skill-container",
    data() {
      return {
        skillList: [{
          title: '前端开发',
          content: '精通 HTML/CSS/JavaScript，熟练使用 vue.js 开发，有 angular.js 的开发经验。'
        }, {
          title: '后端开发',
          content: '熟练使用 Koa.js 进行 Node.js 开发，熟悉 Mongodb 和 SQL，有 Python 和 Java 的开发经验。'
        }, {
          title: '辅助工具',
          content: '熟练使用<span>Gulp</span>/<span>Webpack</span>进行前端构建，熟练使用<code>Git</code>代码管理'
        }, {
          title: '其他',
          content: '能使用<code>PhotoShop</code>简单的图片处理和平面设计，有<code>AfterEffects</code>作品。'
        }]
      }
    },
    components: {
      SkillContent
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .skill-container {
    background url("~assets/skill-banner.jpg")
    background-size: cover;
    background-attachment: fixed;
    color: #eeeeee
    padding-bottom: 4rem
    .container-title {
      border-bottom none
      &:after {
        background #c6cbd1
      }
    }
  }

  .skill-text {
    text-align center
    color #c6cbd1
    margin 3rem 0
  }

  .skill-list {
    list-style none
  }
</style>
