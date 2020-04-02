import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const Image = styled.img``

const Logo = () => {
    const { file } = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "logo.svg" }) {
                publicURL
            }
        }
    `)

    const { publicURL: logo } = file

    return <Image src={logo} alt="nubelsondevBlog" />
}

export default Logo
