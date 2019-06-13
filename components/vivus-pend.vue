<template>
  <div class="pend" v-show="isShow">
    <svg width="2" height="2">
      <g>
        <circle cx="0" cy="0" r="4"></circle>
        <circle cx="0" cy="0" r="2"></circle>
      </g>
      <g>
        <line x1="0" y1="0" :x2="point2[0]" :y2="point2[1]"></line>
        <line :x1="point2[0]" :y1="point2[1]" :x2="point3[0]" :y2="point3[1]"></line>
      </g>
      <g :transform="transform" :text-anchor="textAnchor" v-show="isShowText">
        <slot></slot>
      </g>
    </svg>
  </div>
</template>

<script type="text/babel">
  import Vivus from 'vivus';

  export default {
    name: "vivus-pend",
    props: {
      point2: {
        default: function () {
          return [40, -60]
        }
      },
      isXTurn: {
        default: false
      }
    },
    data() {
      return {
        point1: [0, 0],
        isShow: false,
        isShowText: false
      }
    },
    computed: {
      point3() {
        let time = 150;
        return [this.point2[0] + (this.isXTurn ? -time : time), this.point2[1]]
      },
      transform() {
        return `translate(${this.point3[0] + (this.isXTurn ? -10 : 10)},${this.point3[1] + 5})`
      },
      textAnchor() {
        return this.isXTurn ? 'end' : 'start'
      }
    },
    mounted() {
      setTimeout(() => {
        this.isShow = true;
        let vivus = new Vivus(this.$el.querySelector('svg'), {
          type: 'scenario-sync',
          duration: 20,
          start: 'manual',
          dashGap: 20,
          forceRender: false
        }, () => {
          this.isShowText = true;
        });
        vivus.play(1);
      }, Math.random() * 400 + 100)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .pend {
    position absolute
    z-index 10;
    left 0;
    top 0;
  }

  svg {
    fill: none;
    stroke: currentColor;
    overflow visible
  }
</style>
