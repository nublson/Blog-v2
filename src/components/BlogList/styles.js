import styled from 'styled-components'

export const BlogPosts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-gap: 3rem;
    justify-content: center;

    @media ${props => props.theme.mediaQueries.medium} {
        grid-template-columns: repeat(2, max-content);
    }

    @media ${props => props.theme.mediaQueries.small} {
        grid-template-columns: max-content;
    }
`
