/*!

 =========================================================
 * Nuxt Black Dashboard - v1.0.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/nuxt-black-dashboard
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)

 * Coded by Creative Tim

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Black Dashboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css' }
    ],
    bodyAttrs: {
      class: '' // Add `white-content` class here to enable "white" mode.
    }
  },
  router: {
    linkExactActiveClass: 'active'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'assets/css/demo.css',
    'assets/css/nucleo-icons.css',
    'assets/sass/black-dashboard.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '@/plugins/dashboard-plugin.js',
    },
    {
      src: '@/plugins/firebase.js'
    },
    { src: '~/plugins/vue-time', ssr: false },
    { src: '~/plugins/vue-html-to-paper', ssr: false },


  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/moment'
  ],
  moment: {
    defaultLocale: 'id',
    locales: ['id']
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    'nuxt-i18n',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBKbb9Esuhqz0ZqapQAIeY-0mGl3XVq1X4",
          authDomain: "ticketing-apps-76952.firebaseapp.com",
          databaseURL: "https://ticketing-apps-76952-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "ticketing-apps-76952",
          storageBucket: "ticketing-apps-76952.appspot.com",
          messagingSenderId: "179528030623",
          appId: "1:179528030623:web:c8d7691d787d08c8c385aa",
          measurementId: "G-ZSLMPB3QC4"
        },
        services: {
          auth: {
            ssr: false, // default
          }
          // Just as example. Can be any other service.
        }
      }
    ]
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js'
      },
      {
        code: 'ar',
        file: 'ar.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://ticketing-apps-76952-default-rtdb.asia-southeast1.firebasedatabase.app/',
    fbApi: 'AIzaSyBKbb9Esuhqz0ZqapQAIeY-0mGl3XVq1X4'
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    babel: {
      plugins: [
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
          }
        ]
      ]
    }
  }
}
