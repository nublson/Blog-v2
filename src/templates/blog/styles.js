import styled from 'styled-components'

export const Container = styled.div`
    max-width: 118rem;
    margin: 0 auto;
    padding: 0 1rem;
`

export const Thumbnail = styled.div`
    height: 50rem;
    margin: 3.5rem 0 6.5rem;
    background-image: url(${props => props.url});
    background-size: cover;
    background-position: center;
    border-radius: var(--radius);

    @media ${({ theme }) => theme.mediaQueries.small} {
        height: 40rem;
    }

    @media ${({ theme }) => theme.mediaQueries.smaller} {
        height: 30rem;
    }

    @media ${({ theme }) => theme.mediaQueries.smallest} {
        height: 20rem;
    }
`

export const StyledBody = styled.div`
    & > * {
        margin: 1rem 0;
    }

    img {
        max-width: 100%;
    }

    blockquote {
        background-color: var(--background-highlight);
        padding: 1rem 2rem;
        font-style: italic;
        border-left: 4px solid var(--primary);
    }

    a {
        &:link,
        &:visited {
            font-weight: 600;
            color: var(--primary);
            text-decoration: underline;
            transition: all 0.2s;
        }

        &:hover,
        &:active {
            text-decoration: underline transparent;
        }
    }

    pre {
        padding: 1rem 2rem;
    }
`
