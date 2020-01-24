module.exports = {
  title: 'Core Interaction',
  description: 'Studio & Lab Course Site Spring 2020',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    nav: [
      // { text: 'Weekly Agendas', link: '/agendas/' },

      { text: 'Home', link: '/' },
      { text: 'Readings', link: '/readings/' },
      { text: 'Lessons', link: '/lessons/' },
      { text: 'Studio Projects', link: '/projects/' },
      { text: 'Class Info', link: '/info/' },
      { text: 'Resources', link: '/resources/' }
    ],
    searchPlaceholder: 'Search Anything...',
    lastUpdated: 'Last Updated'
  },
  plugins: ['vuepress-plugin-smooth-scroll']
};
