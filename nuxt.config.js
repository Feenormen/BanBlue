const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // {
      //   rel: 'stylesheet',
      //   type: 'text/css',
      //   href: '/css/usually.scss'
      // },
      // {
      //   rel: 'stylesheet',
      //   type: 'text/css',
      //   href: '/css/default-theme.scss'
      // }
    ],
    script: [
      // {
      //   src: '/js/background-flower.js',
      //   type: 'text/javascript',
      //   charset: 'utf-8'
      // }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    { src: 'element-ui/lib/theme-chalk/index.css' },
    { src: 'normalize.css/normalize.css' },
    { src: '~assets/css/index.scss' }
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/element-ui', ssr: false },
    { src: '@/plugins/axios', ssr: false },
    { src: '@/plugins/init-helpers', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    prefix: '/api/',
    proxy: true
  },
  styleResources: {
    scss: './assets/css/var.scss'
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    postcss: {
      plugins: {
        // 通过传递 false 来禁用插件
        'postcss-responsive-type': {},
        'postcss-hexrgba': {},
        'postcss-nested': {}
      },
      preset: {
        // 更改postcss-preset-env 设置
        autoprefixer: {
          browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
        }
      }
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
