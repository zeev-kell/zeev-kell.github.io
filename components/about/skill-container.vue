<template>
  <div class="skill-container">
    <header class="container-title">personal skills</header>
    <div class="text-center">
      做过一年的 java web 开发之后，转主力前端，刚好赶上前端框架大热，<br/>
      在深入学习JavaScript之后，转Node.js开发，目前按工作需要，负责部分系统的全栈开发。
    </div>
    <div class="skill-list">
      <ul>
        <li>
          <img src="/image/bg-mountain.jpg">
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: "skill-container",
    data() {
      return {
        'd': `前端： angular.js(1.x)  vue.js(2.x)   HTML  CSS  JavaScript
后端： Node.js  Python Java  SQL
工具： Git  Gulp  webpack
其他： Photeshop  AfterEffects`
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
