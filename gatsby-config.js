module.exports = {
  siteMetadata: {
    title: `Digett`,
    description: `Screaming fast sites.`,
    siteUrl: `https://www.digett.com`,
    author: `@alexanderfountain`,
    logo: `/assets/logo_no_comp.png`,
    topLinks:[
      {
         name:'contact',
         link:'/contact',
         class:'button'
      },
      {
         name:'210-853-5808',
         link:'tel:210-853-5808',
         icon: 'fas fa-mobile-alt'
      }
    ],
    menuLinks:[
      {
         name:'solutions',
         link:'/digital-marketing-solutions'
      },
      {
         name:'msp marketing',
         link:'/msp-marketing'
      },
      {
         name:'philosophy',
         link:'/philosophy'
      },
      {
        name:'about',
        link:'/about-digett'
      },
      {
        name:'insights',
        link:'/insights'
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `category`, `summary`, `path`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            category: node => node.frontmatter.category,
            path: node => node.fields.slug,
            summary: node => node.frontmatter.summary,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-K566PM2",
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-135446148-1",
        // Avoids sending pageview hits from custom paths
        exclude: ["/admin/**"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`
			}
		},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto']
        }
      }
    },
    `gatsby-v2-plugin-page-transitions`,
    `gatsby-plugin-lodash`,
    `gatsby-plugin-glamor`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`, // make sure to keep it last in the array
    `gatsby-plugin-netlify-headers`,
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
