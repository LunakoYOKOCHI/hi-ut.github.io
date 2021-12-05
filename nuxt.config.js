import fs from 'fs'

const jsonDir = 'static/assets/json'

const environment = process.env.NODE_ENV
const env = require(`./env/${environment}.ts`)
env.publicationLatestFiscalYear = 2019

const routerBase =
  process.env.DEPLOY_ENV === 'hi'
    ? {
        router: {
          //base: '/dev/',
        },
      }
    : {}

const menuList = JSON.parse(fs.readFileSync(jsonDir + '/menuList.json'))
env.menuList = menuList

const organizationMap = JSON.parse(
  fs.readFileSync('static/assets/json/organizationMap.json')
)
env.organizationMap = organizationMap

const envMap = JSON.parse(fs.readFileSync('static/assets/json/env.json'))
for (const envKey in envMap) {
  env[envKey] = envMap[envKey]
}

// path
const baseUrl = env.BASE_URL || ''
const baseDir = env.BASE_DIR || '/'
const basePath = baseUrl + baseDir

// meta
const lang = 'ja'
const siteName =
  '東京大学史料編纂所 | Historiographical Institute The University of Tokyo'
const siteDesc =
  '東京大学史料編纂所は、古代から明治維新期にいたる前近代日本史関係の史料を対象とする研究所です。'
const siteKeywords =
  '東京大学史料編纂所, Historiographical Institute, 東京大学, The University of Tokyo'

// images
const iconImages = basePath + 'assets/img/common/'
const ogpImages = basePath + 'assets/img/common/'

// pwa
const shortName = 'HI'
const manifestIcon = 'img/icons/icon-512.png'
// const splashscreens = cdnPath + 'img/splashscreens/'

export default {
  telemetry: false,
  server: {
    port: 8000, // デフォルト: 3000
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ssr: true,
  // srcDir: 'src/',

  env,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang,
    },
    titleTemplate: `%s - ${siteName}`,
    title: siteName,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'format-detection',
        content: 'telephone=no, email=no, address=no',
      },
      // SEO関連
      { hid: 'description', name: 'description', content: siteDesc },
      { hid: 'keywords', name: 'keywords', content: siteKeywords },
      // ogp関連
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteName,
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: basePath },
      { hid: 'og:title', property: 'og:title', content: siteName },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDesc,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.hi.u-tokyo.ac.jp/icon.png', //`${ogpImages}home.jpg`,
      },
      { name: 'twitter:card', content: 'summary' },
      // pwa iOS
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
    ],
    link: [
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: iconImages + 'favicon-16.png',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: iconImages + 'favicon-32.png',
      },
      {
        rel: 'icon',
        sizes: '48x48',
        type: 'image/png',
        href: iconImages + 'favicon-48.png',
      },
      {
        rel: 'icon',
        sizes: '72x72',
        type: 'image/png',
        href: iconImages + 'favicon-72.png',
      },
      // apple touch icon
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: iconImages + 'apple-touch-icon.png',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;500&display=swap',
      },
    ],
  },

  manifest: {
    lang,
    name: siteName,
    short_name: shortName,
    description: siteDesc,
    background_color: '#ffffff',
    theme_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait',
  },
  icon: {
    iconFileName: manifestIcon,
  },

  loading: { color: '#E64A19', height: '5px' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/style.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/utils.ts'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    [
      '@nuxtjs/pwa',
      {
        offline: false,
      },
    ],
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    'nuxt-i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-gtag',
  ],

  'google-gtag': {
    id: 'G-6W9RFTNZZ7', //サイトのID
    debug: true, // 開発環境でも表示したい場合
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: baseUrl,
    routes: async () => {
      let pages = []
      pages = pages.concat(getFaculty())

      return pages
    },
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en_US', file: 'en.json' },
      { code: 'ja', iso: 'ja_JP', file: 'ja.json' },
      //{ code: 'zh', iso: 'zh_CH', file: 'zh.json' },
      //{ code: 'ko', iso: 'ko_KR', file: 'ko.json' },
    ],
    defaultLocale: 'ja',
    vueI18nLoader: true,
    lazy: true,
    langDir: 'static/assets/json/lang/',
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    //standalone: true,
  },

  ...routerBase,

  generate: {
    // dir: 'docs',

    routes() {
      const pages = []

      // 外部からリンクされていないページは生成されないため、手動で追加
      // faqのページを作成する
      var fs = require('fs')
      var files = fs.readdirSync('content/ja/faq/')

      const pathes = []
      for (const file of files) {
        if (file.includes('reuse') || file.includes('db.md')) {
          pathes.push('/faq/' + file.split('.md')[0])
        }
      }

      //引数の処理

      let syoho = null

      if (process.env['npm_config_argv']) {
        //macos local用
        const args = JSON.parse(process.env['npm_config_argv']).original
        for (let i = 0; i < args.length; i++) {
          const arg = args[i]
          if (arg.includes('--syoho')) {
            syoho = arg.split('=')[1]
          }
        }
      } else if (process.env['npm_config_syoho']) {
        //clioweb server用
        syoho = process.env['npm_config_syoho']
      }

      //引数に所報の号数が指定されている場合、generate
      if (syoho) {
        const dir = 'static/assets/json/publication/syoho/'
        var files = fs.readdirSync(dir)
        for (const file of files) {
          if (file.includes('.json')) {
            const df = JSON.parse(fs.readFileSync(dir + file))
            const vol = file.split('.')[0]
            if (vol === syoho) {
              for (const obj of df) {
                pathes.push(`/publication/syoho/${vol}/${obj.id}`)
              }
            }
          }
        }
      }

      for (const p of pathes) {
        pages.push({
          route: p,
        })
      }

      return pages
    },
  },
}

function getFaculty() {
  const pages = []

  const facultyList = JSON.parse(
    fs.readFileSync(`static/assets/json/faculty/facultyList.json`)
  )

  for (const faculty of facultyList) {
    const id = faculty.slug
    pages.push('/faculty/' + id)
    pages.push('/en/faculty/' + id)
  }

  return pages
}
