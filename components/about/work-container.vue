<template>
  <div class="work-container">
    <header class="container-title">experience</header>
    <div class="work-list" v-for="work in workList">
      <div class="time text-center">
        <h2>{{work.time}}</h2>
        <p v-if="work.subText" class="sub-text">{{work.subText}}</p>
        <p class="work-post">{{work.post}}</p>
      </div>
      <ul class="content-container">
        <work-content :item="item" v-for="item in work.contents" :key="item.index"/>
      </ul>
    </div>
  </div>
</template>

<script type="text/babel">
  import WorkContent from './work-content'
  import workList from './work-list'

  export default {
    name: "work-container",
    data() {
      return {
        workList
      }
    },
    components: {
      WorkContent
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/var.styl";

  .sub-text {
    color: #7f828b
    font-size 80%;
    margin 5px 0 0 0;
  }

  .work-post {
    font-size 80%;
    margin 5px 0 0 0;
    color: $bg
    font-weight bold
  }

  .work-list {
    margin-bottom 4rem;
  }

  /* content */
  .content-container {
    padding 0 20px * 4;
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
