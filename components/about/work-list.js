let workList = [{
  time: '2014.5 - 2015.5',
  subText: '深圳市易数通科技有限公司',
  post: 'Java Web 开发',
  contents: [{
    title: '深圳海事政务服务综合平台',
    link: 'http://219.133.95.7:7021/BenchmarkBusiness/pages/Login.jsp',
    date: '2014.5 - 2014.10',
    technology: 'Struts2 + Mybatis + Jquery + EasyUI',
    post: 'Java Web开发',
    description: '整合接入深圳海事局通航管理类审批、船舶登记类审批、危管防污类审批等业务功能，同时对效能监察平台进行改造。'
  }, {
    title: '部海事局协同管理平台',
    date: '2014.10 - 2015.1',
    technology: 'Struts2 + Mybatis + Jquery + EasyUI',
    post: '小组组长-前端开发',
    description: '完善升级现有系统，实现海事信息系统的统一内部用户认证和权限分配，实现各专业系统的<strong>单点登录管理</strong>等功能。'
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
  post: '前端开发',
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
  post: '全栈开发',
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
}].reverse();

let i = 1;
workList.forEach(w => {
  w.contents.forEach(c => {
    c.index = i++;
  })
});

export default workList
