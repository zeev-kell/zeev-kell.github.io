const pkg = require('./package')

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
// const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
//   router: {
//     base: '/zeev-kell/'
//   }
// } : {}

// 百度统计
const hm = process.env.NODE_ENV !== 'development' ? [{src: 'https://hm.baidu.com/hm.js?26c21b60bbfbfefe5a882f2ac5cb7fcc'}] : [];

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      ...hm
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/pwa'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
