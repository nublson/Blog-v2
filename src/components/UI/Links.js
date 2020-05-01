import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
    color: var(--text_highlight) !important;

    &:hover {
        color: var(--primary) !important;
        transition: 0.3s;
    }
`

export const SocialLink = ({ children, url }) => {
    return (
        <StyledLink href={url} target="_blank" rel="noopener noreferrer">
            {children}
        </StyledLink>
    )
}
