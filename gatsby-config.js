const pluginsProd = [
  'gatsby-plugin-no-sourcemaps',
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://www.domain.com',
      sitemap: 'https://www.domain.com/sitemap.xml',
      policy: [{
          userAgent: '*',
          allow: '/'
        },
        {
          userAgent: 'ia_archiver',
          disallow: '/'
        },
      ],
    },
  },
]
const pluginsDev = [{
  resolve: 'gatsby-plugin-robots-txt',
  options: {
    host: '',
    sitemap: '',
    policy: [{
        userAgent: '*',
        disallow: '/'
      },
      {
        userAgent: 'ia_archiver',
        disallow: '/'
      },
    ],
  },
}, ]

module.exports = {
  siteMetadata: {
    title: 'Example Project',
    description: 'Example description',
    siteUrl: 'https://www.domain.com',
    author: 'Team',
    twitter: 'Example',
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-autolink-headers', 'gatsby-remark-prismjs'],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
    },

  ].concat(process.env.ACTIVE_ENV === 'prod' ? pluginsProd : pluginsDev),
}