/**
 * 参考资料 https://segmentfault.com/a/1190000004852668
 */
class Matrix {
  constructor(canvas, _opts) {
    if (!canvas) {
      throw new Error('canvas required !')
    }
    let opts = {
      cW: 1368,
      cH: 600,
      wordColor: '#33ff33',
      fontSize: 16,
      speed: 0.13,
      words: "0123456789qwertyuiopasdfghjklzxcvbnm,./;'\[]QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?",
      ..._opts
    };
    this.opts = opts;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.winWidth = opts.cW; // 记录浏览器宽度
    this.winHeight = opts.cH; // 记录浏览器高度
    this.resizeId = null; //-- window resize时的重置ID
    this.wordsArr = opts.words.split('');
    // 第一次统一绘制
    this.drops = Array.from({length: opts.cW / opts.fontSize}).map(() => 1);
    window.requestAnimationFrame(this.resetDraw.bind(this));
  }

  // 调整重置间隔为 100毫秒
  resize() {
    if (this.resizeId) {
      clearTimeout(this.resizeId);
    }
    this.resizeId = setTimeout(() => {
      this.canvas.width = this.winWidth = document.body.offsetWidth;
      this.canvas.height = this.winHeight = document.body.offsetHeight;
    }, 100);
  }

  // 重新绘制
  resetDraw() {
    this.ctx.fillStyle = 'rgba(0,0,0,' + this.opts.speed + ')';
    this.ctx.fillRect(0, 0, this.winWidth, this.winHeight);
    this.ctx.save();
    this.ctx.fillStyle = this.opts.wordColor;
    this.ctx.font = this.opts.fontSize + "px arial";
    this.ctx.fontWeight = this.opts.fontWeight;
    for (let i = 0; i < this.drops.length; i++) {
      let text = this.wordsArr[Math.floor(Math.random() * this.wordsArr.length)];
      this.ctx.fillText(text, i * this.opts.fontSize, this.drops[i] * this.opts.fontSize);
      if (this.drops[i] * this.opts.fontSize > this.winHeight && Math.random() > 0.98) {
        // 回到第一行重新绘制
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
    this.ctx.restore();
    window.requestAnimationFrame(this.resetDraw.bind(this));
  }
}

export default Matrix;

