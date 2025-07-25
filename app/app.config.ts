export default defineAppConfig({
  global: {
    meetingLink: 'https://cal.com/0000/15min',
    available: true,
  },
  profile: {
    name: 'API360',
    job: 'Frontend Architect and Designer',
    email: 'email@example.com',
    phone: '00 00 00 00 00',
    picture: '/logo-dark.svg',
  },
  socials: {
    github: 'https://github.com/0000',
    twitter: 'https://twitter.com/0000__',
    linkedin: 'https://www.linkedin.com/in/hugo-richard-0801',
    instagram: 'https://www.instagram.com/hugo.rcd_',
    spotify: 'https://open.spotify.com/user/yuvl0zpp3bpx4hne1ag7huten?si=df7ee2777c0c4fc4',
  },
  seo: {
    title: 'Canvas a Nuxt portfolio template',
    description: 'Canvas is a simple but beautiful portfolio template for designers and developers built with Nuxt and Tailwind CSS. Made with ❤️ by 0000',
    url: 'https://canvas.hrcd.fr',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})
