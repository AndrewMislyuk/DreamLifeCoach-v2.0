export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DreamLifeCoach',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Oswald:wght@300;400;500;600;700&display=swap',
        rel: 'stylesheet',
      },
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/4f83b214c6.js',
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/vuelidate',
    },
    {
      src: '~/plugins/vue-inputmask',
      mode: 'client',
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  loading: false,
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-svg-loader'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
