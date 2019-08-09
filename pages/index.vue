<template>
  <section class="full-container">
    <div style="position:relative;z-index: 2">
      <h1 class="title">
        <a href="/about" title="about zeev-kell">zeev-kell</a>
      </h1>
      <h2 class="subtitle">
        Front End Engineer
      </h2>
      <div class="flex-row is-justify-center icons-wrap">
        <icon-github/>
        <icon-misc/>
      </div>
    </div>
    <canvas id="canvas"></canvas>
  </section>
</template>

<script type="text/babel">
  import Particle from '~/assets/particle'
  import IconGithub from '~/components/icon-github'
  import IconMisc from '~/components/icon-misc'

  export default {
    data() {
      return {
        particle: undefined
      }
    },
    mounted() {
      this.particle = new Particle(this.$el.querySelector('#canvas'), {
        drawType: ['polygon']
      });
      window.addEventListener('resize', this.particle.resize.bind(this.particle), false);
    },
    beforeDestroy() {
      this.particle.destroy();
      window.removeEventListener('resize', this.particle.resize.bind(this.particle));
    },
    components: {
      IconGithub,
      IconMisc,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/mixins.styl";
  #canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 400;
    font-size: 8rem;
    color: #35495e;
    letter-spacing: 1px;
    +for_breakpoint(_tablet) {
      font-size: 4rem;
    }
    a {
      text-decoration none
      color inherit
    }
  }

  .subtitle {
    font-weight: normal;
    font-size: 3rem;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
    +for_breakpoint(_tablet) {
      font-size: 1.5rem;
    }
  }

  .icons-wrap a {
    margin: 0 6px;
  }
</style>
