/**
 * 参考资料 https://zhuanlan.zhihu.com/p/28257724
 */
const U = Math.PI * 2;
const random = Math.random;
const GOLDEN = 0.618;

class Particle {
  constructor(canvas, opts = {}) {
    if (!canvas) {
      throw new Error('canvas required !')
    }
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.drawMethods = []; // 绘制的类型
    this.winWidth = undefined; // 记录浏览器宽度
    this.winHeight = undefined; // 记录浏览器高度
    this.resizeId = null; //-- window resize时的重置ID
    this.setOpts(opts);
    this.resize();
  }

  // 修改配置参数
  setOpts(_opts) {
    let opts = {
      increase: 0, //-- 颜色递增值，影响颜色渐变开始和结束值
      globalAlpha: 0.5, //-- 透明度，影响效果叠加
      amplitude: 1.5, //-- 增幅，影响点递增量
      wave: 100, //-- 波动，影响生成第三个点到前两个点的距离
      ..._opts
    };
    if (!_opts['drawType']) {
      // 绘制的类型，可选类型有 polygon circle line，默认 circle
      opts.drawType = ['circle'];
    } else if (typeof _opts['drawType'] === 'string') {
      _opts.drawType = [_opts['drawType']]
    }
    // 用于绘制的函数
    this.drawMethods = opts.drawType.map((type) => {
      return 'draw' + type.substring(0, 1).toUpperCase() + type.substring(1);
    });
    this.drawHelper = getDrawHelper(opts);
    this.opts = opts;
  }

  // 调整重置间隔为 100毫秒
  resize() {
    if (this.resizeId) {
      clearTimeout(this.resizeId);
    }
    this.resizeId = setTimeout(() => {
      this.canvas.width = this.winWidth = document.body.offsetWidth;
      this.canvas.height = this.winHeight = document.body.offsetHeight;
      this.resetDraw();
    }, 100);
  }

  // 重新绘制
  resetDraw() {
    this.ctx.clearRect(0, 0, this.winWidth, this.winHeight);
    this.ctx.globalAlpha = this.opts.globalAlpha;
    // 两个起点坐标 wave 为起点修正参数
    this.point = [
      {x: 0, y: this.winHeight * GOLDEN + this.opts.wave},
      {x: 0, y: this.winHeight * GOLDEN - this.opts.wave}
    ];
    // 仅根据 x轴 判断绘制结束
    while (this.point[1].x < (this.winWidth + this.opts.wave)) {
      this.draw(this.point[0], this.point[1])
    }
  }

  // 绘制点，计算第三点的位置和颜色
  draw(_1, _2) {
    let _3 = this.getNextPoint(_1, _2);
    let color = this.getColor();
    this.drawMethods.forEach((method) => {
      this[method](_1, _2, _3, color, this.opts)
    });
    // 切换为第二个和第三个点，作为下个绘制点
    this.point[0] = _2;
    this.point[1] = _3;
  }

  // 获取第三个点，目前是只根据第二个点生成
  getNextPoint(_1, _2) {
    let _3 = {};
    _3.x = _2.x + (random() * this.opts.amplitude - 0.25) * this.opts.wave;
    _3.y = this.getNext(_2.y);
    return _3;
  }

  // 获取下一个点Y轴
  getNext(y) {
    let next = y + (random() * 2 - 1.1) * this.opts.wave;
    // 防止生成 溢出 或者 负数 点
    return (next > this.winHeight || next < 0) ? this.getNext(y) : next;
  }

  // 获取递增值的颜色值
  getColor() {
    this.opts.increase -= U / -50;
    let R = Math.cos(this.opts.increase) * 127 + 128 << 16;
    let G = Math.cos(this.opts.increase + U / 3) * 127 + 128 << 8;
    let B = Math.cos(this.opts.increase + U / 3 * 2) * 127 + 128;
    return '#' + (R | G | B).toString(16);
  }

  // 绘制多边形
  drawPolygon(_1, _2, _3, color) {
    this.ctx.beginPath();
    // 中心
    let c = {};
    // 计算三点的中心为多边形的中心
    c.x = (_1.x + _2.x + _3.x) / 3 + (random() * this.opts.amplitude - 0.25) * this.opts.wave;
    c.y = (_1.y + _2.y + _3.y) / 3 + (random() * this.opts.amplitude - 0.25) * this.opts.wave;

    let sideLength = this.drawHelper.getSideLength(); //-- 边数
    let initialAngle = this.drawHelper.getInitialAngle(); //-- 角度
    let radius = this.drawHelper.getRadius() / this.opts.amplitude; //-- 半径
    let angle = U / sideLength;
    let x = radius * Math.cos(initialAngle) + c.x;
    let y = radius * Math.sin(initialAngle) + c.y;
    this.ctx.moveTo(x, y);
    // 计算出每个点的位置，然后连接成正多边形
    for (let i = 1; i < sideLength; i++) {
      x = radius * Math.cos(initialAngle + i * angle) + c.x;
      y = radius * Math.sin(initialAngle + i * angle) + c.y;
      this.ctx.lineTo(x, y);
    }
    this.ctx.closePath();
    this.ctx.fillStyle = color;
    this.ctx.fill();
  }

  // 绘制圆形
  drawCircle(_1, _2, _3, color) {
    this.ctx.beginPath();
    // 中心
    let c = {};
    // 计算三点的中心为圆心
    c.x = (_1.x + _2.x + _3.x) / 3 + (random() * this.opts.amplitude - 0.25) * this.opts.wave;
    c.y = (_1.y + _2.y + _3.y) / 3 + (random() * this.opts.amplitude - 0.25) * this.opts.wave;
    this.ctx.arc(c.x, c.y, random() * random() * 50 / this.opts.amplitude, 0, U, false);
    this.ctx.closePath();
    this.ctx.fillStyle = color;
    this.ctx.fill();
  }

  // 绘制一条不断连接的直线
  drawLine(_1, _2, _3, color) {
    this.ctx.beginPath();
    // 1分别和2、3连接，绘制成三角形
    this.ctx.moveTo(_1.x, _1.y);
    this.ctx.lineTo(_2.x, _2.y);
    this.ctx.lineTo(_3.x, _3.y);
    this.ctx.closePath();
    this.ctx.fillStyle = color;
    this.ctx.fill();
  }

  // 摧毁对象
  destroy() {
    this.ctx.clearRect(0, 0, this.winWidth, this.winHeight);
  }
}

function getDrawHelper(opts) {
  // 目前只有 polygon 有随机边角
  if (~opts.drawType.indexOf('polygon')) {
    let drawHelper = {
      getSideLength() {
        return Math.floor(random() * 10) + 3;
      },
      getInitialAngle() {
        return random() * U;
      },
      getRadius() {
        return random() * 50
      }
    };
    Object.keys(opts.params || {}).forEach((key) => {
      if (typeof opts.params[key] === 'function') {
        drawHelper[key] = opts.params[key];
      } else {
        drawHelper[key] = function () {
          return opts.params[key];
        };
      }
    });
    return drawHelper
  }
}

export default Particle;
