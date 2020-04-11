import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from './styles'

const Footer = () => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    const { author } = site.siteMetadata

    return (
        <Container>
            <p>
                &copy; 2020 <br /> With ❤️ and ☕ by <br />{' '}
                <a
                    href="https://nubelson.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {author}
                </a>
            </p>
        </Container>
    )
}

export default Footer
