import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'

const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        margin-bottom: 3rem;
        width: 40.2rem;
        height: 34.8rem;
    }

    p {
        color: var(--text-highlight);

        span {
            color: var(--primary);
            font-weight: bold;
            text-transform: uppercase;
        }

        a {
            text-decoration: underline var(--primary);
            color: var(--text-highlight);
        }
    }

    @media ${({ theme }) => theme.mediaQueries.small} {
        img {
            margin-bottom: 2rem;
            width: 23.4rem;
            height: 20.3rem;
        }

        p {
            font-size: 1.3rem;
        }
    }
`

const PageNotFound = () => {
    const { file } = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "404.svg" }) {
                publicURL
            }
        }
    `)

    const { publicURL: image } = file

    return (
        <Layout>
            <Container>
                <img src={image} alt="Page Not Found" />
                <p>
                    {' '}
                    <span>Page Not Found</span> ? <Link to="/">Click Here</Link>{' '}
                    : 'Have Fun'{' '}
                </p>
            </Container>
        </Layout>
    )
}

export default PageNotFound
