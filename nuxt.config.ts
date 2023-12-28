export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@nuxtjs/tailwindcss','@pinia/nuxt'],
  app : {
    head : {
      title : 'Geeks',
      meta : [
        {name : 'description' , content : 'Geeks website'}
      ],
      link : [
        { rel : 'stylesheet' , href : 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'},
        { rel : 'stylesheet' , href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',},
      ]
    }
  },
  css: ['~/assets/css/global.css'],
})