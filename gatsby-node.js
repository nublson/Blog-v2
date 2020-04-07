const path = require('path')

module.exports = {
    onCreateNode({ node, actions }) {
        const { createNodeField } = actions

        if (node.internal.type === 'MarkdownRemark') {
            const slug = node.frontmatter.title
                .split(' ')
                .join('-')
                .toLowerCase()

            createNodeField({
                node,
                name: 'slug',
                value: slug,
            })
        }
    },

    async createPages({ graphql, actions }) {
        const { createPage } = actions

        const BlogTemplate = path.resolve('src/templates/blog/index.js')

        const response = await graphql(`
            query {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `)

        const { edges } = response.data.allMarkdownRemark

        edges.forEach(edge => {
            createPage({
                component: BlogTemplate,
                path: `/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug,
                },
            })
        })
    },
}
