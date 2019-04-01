const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const remark = require('remark');
const remarkHTML = require('remark-html');
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      markdown: allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
      blog: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
        ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.markdown.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Create blog-list pages
    const poster = result.data.blog.edges
    const postsPerPage = 6
    const numPages = Math.ceil(poster.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/insights` : `/insights/${i + 1}`,
        component: path.resolve("./src/templates/blog.js"),
        context: {
          skip: i * postsPerPage,
          limit: postsPerPage,
          numPages,
          currentPage: i + 1
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  const nodess = node.frontmatter
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}