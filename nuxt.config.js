
export default {
  mode: 'universal',
  srcDir: 'app',
  /*
  ** Headers of the page
  */
  head: {
    title: /*process.env.npm_package_name || */'CHARLII_k\’s Portfolio',
    titleTemplate: '%s - CHARLII_k\’s Portfolio',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=yes' },
      { hid: 'description', name: 'description', content: /*process.env.npm_package_description ||*/ '飯塚昂大(CHARLII_k)のPortfolioサイト' },
      { name: 'author', content: 'Iitsuka Kodai'},
      /* Twitterカードの設定 */
      { name: 'twitter:card',  content: 'summary_large_image' },
      { property: 'og:url', content: 'https://kodaisworks.com' },
      { property: 'og:title', content: 'CHARLII_k\'s Portfolio' },
      { property: 'og:description', content: '飯塚昂大(CHARLII_k)のPortfolioサイト' },
      { property: 'og:image', content: 'https://kodaisworks.com/img/portfolio_thumbnail.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      /* Google Font */
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:500,900|Noto+Serif+JP:500,900&amp;subset=japanese' },
      /* Font Awesome 5 */
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css', integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr', crossorigin: 'anonymous'}
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
