export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,

  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@intlify/nuxt3',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/sass/vendor.scss',
    '~/assets/sass/app.scss',
  ],
  colorMode: {
    classSuffix: '',
  },

  // plugins
  plugins: ['~/plugins/navbar.ts'],

  // build
  build: {
    transpile: ['@headlessui/vue'],
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en', 'zh'],
    },
  },
})
