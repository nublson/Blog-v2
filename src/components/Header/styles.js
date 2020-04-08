import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    margin-bottom: 10rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${({ theme }) => theme.mediaQueries.small} {
        margin-bottom: 8rem;
    }

    @media ${({ theme }) => theme.mediaQueries.smallest} {
        margin-bottom: 7rem;
    }
`
