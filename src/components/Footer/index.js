import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, SociaslGroup } from './styles'

import {
    faGithub,
    faInstagram,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'

import { SocialIcon } from '../UI/Icons'
import { SocialLink } from '../UI/Links'

const Footer = () => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    username
                }
            }
        }
    `)

    const { author, username } = site.siteMetadata

    return (
        <Container>
            <p>
                &copy; 2020 <br /> With ❤️ and ☕ by <br />{' '}
                <a
                    href={`https://www.linkedin.com/in/${username}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {author}
                </a>
            </p>
            <SociaslGroup>
                <SocialLink url={`https://github.com/${username}`}>
                    <SocialIcon icon={faGithub} />
                </SocialLink>
                <SocialLink url={`https://www.instagram.com/${username}/`}>
                    <SocialIcon icon={faInstagram} />
                </SocialLink>
                <SocialLink url={`https://twitter.com/${username}`}>
                    <SocialIcon icon={faTwitter} />
                </SocialLink>
                <SocialLink
                    url={
                        'https://www.youtube.com/channel/UCYj7SSTqryZNO-lGjYlIx3Q/'
                    }
                >
                    <SocialIcon icon={faYoutube} />
                </SocialLink>
            </SociaslGroup>
        </Container>
    )
}

export default Footer
