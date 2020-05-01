import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: max-content;
    margin: 18rem auto 0;
    padding: 0 2rem;
    text-align: center;
    font-size: 1.4rem;
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    color: var(--text-highlight);

    a {
        color: var(--primary);
        font-weight: 600;
    }
`

export const SociaslGroup = styled.div`
    margin-top: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & > *:not(:last-child) {
        margin-right: 1.5rem;
    }
`
