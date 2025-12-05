export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  
  app: {
    head: {
      title: 'ZESBE | Future Technology',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Experience the next generation of innovation. Where AI meets elegant design.' },
        { name: 'theme-color', content: '#0a0a0f' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'ZESBE | Future Technology' },
        { property: 'og:description', content: 'Experience the next generation of innovation. Where AI meets elegant design.' },
        { property: 'og:image', content: 'https://nexus.zesbe.my.id/og-image.svg' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600&display=swap' }
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js', defer: true }
      ]
    }
  },

  css: ['~/assets/css/main.css'],
})
