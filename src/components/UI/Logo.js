import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const StyledLink = styled(Link)`
    height: 6rem;
`

const Logo = () => {
    const { file } = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "logo.svg" }) {
                publicURL
            }
        }
    `)

    const { publicURL: logo } = file

    return (
        <StyledLink to="/">
            <img src={logo} alt="nubelsondevBlog" />
        </StyledLink>
    )
}

export default Logo
