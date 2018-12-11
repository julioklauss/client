const webpack = require('webpack')

module.exports = {
  head: {
    title: 'nuxt-client',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto'},
    ]
  },

  loading: {color: '#3B8070'},

  modules: ['@nuxtjs/auth', '@nuxtjs/axios', 'bootstrap-vue/nuxt'],

  axios: {
    baseURL: 'http://localhost:5000/api/'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: 'auth/signin', method: 'post', propertyName: 'accessToken'},
          user: {url: 'user/me', method: 'get', propertyName: 'data'},
          logout: {url: 'auth/logout', method: 'post'}
        }
      }
    },
    redirect: {
      logout: '/login',
    },
    watchLoggedIn: true,
    rewriteRedirects: true
  },



  build: {
    extractCSS: true,
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    './node_modules/bootstrap/dist/css/bootstrap.css',
    { src: '~assets/css/style.css', lang: 'css' },
  ],
  plugins: ['~plugins/bootstrap.js', './plugins/mixins/user.js']
}
