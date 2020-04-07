import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { BlogPosts } from './styles'

import BlogPost from '../UI/BlogPost'

const BlogList = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            date(formatString: "MMMM DD, YYYY")
                            author
                            tags
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    const { edges } = data.allMarkdownRemark

    return (
        <>
            <BlogPosts>
                {edges.map(({ node: post }) => (
                    <BlogPost
                        key={post.id}
                        title={post.frontmatter.title}
                        date={post.frontmatter.date}
                        author={post.frontmatter.author}
                        tags={post.frontmatter.tags}
                        url={post.fields.slug}
                    />
                ))}
            </BlogPosts>
        </>
    )
}

export default BlogList
