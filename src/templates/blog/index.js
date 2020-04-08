import React from 'react'
import { graphql } from 'gatsby'

import { Container, Thumbnail, StyledBody } from './styles'

import Layout from '../../components/Layout'

import Tags from '../../components/UI/Tags'
import { Title, Info } from '../../components/UI/BlogPost'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                tags
                date(formatString: "MMMM DD, YYYY")
                author
                title
                thumbnail {
                    publicURL
                }
            }
            html
        }
    }
`

const BlogTemplate = ({ data }) => {
    const {
        tags,
        date,
        author,
        title,
        thumbnail,
    } = data.markdownRemark.frontmatter
    const { publicURL } = thumbnail
    const { html } = data.markdownRemark

    return (
        <Layout>
            <Container>
                <Tags tags={tags} />
                <Title post> {title} </Title>
                <Info size="1.5">
                    {' '}
                    {date}, by <span>{author}</span>{' '}
                </Info>
                <Thumbnail url={publicURL} />

                <StyledBody dangerouslySetInnerHTML={{ __html: html }} />
            </Container>
        </Layout>
    )
}

export default BlogTemplate
