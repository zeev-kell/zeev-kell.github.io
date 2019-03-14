<template>
  <section class="container">
    <div style="position:relative;z-index: 2">
      <h1 class="title">
        zeev-kell
      </h1>
      <h2 class="subtitle">
        Web Front-end Engineer
      </h2>
      <div>
        <github />
      </div>
    </div>
    <canvas id="canvas"></canvas>
  </section>
</template>

<script>
  import Particle from '~/assets/particle'
  import Github from '~/components/github'

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
      Github
    }
  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

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
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: normal;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
</style>
